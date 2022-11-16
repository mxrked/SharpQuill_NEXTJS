import styles from "../../styles/adopt/Adopt.module.css";

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../animations/FadeRight";

const Form = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.adopt_form}>
      <motion.div
        className={`${styles.adopt_form_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.adopt_form_main_row} row`}>
          <div
            className={`${styles.adopt_form_main_side} col-lg-3 col-md-3 d-lg-grid d-md-grid d-sm-none d-none`}
            id={styles.formL}
          >
            <BackgroundImage
              src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/info/info-adopt-bg.jpg"
              width="100%"
              height="100%"
              className={styles.adopt_bg}
            />
          </div>
          <div
            className={`${styles.adopt_form_main_side} col-lg-9 col-md-9 col-sm-12 col-xs-12`}
            id={styles.formR}
          >
            <form>
              <h1>Adoption Form</h1>

              <div className={styles.form_set} id={styles.formSet1}>
                <div className={styles.form_set_sub}>
                  <label>
                    First Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="John/Jane"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className={styles.form_set_sub}>
                  <label>
                    Last Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="Doe"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className={styles.form_set} id={styles.formSet2}>
                <div className={styles.form_set_sub}>
                  <label>
                    Address <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="Enter Address"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className={styles.form_set_sub}>
                  <label>
                    Phone Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    className={`${styles.form_input} page-transition`}
                    placeholder="+1 202-555-0569"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className={styles.form_set} id={styles.formSet3}>
                <div className={styles.form_set_sub}>
                  <label>
                    City <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="Enter City"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className={styles.form_set_sub}>
                  <label>
                    State <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="Enter State"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className={styles.form_set_sub}>
                  <label>
                    ZIP <span>*</span>
                  </label>

                  <input
                    type="text"
                    className={`${styles.form_input} page-transition`}
                    placeholder="Enter ZIP"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className={styles.form_set} id={styles.formSet4}>
                <div className={styles.form_set_sub}>
                  <label>
                    Proof of Care <span>*</span>
                  </label>

                  <textarea
                    required
                    placeholder="Describe the hedgehog you would like to adopt and provide sufficient proof that you are capable of caring for a hedgehog."
                  ></textarea>
                </div>
              </div>
              <div className={styles.form_btns}>
                <button
                  type="submit"
                  className={`${styles.form_btn} page-transition`}
                >
                  Send
                </button>

                <button
                  type="reset"
                  className={`${styles.form_btn} page-transition`}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
