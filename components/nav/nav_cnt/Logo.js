import styles from "../../../styles/nav/Nav.module.css";

import Link from "next/link";

const Logo = () => {
  return (
    <div id={styles.navLogo}>
      <Link href="/">
        <a className="page-transition">
          <h1>Sharpquills.</h1>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
