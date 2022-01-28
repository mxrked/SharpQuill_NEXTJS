import { useEffect } from "react";
import styles from "../../../styles/nav/Nav.module.css";

const MenuToggler = () => {
  useEffect(() => {
    const MENU_TOGGLER = document.getElementById("menuToggler");
    const MENU_CLICK_BLOCKER = document.getElementById("menuClickBlocker");
    const MENU_DARKEN = document.getElementById("menuDarken");
    const MENU_MAIN = document.getElementById("menuMain");
    const MENU_MAIN_CNT = document.getElementById("menuMainCnt");

    MENU_TOGGLER.addEventListener("click", () => {
      sessionStorage.removeItem("Search Toggled.");
      sessionStorage.setItem("Menu Toggled.", true);

      document.body.style.overflowY = "hidden";

      //   alert("Menu Toggled.");

      MENU_CLICK_BLOCKER.style.display = "block";
      MENU_DARKEN.style.display = "block";
      MENU_MAIN.style.display = "block";

      setTimeout(() => {
        MENU_DARKEN.classList.remove("deactive");
      }, 600);

      setTimeout(() => {
        MENU_MAIN.style.width = "100%";
      }, 900);

      setTimeout(() => {
        MENU_MAIN_CNT.classList.remove("deactive");
      }, 1700);

      setTimeout(() => {
        MENU_DARKEN.style.pointerEvents = "auto";
        MENU_MAIN_CNT.style.pointerEvents = "auto";
      }, 2100);
    });
  }, []);

  return (
    <button id="menuToggler" className={styles.menuTogglerBtn}>
      <span className={`${styles.menu_toggler_btn_span} page-transition`} />
      <span className={`${styles.menu_toggler_btn_span} page-transition`} />
      <span className={`${styles.menu_toggler_btn_span} page-transition`} />
    </button>
  );
};

export default MenuToggler;
