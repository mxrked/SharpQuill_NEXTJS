import styles from "../../styles/about/About.module.css";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Future = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.future}>
      <motion.div
        className={`${styles.future_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={`${styles.future_main_row} row`}>
          <div
            className={`${styles.future_main_side} col-lg-8 col-md-8 col-sm-9 col-xs-12 order-lg-0 order-md-0 order-sm-0 order-xs-1`}
            id={styles.futureL}
          >
            <div className={styles.future_main_side_txt}>
              <h2>Our Future.</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div
            className={`${styles.future_main_side} col-lg-4 col-md-4 col-sm-3 col-xs-12 order-lg-1 order-md-1 order-sm-1 order-xs-0`}
            id={styles.futureR}
          >
            <img
              data-src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/future-bg.png"
              className="lazyload blur-up"
              alt="Image of 2 hedgehogs."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Future;
