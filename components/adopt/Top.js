import styles from "../../styles/adopt/Adopt.module.css";

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
    <div className={styles.adopt_top}>
      <motion.div
        className={styles.adopt_top_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <h2>Adopt your own hedgehog.</h2>

        <p>Learn how to adopt and care for your very own hedgie.</p>

        <div>
          <Link href="/about/">
            <a className="page-transition">Our Background</a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Top;
