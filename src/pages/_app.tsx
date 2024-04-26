import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>

    </div>
  );
}
