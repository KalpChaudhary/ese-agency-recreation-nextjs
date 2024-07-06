import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}
