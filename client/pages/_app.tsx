import "../styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid h-full font-serif text-white bg-gray-900 place-items-center">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
