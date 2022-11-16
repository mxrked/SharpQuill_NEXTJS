import styles from "../../styles/home/Home.module.css";

import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";

const About = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.about}>
      <motion.div
        className={`${styles.about_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={`${styles.about_main_row} row`}>
          <div
            className={`${styles.about_main_side} col-lg-4 col-md-4 col-sm-3 col-xs-12 page-transition`}
            id={styles.aboutL}
          >
            <div className={styles.about_main_side_cnt}>
              <BackgroundImage
                src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/info-background-1.jpg"
                width="100%"
                height="100%"
                className={styles.about_main_side_cnt_bg}
                id={styles.aboutMainBG1}
              />
              <BackgroundImage
                src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/info-background-2.jpg"
                width="100%"
                height="100%"
                className={styles.about_main_side_cnt_bg}
                id={styles.aboutMainBG2}
              />
            </div>
          </div>
          <div
            className={`${styles.about_main_side} col-lg-8 col-md-8 col-sm-9 col-xs-12 page-transition`}
            id={styles.aboutR}
          >
            <div className={styles.about_main_side_cnt}>
              <div className={styles.about_main_side_cnt_text}>
                <h2>
                  SharpQuills <br /> Background.
                </h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Link href="/about/">
                  <a className="page-transition">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
