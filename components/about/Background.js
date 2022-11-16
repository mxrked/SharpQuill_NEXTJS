import styles from "../../styles/about/About.module.css";

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";

const Background = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.background}>
      <motion.div
        className={`${styles.background_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={`${styles.background_main_row} row`}>
          <div
            className={`${styles.background_main_side} ${styles.background_BG_side} col-lg-4 col-md-4 col-sm-3 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/info-background-1.jpg"
              width="100%"
              height="100%"
              className={styles.background_BG}
            />
          </div>
          <div
            className={`${styles.background_main_side} ${styles.background_TXT_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
          >
            <div className={styles.background_TXT_side_cnt}>
              <h2>Our Background.</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
