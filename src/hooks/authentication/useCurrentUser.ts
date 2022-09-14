import { useAppSelector } from "../store";
import { selectCurrentUser } from "../../store/authentication/selectors";
import { useMemo } from "react";

const useCurrentUser = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return useMemo(() => [currentUser], [currentUser]);
};

export default useCurrentUser;
