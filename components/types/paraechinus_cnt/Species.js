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
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/bare-bellied.jpg"
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
                    The bare-bellied hedgehog (Paraechinus nudiventris), also
                    known as the Madras hedgehog, is a species of hedgehog that
                    is endemic to dry arid regions and scrubby jungles in
                    southeastern India.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Bare Bellied</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/brandts.jpg"
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
                    Brandt&apos;s hedgehog (Paraechinus hypomelas) is a species
                    of desert hedgehog native to parts of the Middle East and
                    Central Asia. Its common name derives from Johann Friedrich
                    von Brandt, a director of the Zoological Department at the
                    St Petersburg Academy of Sciences.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Brandt&apos;s</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/desert.png"
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
                    The desert hedgehog (Paraechinus aethiopicus) is one of the
                    smallest of hedgehogs. It is 5.5 to 11 inches (140 to 280
                    mm) long and weighs about 10 to 18 ounces (280 to 510 g).
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Desert</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/indian.jpg"
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
                    The Indian hedgehog (Paraechinus micropus) is a species of
                    hedgehog native to India and Pakistan. It mainly lives in
                    sandy desert areas but can be found in other environments.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Indian</h2>
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
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/bare-bellied.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/brandts.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/desert.png"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/indian.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
    </div>
  );
};

export default Species;
