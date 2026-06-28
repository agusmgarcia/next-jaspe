import {
  type LogoVariant,
  type ModifiersVariant,
  type StoneVariant,
} from "./constants.types";

export const STONES: Record<
  StoneVariant,
  {
    background: string;
    foreground: string;
    label: string;
    logo: LogoVariant;
    modifiers: ModifiersVariant[];
    path: string;
  }
> = {
  amazonite: {
    background: "#76babd",
    foreground: "black",
    label: "Amazonita",
    logo: "white",
    modifiers: ["e_improve"],
    path: "/vgvit2s6hryuwiibdmkw.jpg",
  },
  amethyst: {
    background: "#9966cc",
    foreground: "white",
    label: "Amatista",
    logo: "white",
    modifiers: [],
    path: "/xymcdw5lwv3ye3qhrd7a.jpg",
  },
  aquamarine: {
    background: "#7fffd4",
    foreground: "black",
    label: "Aguamarina",
    logo: "white",
    modifiers: [],
    path: "/q2ahrhcmfymfjlignbmz.jpg",
  },
  blueQuartz: {
    background: "#274374",
    foreground: "white",
    label: "Cuarzo azul",
    logo: "white",
    modifiers: [],
    path: "/canetuqve4e6rutxc8cp.webp",
  },
  carnelian: {
    background: "#b31b1b",
    foreground: "white",
    label: "Agata cornalina",
    logo: "white",
    modifiers: [],
    path: "/sugvmoqiif83kkdhpwgy.jpg",
  },
  citrine: {
    background: "#e4d00a",
    foreground: "black",
    label: "Citrino",
    logo: "white",
    modifiers: [],
    path: "/si6tgggsch6vsbkzmvw2.jpg",
  },
  crystalQuartz: {
    background: "#f5f5f5",
    foreground: "black",
    label: "Cuarzo cristal",
    logo: "black",
    modifiers: [],
    path: "/wowulhc1tgldrcbcvwyh.jpg",
  },
  fluorite: {
    background: "#699158",
    foreground: "white",
    label: "Fluorita",
    logo: "white",
    modifiers: [],
    path: "/wwt5cjf3830b6fhzt1qg.jpg",
  },
  howlite: {
    background: "#f9fbfb",
    foreground: "black",
    label: "Howlita",
    logo: "black",
    modifiers: [],
    path: "/rk0uykp6mqmi45weh5hr.jpg",
  },
  lapislazuli: {
    background: "#26619c",
    foreground: "white",
    label: "Lapislázuli",
    logo: "white",
    modifiers: [],
    path: "/nosxpkaohdyvv476ssjx.jpg",
  },
  obsidian: {
    background: "#2e3134",
    foreground: "white",
    label: "Obsidiana",
    logo: "white",
    modifiers: [],
    path: "/yw278nd3zfn6s9r2euay.jpg",
  },
  pyrite: {
    background: "#ac9362",
    foreground: "white",
    label: "Pirita",
    logo: "white",
    modifiers: [],
    path: "/lvmqcbfyvzrnw91plcrn.jpg",
  },
  roseQuartz: {
    background: "#f7cac9",
    foreground: "black",
    label: "Cuarzo rosa",
    logo: "black",
    modifiers: [],
    path: "/dww6bbegqb2ot7dfsasw.jpg",
  },
  sodalite: {
    background: "#253668",
    foreground: "white",
    label: "Sodalita",
    logo: "white",
    modifiers: [],
    path: "/tyzl9qforcsej5gta2c1.jpg",
  },
  tigerEye: {
    background: "#b56917",
    foreground: "white",
    label: "Ojo de tigre",
    logo: "white",
    modifiers: [],
    path: "/wchxprml6miv4y77pkok.jpg",
  },
  tourmaline: {
    background: "#2c2526",
    foreground: "white",
    label: "Turmalina",
    logo: "white",
    modifiers: [],
    path: "/it8iu2m6fggwiqi1gtx4.jpg",
  },
};

export const LOGO_PATHS: Record<LogoVariant, string> = {
  black: "/sq7hs5n6ovlcdnqtt8h3.png",
  white: "/gvcobwa0rv96w2ctnz5w.png",
};
