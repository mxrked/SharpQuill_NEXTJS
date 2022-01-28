import styles from "../../styles/support/Support.module.css";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../animations/FadeLeft";
import Link from "next/link";

const Top = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.support_top}>
      <motion.div
        className={styles.support_top_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <h2>Need some support?</h2>

        <p>
          Reach out to SharpQuills for help regarding many different things.
        </p>

        <div>
          <Link href="/next-projects/sharpquills/adopt/">
            <a className="page-transition">Adopt a Hedgie</a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
