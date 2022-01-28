import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "../../../styles/footer/Footer.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.footer_contact_icons}>
        <FaFacebook className={`${styles.footer_fa_icon} page-transition`} />

        <FaTwitter className={`${styles.footer_fa_icon} page-transition`} />

        <FaGithub className={`${styles.footer_fa_icon} page-transition`} />

        <FaLinkedin className={`${styles.footer_fa_icon} page-transition`} />
      </div>

      <div className={styles.footer_contact_links}>
        <span>contact@basicallyeasy.com</span>

        <span>+1 (202) 555-0287</span>
      </div>
    </div>
  );
};

export default Contact;
