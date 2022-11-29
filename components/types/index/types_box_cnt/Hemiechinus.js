import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../../../animations/FadeLeft";

import styles from "../../../../styles/types/Types.module.css";

const Hemiechinus = () => {
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
        variants={FadeLeft}
      >
        <div className={`${styles.types_box_type_cnt_row} row`}>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-4 col-md-4 col-sm-3 col-xs-12`}
            id={styles.t3L}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/hemiechinus-type.jpg"
              width="100%"
              height="100%"
              className={styles.types_box_type_cnt_side_bg}
            />
          </div>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
            id={styles.t3R}
          >
            <div className={styles.types_box_type_cnt_side_text}>
              <h2>Hemiechinus</h2>

              <p>
                Hemiechinus is a genus of hedgehogs. It contains two species,
                found in Central and South Asia.
              </p>

              <Link href="/types/hemiechinus">
                <a className="page-transition">View Hemiechinus</a>
              </Link>

              <h4>Species:</h4>
              <ul>
                <li>Indian Long-eared</li>
                <li>Long-eared</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hemiechinus;
