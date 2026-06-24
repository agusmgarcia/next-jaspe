import { useMemo } from "react";

import { constants } from "#src/utils";

import type ViewerProps from "./Viewer.types";

export default function useViewer({
  formatId: formatIdFromProps,
  stoneId: stoneIdFromProps,
  ...rest
}: ViewerProps) {
  const dimensions = useMemo(
    () =>
      formatIdFromProps === "story"
        ? { height: 1920, width: 1080 }
        : { height: 1920, width: 1080 },
    [formatIdFromProps],
  );

  const background = useMemo(
    () => ({
      height: dimensions.height,
      src: constants.STONES[stoneIdFromProps].path,
      width: dimensions.width,
    }),
    [dimensions.height, dimensions.width, stoneIdFromProps],
  );

  const logo = useMemo(
    () => ({
      height: undefined,
      src: constants.LOGO_PATHS[constants.STONES[stoneIdFromProps].logo],
      width: formatIdFromProps === "story" ? 360 : 360,
    }),
    [formatIdFromProps, stoneIdFromProps],
  );

  const style = useMemo(
    () => ({
      height: `${dimensions.height}px`,
      width: `${dimensions.width}px`,
    }),
    [dimensions.height, dimensions.width],
  );

  return { ...rest, background, logo, style };
}
