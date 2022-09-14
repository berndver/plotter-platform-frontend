import { useAppDispatch } from "../store";
import { useCallback } from "react";
import { microsoftLogin } from "../../store/authentication/actions";
import { useNavigate } from "react-router-dom";
import pages from "../../constants/pages";

const useMicrosoftLoginHandler = (options: { redirectPath?: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const microsoftLoginHandler = useCallback(async () => {
    try {
      const user = await dispatch(microsoftLogin()).unwrap();
      navigate({ pathname: options?.redirectPath || pages.home.route });
      return user;
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, navigate, options?.redirectPath]);

  return [microsoftLoginHandler];
};

export default useMicrosoftLoginHandler;
