import { useAppDispatch } from "../store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { updateEntity, updateStatus } from "../../store/authentication/slice";
import AuthenticationStatus from "../../constants/authenticationStatus";
import pages from "../../constants/pages";

const useMicrosoftLoginHandler = (options: { redirectPath?: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();

  console.log(accounts);

  const microsoftLoginHandler = useCallback(async () => {
    try {
      if (accounts.length > 0) {
        dispatch(updateEntity(accounts[0]));
        dispatch(updateStatus(AuthenticationStatus.Authenticated));
        navigate({ pathname: options.redirectPath ?? pages.home.route });
        return;
      }

      const auth = await instance.ssoSilent({
        scopes: [],
        redirectUri: "http://localhost:3000/",
        authority:
          "https://login.microsoftonline.com/819d0330-fb4c-48d9-996e-29be018ee9b5",
      });

      console.log("auth", auth);
    } catch (e) {
      console.error(e);
      dispatch(updateEntity(undefined));
      dispatch(updateStatus(AuthenticationStatus.Error));
    }
  }, [accounts, dispatch, instance, navigate, options.redirectPath]);

  return [microsoftLoginHandler];
};

export default useMicrosoftLoginHandler;
