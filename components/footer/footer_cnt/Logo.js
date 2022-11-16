import styles from "../../../styles/footer/Footer.module.css";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <h1>Sharpquills.</h1>
      </a>
    </Link>
  );
};

export default Logo;
