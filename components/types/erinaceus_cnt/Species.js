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
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/amur.jpg"
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
                    The Amur hedgehog (Erinaceus amurensis), also called the
                    Manchurian hedgehog, is a hedgehog similar to the European
                    hedgehog in appearance and behaviour.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Amur</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/european.jpg"
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
                    The European hedgehog (Erinaceus europaeus), also known as
                    the West European hedgehog or common hedgehog, is a hedgehog
                    species native to Europe from Iberia and Italy.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>European</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/northern-white-breasted.jpg"
              width="100%"
              height="100%"
              className={styles.modal_toggler_bg}
            >
              <div
                className={`${styles.modal_toggler} type_modal_toggler`}
                onClick={() => {
                  openType(document.querySelectorAll(".type_modal")[2]);
                }}
              >
                <div className={styles.modal_toggler_desc}>
                  <p>
                    The northern white-breasted hedgehog (Erinaceus roumanicus)
                    extends in the west as far as Poland, Austria and the former
                    Yugoslavia, and south to Greece and the Adriatic Islands.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Northern WB</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/southern-white-breasted.jpg"
              width="100%"
              height="100%"
              className={styles.modal_toggler_bg}
            >
              <div
                className={`${styles.modal_toggler} type_modal_toggler`}
                onClick={() => {
                  openType(document.querySelectorAll(".type_modal")[3]);
                }}
              >
                <div className={styles.modal_toggler_desc}>
                  <p>
                    The southern white-breasted hedgehog (Erinaceus concolor),
                    sometimes referred to as white-bellied hedgehog or
                    white-chested hedgehog.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Southern WB</h2>
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
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/amur.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/european.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/northern-white-breasted.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/erinaceus/southern-white-breasted.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
    </div>
  );
};

export default Species;
