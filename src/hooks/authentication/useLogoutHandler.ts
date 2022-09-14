import { useAppDispatch } from "../store";
import { useCallback, useMemo } from "react";
import { logout } from "../../store/authentication/actions";
import {useNavigate} from "react-router-dom";
import pages from "../../constants/pages";

const useLogoutHandler = (options: {redirectPath?: string}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate({pathname: options?.redirectPath || pages.home.route})
    } catch (e) {
      // TODO: error handling
      console.error(e);
    }
  }, [dispatch, navigate, options?.redirectPath]);

  return useMemo(() => [logoutHandler], [logoutHandler]);
};

export default useLogoutHandler;
