/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import useImage from "./Image.hooks";
import type ImageProps from "./Image.types";

export default function Image(props: ImageProps) {
  const { ...rest } = useImage(props);

  return <img crossOrigin="anonymous" {...rest} />;
}
