import "../styles/global/resets/resets.css";
import "../styles/global/overrides/overrides.css";

import "bootstrap/dist/css/bootstrap.css";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-wrap">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
