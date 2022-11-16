import Head from "next/head";
import { useEffect } from "react";

import styles from "../styles/adopt/Adopt.module.css";
import { motion } from "framer-motion";
import PageFade from "../animations/PageFade";

import OnAllPages from "../helpers/OnAllPages";
import Footer from "../components/footer/Footer";
import Top from "../components/adopt/Top";
import Form from "../components/adopt/Form";

export default function Adopt() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>SharpQuills | Adopt Page</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="SharpQuill | Adopt Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/adopt/" />

        <link rel="canonical" href="/adopt/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/icons/favicon-16x16.png"
        />
      </Head>

      <motion.div
        id={styles.adoptBody}
        className="override_adoptBody"
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <OnAllPages />

        <Top />
        <Form />

        <Footer />
      </motion.div>
    </div>
  );
}
