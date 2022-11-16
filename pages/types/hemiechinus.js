import Head from "next/head";
import { useEffect } from "react";

import styles from "../../styles/types/Types.module.css";
import { motion } from "framer-motion";
import PageFade from "../../animations/PageFade";

import OnAllPages from "../../helpers/OnAllPages";
import Footer from "../../components/footer/Footer";
import Top from "../../components/types/hemiechinus_cnt/Top";
import Species from "../../components/types/hemiechinus_cnt/Species";

export default function Hemiechinus() {
  useEffect(() => {
    const NAV = document.querySelector("nav");

    NAV.style.position = "relative";
    NAV.style.backgroundColor = "#1d1c1c";
  }, []);

  return (
    <div>
      <Head>
        <title>SharpQuills | Types Page (Hemiechinus)</title>
        <meta
          name="description"
          content="One of the 5 different hedgehog genuses is Hemiechinus. Which has a total of 2 different hedgehog species. Those include: Indian Long-eared, Long-eared."
        />
        <meta
          name="keywords"
          content="SharpQuill, SharpQuills, hedgehogs, hedgehog, hedgehog genus, hedgehog genuses, hemiechinus, one of the five genuses, one of the 5 genuses, long-eared, long eared, indian long-eared, indian long eared"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="SharpQuill | Types Page (Hemiechinus)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/types/hemiechinus/" />

        <link rel="canonical" href="/types/hemiechinus/" />

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
        id={styles.hemiechinusBody}
        className="override_hemiechinusBody"
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <OnAllPages />

        <Top />
        <Species />

        <Footer />
      </motion.div>
    </div>
  );
}
