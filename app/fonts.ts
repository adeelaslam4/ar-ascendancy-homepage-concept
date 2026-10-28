import localFont from "next/font/local";

export const manrope = localFont({
  src: "../public/fonts/Manrope.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const bodoni = localFont({
  src: [
    { path: "../public/fonts/BodoniModa.ttf", style: "normal", weight: "400 900" },
    { path: "../public/fonts/BodoniModa-Italic.ttf", style: "italic", weight: "400 900" },
  ],
  variable: "--font-bodoni",
  display: "swap",
});

export const caviar = localFont({
  src: [
    { path: "../public/fonts/CaviarDreams-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/CaviarDreams-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-caviar",
  display: "swap",
});

export const greatVibes = localFont({
  src: "../public/fonts/GreatVibes.ttf",
  variable: "--font-greatvibes",
  weight: "400",
  display: "swap",
});

export const allura = localFont({
  src: "../public/fonts/Allura.ttf",
  variable: "--font-allura",
  weight: "400",
  display: "swap",
});

export const pinyon = localFont({
  src: "../public/fonts/PinyonScript.ttf",
  variable: "--font-pinyon",
  weight: "400",
  display: "swap",
});

export const fontVariables = [
  manrope.variable,
  bodoni.variable,
  caviar.variable,
  greatVibes.variable,
  allura.variable,
  pinyon.variable,
].join(" ");
