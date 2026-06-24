import { type Input, type Output } from "./downloadFile.types";

export default function downloadFile(input: Input): Output {
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
