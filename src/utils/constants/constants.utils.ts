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
  aquamarine: {
    background: "#7fffd4",
    foreground: "black",
    label: "Aguamarina",
    logo: "white",
    path: "/q2ahrhcmfymfjlignbmz.jpg",
  },
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
  tourmaline: {
    background: "#2c2526",
    foreground: "white",
    label: "Turmalina",
    logo: "white",
    path: "/it8iu2m6fggwiqi1gtx4.jpg",
  },
};

export const LOGO_PATHS: Record<LogoVariant, string> = {
  black: "/sq7hs5n6ovlcdnqtt8h3.png",
  white: "/gvcobwa0rv96w2ctnz5w.png",
};
