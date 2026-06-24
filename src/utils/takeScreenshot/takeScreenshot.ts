import html2canvas from "html2canvas";

import { type Input, type Output } from "./takeScreenshot.types";

export default async function takeScreenshot(input: Input): Promise<Output> {
  await Promise.all(
    Array.from(input.element.querySelectorAll("img")).map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) return resolve();
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );

  const canvas = await html2canvas(input.element, {
    allowTaint: false,
    height: input.element.scrollHeight,
    useCORS: true,
    width: input.element.scrollWidth,
  });

  return await new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) =>
        !!b ? resolve(b) : reject(new Error("Failed to generate the image")),
      "image/webp",
      0.9,
    ),
  );
}
