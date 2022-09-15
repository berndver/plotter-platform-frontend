import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import pages from "../../constants/pages";
import { useMsal } from "@azure/msal-react";
import useAuthentication from "./useAuthentication";
import { useDispatch } from "react-redux";
import { updateEntity, updateStatus } from "../../store/authentication/actions";
import AuthenticationStatus from "../../constants/authenticationStatus";
import baseUrl from "../../constants/baseUrl";

const useLogoutHandler = (options: { redirectPath?: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuthentication();
  const { instance } = useMsal();

  const logoutHandler = useCallback(async () => {
    try {
      await instance.logout({
        account: currentUser,
        postLogoutRedirectUri: baseUrl,
      });
      dispatch(updateEntity(undefined));
      dispatch(updateStatus(AuthenticationStatus.Unauthenticated));
      navigate({ pathname: options?.redirectPath || pages.home.route });
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
  }, [currentUser, dispatch, instance, navigate, options?.redirectPath]);

  return useMemo(() => [logoutHandler], [logoutHandler]);
};

export default useLogoutHandler;
