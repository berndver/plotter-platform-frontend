import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";

const useIsWideWidth = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return useMemo(() => [matches], [matches]);
};

export default useIsWideWidth;
