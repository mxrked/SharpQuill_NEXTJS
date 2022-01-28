import styles from "../../styles/support/Support.module.css";

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeRight } from "../../animations/FadeRight";
import {
  FaAt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

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
    <div className={styles.support_form}>
      <motion.div
        className={`${styles.support_form_main_box} container-fluid`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.support_form_main_row} row`}>
          <div
            className={`${styles.support_form_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            id="supportFormL"
          >
            <div className={styles.support_form_main_side_cnt}>
              <h1>Information</h1>

              <p>
                Our support team is determined to help out with any issue that
                is presented to us.
              </p>

              <div className={styles.support_form_main_side_cnt_contact}>
                <a href="tel:#" className="page-transition">
                  <FaPhoneAlt /> +1 (202) 555-0287
                </a>
              </div>

              <div className={styles.support_form_main_side_cnt_contact}>
                <a href="mailTo:#" className="page-transition">
                  <FaAt /> contact@basicallyeasy.com
                </a>
              </div>

              <ul>
                <li>
                  <a href="#">
                    <FaTwitter className={styles.fa_icon} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebook className={styles.fa_icon} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithub className={styles.fa_icon} /> Github
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin className={styles.fa_icon} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.support_form_main_side} col-lg-8 col-md-8 col-sm-12 col-xs-12`}
            id="supportFormR"
          >
            <form>
              <h1>Contact Form</h1>

              <div className={styles.support_form_set} id={styles.formSet1}>
                <div className={styles.support_form_set_sub}>
                  <label>
                    First Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="John/Jane"
                    className="page-transition"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className={styles.support_form_set_sub}>
                  <label>
                    Last Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="page-transition"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              <div className={styles.support_form_set} id={styles.formSet2}>
                <div className={styles.support_form_set_sub}>
                  <label>
                    Email Address <span>*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="burner@burner.com"
                    className="page-transition"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className={styles.support_form_set_sub}>
                  <label>
                    Phone Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    placeholder="+1 202-555-0569"
                    className="page-transition"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              <div className={styles.support_form_set} id={styles.formSet3}>
                <div className={styles.support_form_set_sub}>
                  <label>
                    Reason of Contact <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="What is your reason for contacting us?"
                    className="page-transition"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className={styles.support_form_set_sub}>
                  <label>
                    Message <span>*</span>
                  </label>

                  <textarea
                    className="page-transition"
                    placeholder="Be descriptive on your reason."
                    required
                  />
                </div>
              </div>

              <div className={styles.form_btns}>
                <button type="submit" className="page-transition">
                  Send
                </button>

                <button type="reset" className="page-transition">
                  Reset
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
