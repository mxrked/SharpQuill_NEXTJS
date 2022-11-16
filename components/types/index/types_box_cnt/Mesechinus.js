import { useEffect } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../../../animations/FadeRight";

import styles from "../../../../styles/types/Types.module.css";

const Mesechinus = () => {
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
            id={styles.t4L}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/mesechinus-type.jpg"
              width="100%"
              height="100%"
              className={styles.types_box_type_cnt_side_bg}
            />
          </div>
          <div
            className={`${styles.types_box_type_cnt_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
            id={styles.t4R}
          >
            <div className={styles.types_box_type_cnt_side_text}>
              <h2>Mesechinus</h2>

              <p>
                Mesechinus is a genus of hedgehogs. It contains four species
                from East Asia.
              </p>

              <Link href="/next-projects/sharpquills/types/mesechinus/">
                <a className="page-transition">View Mesechinus</a>
              </Link>

              <h4>Species:</h4>
              <ul>
                <li>Daurian</li>
                <li>Gaoligong Forest</li>
                <li>Hughs</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mesechinus;
