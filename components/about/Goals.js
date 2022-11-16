import styles from "../../styles/about/About.module.css";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../animations/FadeRight";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Goals = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.goals}>
      <motion.div
        className={`${styles.goals_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.goals_main_row} row`}>
          <div
            className={`${styles.goals_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
          >
            <div className={styles.goals_main_side_cnt}>
              <img
                data-src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/goal-1.png"
                className="lazyload blur-up"
                alt="Health Rate Icon"
              />

              <div>
                <h3>Health Care.</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.goals_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
          >
            <div className={styles.goals_main_side_cnt}>
              <img
                data-src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/goal-2.png"
                className="lazyload blur-up"
                alt="Open Book Icon"
              />

              <div>
                <h3>Hedgehog Research.</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.goals_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
          >
            <div className={styles.goals_main_side_cnt}>
              <img
                data-src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/goal-3.png"
                className="lazyload blur-up"
                alt="Hedgehog Icon"
              />

              <div>
                <h3>Safe Species.</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Goals;
