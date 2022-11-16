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
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/four-toed.jpg"
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
                    The four-toed hedgehog (Atelerix albiventris), is a species
                    of hedgehog found throughout much of central and eastern
                    Africa.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Four Toed</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/north-african.jpg"
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
                    The North African hedgehog (Atelerix algirus) or Algerian
                    hedgehog, is a mammal species in the family Erinaceidae
                    native to Algeria, Libya, Malta, Morocco, Spain, and
                    Tunisia.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>North African</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/southern-african.jpg"
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
                    The Southern African hedgehog (Atelerix frontalis) is a
                    species of mammal in the family Erinaceidae. It is found in
                    Angola, Botswana, Lesotho, Namibia, South Africa, Tanzania
                    and Zimbabwe.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Southern African</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/somali.jpg"
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
                    The Somali hedgehog (Atelerix sclateri) is a species of
                    mammal in the family Erinaceidae. It is endemic to Somalia
                    and Somaliland. The Somali hedgehog is nocturnal.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Somali</h2>
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
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/four-toed.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/north-african.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/southern-african.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/atelerix/somali.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
    </div>
  );
};

export default Species;
