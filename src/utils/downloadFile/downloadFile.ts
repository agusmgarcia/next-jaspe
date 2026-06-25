import { type Input, type Output } from "./downloadFile.types";

export default async function downloadFile(input: Input): Promise<Output> {
  const file = new File([input.blob], input.name, { type: input.blob.type });

  if (!!navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file], title: "Save Image" });
  } else {
    const url = URL.createObjectURL(input.blob);
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = input.name;
      link.click();
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}
