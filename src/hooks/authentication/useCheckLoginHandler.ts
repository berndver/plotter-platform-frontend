import { useAppDispatch } from "../store";
import { useCallback } from "react";
import { checkLogin } from "../../store/authentication/actions";

const useCheckLoginHandler = () => {
  const dispatch = useAppDispatch();

  const checkLoginHandler = useCallback(async () => {
    const user = await dispatch(checkLogin());

    console.log("user login check", user);

    return user;
  }, [dispatch]);

  return [checkLoginHandler];
};

export default useCheckLoginHandler;
