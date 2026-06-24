import { Image } from "#src/components";

import useViewer from "./Viewer.hooks";
import type ViewerProps from "./Viewer.types";

export default function Viewer(props: ViewerProps) {
  const { background, description, logo, style, title } = useViewer(props);

  return (
    <div className="relative" style={style}>
      <div className="absolute inset-0">
        <Image alt="" {...background} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex w-5/6 flex-col items-center gap-4 rounded-2xl px-4 pt-0 pb-12"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        >
          <h2 className="font-cinzel text-6xl font-medium tracking-wider uppercase">
            {title}
          </h2>
          <p className="text-center font-pompiere text-5xl/tight font-light tracking-wider whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-62.5 flex flex-col items-center gap-2">
        <Image alt="" {...logo} />
      </div>
    </div>
  );
}
