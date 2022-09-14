import { useAppSelector } from "../store";
import {
  selectCurrentUser,
  selectStatus,
} from "../../store/authentication/selectors";
import { useMemo } from "react";

const useAuthentication = () => {
  const status = useAppSelector(selectStatus);
  const currentUser = useAppSelector(selectCurrentUser);

  return useMemo(() => [status, currentUser], [status]);
};

export default useAuthentication;
