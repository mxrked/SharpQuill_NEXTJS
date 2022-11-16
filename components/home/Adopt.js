import styles from "../../styles/home/Home.module.css";

import { useEffect } from "react";
import Link from "next/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Adopt = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //! Adding Cookie to SS
  useEffect(() => {
    document
      .getElementById("routeCookieToggler")
      .addEventListener("click", () => {
        sessionStorage.setItem("Route Cookie", true);
      });

    document
      .getElementById("otherCookieToggler")
      .addEventListener("click", () => {
        sessionStorage.setItem("Other Cookie", true);
      });
  }, []);

  return (
    <div className={styles.adopt}>
      <motion.div
        className={`${styles.adopt_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={`${styles.adopt_main_row} row`}>
          <div
            className={`${styles.adopt_main_side} col-lg-8 col-md-8 col-sm-12 col-xs-12 order-lg-0 order-md-0 order-sm-1 order-1`}
            id={styles.adoptL}
          >
            <div className={styles.adopt_main_side_cnt}>
              <div className={styles.adopt_main_side_cnt_text}>
                <h2>Adopt a hedgie.</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <Link href="/adopt/">
                  <a className="page-transition">Learn More</a>
                </Link>

                <button
                  className={styles.route_cookie_toggler}
                  id="routeCookieToggler"
                >
                  Add Route Cookie
                </button>

                <button
                  className={styles.route_cookie_toggler}
                  id="otherCookieToggler"
                >
                  Add Other Cookie
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${styles.adopt_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12 order-lg-1 order-md-1 order-sm-0 order-0`}
            id={styles.adoptR}
          >
            <div className={styles.adopt_main_side_cnt}>
              <img
                data-src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/info-adopt-hedgie.png"
                className="lazyload blur-up"
                alt="Image of a hedgehog."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Adopt;
