import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../../../animations/FadeRight";

import styles from "../../../../styles/types/Types.module.css";

const Erinaceus = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.types_box_type}>
      <motion.div
        className={`${styles.types_box_type_cnt} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.types_box_type_cnt_row} row`}>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-4 col-md-4 col-sm-3 col-xs-12`}
            id={styles.t2L}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/erinaceus-type.jpg"
              width="100%"
              height="100%"
              className={styles.types_box_type_cnt_side_bg}
            />
          </div>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
            id={styles.t2R}
          >
            <div className={styles.types_box_type_cnt_side_text}>
              <h2>Erinaceus</h2>

              <p>
                The range is all across Europe, throughout the Middle East,
                parts of Russia, and extending to northern China and Korea.
              </p>

              <Link href="/next-projects/sharpquills/types/erinaceus/">
                <a className="page-transition">View Erinaceus</a>
              </Link>

              <h4>Species:</h4>
              <ul>
                <li>Amur</li>
                <li>European</li>
                <li>Northern WB</li>
                <li>Southern WB</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Erinaceus;
