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
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/daurian.jpg"
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
                    The Daurian hedgehog (Mesechinus dauuricus) is a solitary
                    small hedgehog. It is listed in the Red book of Russian
                    Federation as a protected species with an unclear status,
                    generally considered to be endangered, although the IUCN
                    lists it as &apos;least concern&apos;.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Daurian</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/gaoligong-forest.jpg"
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
                    The Gaoligong forest hedgehog (Mesechinus wangi) or
                    Wang&apos;s forest hedgehog is a species of hedgehog in the
                    family Erinaceidae found only in China. It is endemic to the
                    slopes of Mt.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Gaoligong-forest</h2>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div
            className={`${styles.type_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/hughs.jpg"
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
                    Hugh&apos;s hedgehog (Mesechinus hughi), also sometimes
                    referred to as the central Chinese hedgehog, is native to
                    central China and Manchuria. It prefers open areas of dry
                    steppe, but can be found in shrubland and forests.
                  </p>
                </div>

                <div className={styles.modal_toggler_name}>
                  <h2>Hugh&apos;s</h2>
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
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/daurian.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/gaoligong-forest.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/mesechinus/hughs.jpg"
        width="100%"
        height="100%"
        className={`${styles.modal} type_modal`}
      ></BackgroundImage>
    </div>
  );
};

export default Species;
