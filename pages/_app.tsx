import type { AppProps } from "next/app";
import { globalCss } from "@/stitches";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    textRendering: "optimizeLegibility",
  },
  html: {
    background: "$mint1",
    color: "$mint12",
    fontFamily: "$mono",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
