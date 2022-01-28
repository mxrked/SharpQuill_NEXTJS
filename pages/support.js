import Head from "next/head";
import { useEffect } from "react";

import styles from "../styles/support/Support.module.css";
import { motion } from "framer-motion";
import PageFade from "../animations/PageFade";

import OnAllPages from "../helpers/OnAllPages";
import Footer from "../components/footer/Footer";
import Top from "../components/support/Top";
import Form from "../components/support/Form";

export default function Support() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>SharpQuills | Support Page</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="SharpQuill | Support Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/sharpquills/support/"
        />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/sharpquills/support/"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="shortcut icon"
          href="http://basicallyeasy.com/NextJSCDNS/sharpquill/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="http://basicallyeasy.com/NextJSCDNS/sharpquill/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="http://basicallyeasy.com/NextJSCDNS/sharpquill/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="http://basicallyeasy.com/NextJSCDNS/sharpquill/icons/favicon-16x16.png"
        />
      </Head>

      <motion.div
        id={styles.supportBody}
        className="override_supportBody"
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
