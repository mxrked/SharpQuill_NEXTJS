import styles from "../../styles/home/Home.module.css";

import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../animations/FadeRight";

const Support = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //! Support Hovers
  useEffect(() => {
    const ALL_SUPPORT_BGS = document.querySelectorAll(".support_bg");
    const ALL_SUPPORT_LINKS = document.querySelectorAll(".support_link");

    function triggerSupportHover(bg, link) {
      link.addEventListener("mouseenter", () => {
        bg.style.transform = "scale(1.1)";
      });

      link.addEventListener("mouseleave", () => {
        bg.style.transform = "scale(1)";
      });
    }

    triggerSupportHover(ALL_SUPPORT_BGS[0], ALL_SUPPORT_LINKS[0]);
    triggerSupportHover(ALL_SUPPORT_BGS[1], ALL_SUPPORT_LINKS[1]);
  }, []);

  return (
    <div className={styles.support}>
      <motion.div
        className={`${styles.support_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.support_main_row} row`}>
          <div
            className={`${styles.support_main_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            id={styles.supportL}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/support/support-contact-bg.jpg"
              width="100%"
              height="100%"
              className={`${styles.support_background_img} support_bg`}
            />

            <Link href="/support/">
              <a
                className={`${styles.support_main_side_cnt} support_link page-transition`}
              >
                <div>
                  <h2>Need Help?</h2>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`${styles.support_main_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            id={styles.supportR}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/support/support-policies-bg.jpg"
              width="100%"
              height="100%"
              className={`${styles.support_background_img} support_bg`}
            />

            <Link href="/support/">
              <a
                className={`${styles.support_main_side_cnt} support_link page-transition`}
              >
                <div>
                  <h2>Reaching Out</h2>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
