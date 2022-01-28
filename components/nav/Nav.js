import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/nav/Nav.module.css";
import Logo from "./nav_cnt/Logo";
import MenuToggler from "./nav_cnt/MenuToggler";
import SearchToggler from "./nav_cnt/SearchToggler";

const Nav = () => {
  const router = useRouter();

  //! Nav Scroll
  useEffect(() => {
    const NAV = document.querySelector("nav");

    function triggerNavScroll() {
      if (
        !router.pathname.indexOf("types") > -1 ||
        !router.pathname.indexOf("support") > -1 ||
        !router.pathname.indexOf("about") > -1 ||
        !router.pathname.indexOf("adopt") > -1 ||
        !router.pathname.indexOf("policies") > -1
      ) {
        if (window.scrollY > 30) {
          NAV.style.top = "-500px";
        } else {
          NAV.style.top = "0";
        }
      }
    }

    // This will make it so that the nav is fixed on the home page.
    if (router.pathname === "/") {
      window.addEventListener("load", triggerNavScroll);
      window.addEventListener("scroll", triggerNavScroll);
    }
  }, [router]);

  return (
    <nav id={styles.navigation}>
      <div className={`${styles.nav_main_box} container-fluid`}>
        <div className={`${styles.nav_main_row} row`}>
          <div
            className={`${styles.nav_main_side} col-lg-6 col-md-6 col-sm-6 d-lg-grid d-md-grid d-sm-grid d-xs-none`}
            id={styles.navL}
          >
            <Logo />
          </div>
          <div
            className={`${styles.nav_main_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            id={styles.navR}
          >
            <div className={styles.nav_main_side_cnt}>
              <SearchToggler />
              <MenuToggler />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
