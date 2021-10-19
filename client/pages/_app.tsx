import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
