import type { AppProps } from "next/app";
import { globalCss } from "@/stitches";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "text-rendering": "optimizeLegibility",
  },
  html: {
    background: "$mint1",
    color: "$mint12",
    fontFamily: "$sans",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}
export default MyApp;
