import { useMediaQuery } from "@mantine/hooks";
import { MantineSize, useMantineTheme } from "@mantine/core";

interface useMediaQueryFromBreakpointsParams {
  (breakpoint?: MantineSize, query?: "max-width" | "min-width"):
    | boolean
    | undefined;
}

export const useMediaQueryFromBreakpoints: useMediaQueryFromBreakpointsParams =
  (breakpoint = "sm", query = "max-width") => {
    const theme = useMantineTheme();
    const bool = useMediaQuery(
      `(${query}: ${theme.breakpoints[breakpoint]})`,
      undefined,
      {
        // prevent layout shifting, just undefined
        getInitialValueInEffect: false,
      }
    );

    return bool;
  };
