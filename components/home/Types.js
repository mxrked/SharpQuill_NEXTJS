import styles from "../../styles/home/Home.module.css";

import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";
import { FadeRight } from "../../animations/FadeRight";

const Types = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //! Types Hovers
  useEffect(() => {
    const ALL_TYPE_BGS = document.querySelectorAll(".types_bg");
    const ALL_TYPE_LINKS = document.querySelectorAll(".types_link");

    function triggerTypeHover(bg, link) {
      link.addEventListener("mouseenter", () => {
        bg.style.transform = "scale(1.1)";
      });

      link.addEventListener("mouseleave", () => {
        bg.style.transform = "scale(1)";
      });
    }

    triggerTypeHover(ALL_TYPE_BGS[0], ALL_TYPE_LINKS[0]);
    triggerTypeHover(ALL_TYPE_BGS[1], ALL_TYPE_LINKS[1]);
    triggerTypeHover(ALL_TYPE_BGS[2], ALL_TYPE_LINKS[2]);
    triggerTypeHover(ALL_TYPE_BGS[3], ALL_TYPE_LINKS[3]);
    triggerTypeHover(ALL_TYPE_BGS[4], ALL_TYPE_LINKS[4]);
  }, []);

  return (
    <div className={styles.types}>
      <motion.div
        className={styles.types_top}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={styles.types_top_cnt}>
          <h2>
            Explore the different <br /> types of hedgie.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Link href="/next-projects/sharpquills/types/">
            <a className="page-transition">View All</a>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.types_main_box} container-fluid page-transition`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.types_main_row} row`}>
          <div
            className={`${styles.types_main_side} col-lg-4 col-md-4 col-sm-4 col-xs-12 page-transition`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/atelerix-type.jpg"
              width="100%"
              height="100%"
              className={`${styles.background_img} types_bg`}
            ></BackgroundImage>
            <Link href="/types/atelerix/">
              <a
                className={`${styles.types_main_side_cnt} types_link page-transition`}
              >
                <div>
                  <h2>Atelerix</h2>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.types_main_side} col-lg-4 col-md-4 col-sm-4 col-xs-12 page-transition`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/erinaceus-type.jpg"
              width="100%"
              height="100%"
              className={`${styles.background_img} types_bg`}
            ></BackgroundImage>
            <Link href="/types/erinaceus/">
              <a
                className={`${styles.types_main_side_cnt} types_link page-transition`}
              >
                <div>
                  <h2>Erinaceus</h2>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.types_main_side} col-lg-4 col-md-4 col-sm-4 col-xs-12 page-transition`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/hemiechinus-type.jpg"
              width="100%"
              height="100%"
              className={`${styles.background_img} types_bg`}
            ></BackgroundImage>
            <Link href="/types/hemiechinus/">
              <a
                className={`${styles.types_main_side_cnt} types_link page-transition`}
              >
                <div>
                  <h2>Hemiechinus</h2>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={`${styles.types_main_row} row`}>
          <div
            className={`${styles.types_main_side} col-lg-6 col-md-6 col-sm-6 col-xs-12 page-transition`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/mesechinus-type.jpg"
              width="100%"
              height="100%"
              className={`${styles.background_img} types_bg`}
            ></BackgroundImage>
            <Link href="/types/mesechinus/">
              <a
                className={`${styles.types_main_side_cnt} types_link page-transition`}
              >
                <div>
                  <h2>Mesechinus</h2>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.types_main_side} col-lg-6 col-md-6 col-sm-6 col-xs-12 page-transition`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/paraechinus-type.jpg"
              width="100%"
              height="100%"
              className={`${styles.background_img} types_bg`}
            ></BackgroundImage>
            <Link href="/types/paraechinus/">
              <a
                className={`${styles.types_main_side_cnt} types_link page-transition`}
              >
                <div>
                  <h2>Paraechinus</h2>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Types;
