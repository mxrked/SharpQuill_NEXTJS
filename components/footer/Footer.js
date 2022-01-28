import styles from "../../styles/footer/Footer.module.css";
import Contact from "./footer_cnt/Contact";
import Links from "./footer_cnt/Links";
import Logo from "./footer_cnt/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_main_box} container-fluid`}>
        <div className={`${styles.footer_main_row} row`} id={styles.footerR1}>
          <div
            className={`${styles.footer_main_side} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            id={styles.footerTL}
          >
            <div className={styles.footer_main_side_cnt}>
              <Logo />
              <Contact />
            </div>
          </div>
          <div
            className={`${styles.footer_main_side} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            id={styles.footerTR}
          >
            <div className={styles.footer_main_side_cnt}>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
