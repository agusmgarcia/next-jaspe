import { type LogoVariant, type StoneVariant } from "./constants.types";

export const STONES: Record<
  StoneVariant,
  {
    background: string;
    foreground: string;
    label: string;
    logo: LogoVariant;
    path: string;
  }
> = {
  obsidian: {
    background: "#2e3134",
    foreground: "white",
    label: "Obsidiana",
    logo: "white",
    path: "/yw278nd3zfn6s9r2euay.jpg",
  },
  roseQuartz: {
    background: "#f7cac9",
    foreground: "black",
    label: "Cuarzo rosa",
    logo: "black",
    path: "/dww6bbegqb2ot7dfsasw.jpg",
  },
};

export const LOGO_PATHS: Record<LogoVariant, string> = {
  black: "/sq7hs5n6ovlcdnqtt8h3.png",
  white: "/gvcobwa0rv96w2ctnz5w.png",
};
