import styles from "../../../styles/types/Types.module.css";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { FadeLeft } from "../../../animations/FadeLeft";

const Species = () => {
  function openType(modal) {
    document.body.style.overflowY = "hidden";

    document.getElementById("modalDarken").style.pointerEvents = "auto";
    document.getElementById("modalDarken").style.display = "block";

    modal.style.display = "block";
  }

  function closeModals() {
    document.getElementById("modalDarken").style.pointerEvents = "none";
    document.getElementById("modalDarken").style.display = "none";

    document.querySelectorAll(".type_modal").forEach((modal) => {
      modal.style.display = "none";
    });

    document.body.style.overflowY = "auto";
  }

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.type_species}>
      <motion.div
        className={`${styles.type_togglers_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={`${styles.type_togglers_row} row`}>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/indian-long-eared.jpg"
              width="100%"
              height="100%"
              className={styles.modal_toggler_bg}
            >
              <div
                className={`${styles.modal_toggler} type_modal_toggler`}
                onClick={() => {
                  openType(document.querySelectorAll(".type_modal")[0]);
                }}
              >
                <div className={styles.modal_toggler_desc}>
                  <p>
                    The Indian long-eared hedgehog (Hemiechinus collaris) is a
                    small species of mammal native to northern India and
                    Pakistan. It is insectivorous and nocturnal. Similar to most
                    hedgehogs it has spines on its back, embedded into a muscle
                    sheath.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Indian Long-eared</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/long-eared.jpg"
              width="100%"
              height="100%"
              className={styles.modal_toggler_bg}
            >
              <div
                className={`${styles.modal_toggler} type_modal_toggler`}
                onClick={() => {
                  openType(document.querySelectorAll(".type_modal")[1]);
                }}
              >
                <div className={styles.modal_toggler_desc}>
                  <p>
                    The long-eared hedgehog (Hemiechinus auritus) is a species
                    of hedgehog native to Central Asian countries and some
                    countries of the Middle East. The long-eared hedgehog lives
                    in burrows that it either makes or finds and is
                    distinguished by its long ears.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Long-eared</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </motion.div>

      <div
        id="modalDarken"
        className={styles.modal_darken}
        onClick={closeModals}
      />

      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/indian-long-eared.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/hemiechinus/long-eared.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
    </div>
  );
};

export default Species;
