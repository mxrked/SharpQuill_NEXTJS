import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeLeft } from "../../../../animations/FadeLeft";

import styles from "../../../../styles/types/Types.module.css";

const Atelerix = () => {
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
            id={styles.t1L}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/atelerix-type.jpg"
              width="100%"
              height="100%"
              className={styles.types_box_type_cnt_side_bg}
            />
          </div>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
            id={styles.t1R}
          >
            <div className={styles.types_box_type_cnt_side_text}>
              <h2>Atelerix</h2>

              <p>
                Atelerix is a genus of hedgehog in the family Erinaceidae. It
                contains four species, all native to Africa.
              </p>

              <Link href="/next-projects/sharpquills/types/atelerix/">
                <a className="page-transition">View Atelerix</a>
              </Link>

              <h4>Species:</h4>
              <ul>
                <li>Four Toed</li>
                <li>North African</li>
                <li>Southern African</li>
                <li>Somali</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Atelerix;
