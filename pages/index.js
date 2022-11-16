import Head from "next/head";

import styles from "../styles/home/Home.module.css";
import { motion } from "framer-motion";
import PageFade from "../animations/PageFade";

import OnAllPages from "../helpers/OnAllPages";

import Top from "../components/home/Top";
import Types from "../components/home/Types";
import About from "../components/home/About";
import Adopt from "../components/home/Adopt";
import Support from "../components/home/Support";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SharpQuills | Home Page</title>
        <meta
          name="description"
          content="SharpQuills is where your hedgehog curiousities start and will never end. From learning the different types of hedgehog, to adopting and raising your very own; SharpQuills is your go-to place for everything hedgehog related."
        />
        <meta
          name="keywords"
          content="hedgehogs, hedgehog, get familiar with hedgehogs, understanding the importance of hedgehogs, atelerix, erinaceus, hemiechinus, mesechinus, paraechinus, adopt, adopt a hedgehog, learn about hedgehogs, adopt a hedgehog online, learn about hedgehogs online, different hedgehog types, learn different hedgehog types online"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="SharpQuill | About Page" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content="/" />

        <link rel="canonical" href="/" />

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
        id={styles.homeBody}
        className="override_homeBody"
        variants={PageFade}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <OnAllPages />

        <Top />
        <Types />
        <About />
        <Support />
        <Adopt />

        <Footer />
      </motion.div>
    </div>
  );
}
