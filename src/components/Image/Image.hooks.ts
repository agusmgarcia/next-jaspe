import { useMemo } from "react";

import type ImageProps from "./Image.types";

export default function useImage({
  height: heightFromProps,
  modifiers: modifiersFromProps,
  src: srcFromProps,
  width: widthFromProps,
  ...rest
}: ImageProps) {
  const src = useMemo(
    () =>
      `https://res.cloudinary.com/dkzns8hvq/image/upload/c_fill${!!widthFromProps ? `,w_${widthFromProps}` : ""}${!!heightFromProps ? `,h_${heightFromProps}` : ""},g_auto,dpr_1.0,f_auto,q_auto${!!modifiersFromProps?.length ? `,${modifiersFromProps.join(",")}` : ""}/v1776223155${srcFromProps}`,
    [heightFromProps, modifiersFromProps, srcFromProps, widthFromProps],
  );

  return { ...rest, src };
}
