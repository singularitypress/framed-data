import { Nav } from "@components/organism";
import type { AppProps } from "next/app";

import "../styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
