import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getDeck } from "../utils/getDeck";

export default function App({ Component, pageProps }: AppProps) {
  console.log(getDeck())
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 grid">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
