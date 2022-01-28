import styles from "../../../styles/nav/Nav.module.css";

import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

const SearchToggler = () => {
  useEffect(() => {
    const SEARCH_TOGGLER = document.getElementById("searchToggler");
    const SEARCH_CLICK_BLOCKER = document.getElementById("searchClickBlocker");
    const SEARCH_OVERLAY = document.getElementById("searchOverlay");
    const SEARCH_OVERLAY_CNT = document.getElementById("searchOverlayCnt");

    SEARCH_TOGGLER.addEventListener("click", () => {
      sessionStorage.removeItem("Menu Toggled.");
      sessionStorage.setItem("Search Toggled.", true);

      document.body.style.overflowY = "hidden";

      SEARCH_CLICK_BLOCKER.style.display = "block";
      SEARCH_OVERLAY.style.display = "grid";
      SEARCH_OVERLAY_CNT.style.display = "block";

      setTimeout(() => {
        SEARCH_OVERLAY.classList.remove("deactive");
      }, 600);

      setTimeout(() => {
        SEARCH_OVERLAY_CNT.classList.remove("deactive");
      }, 1000);

      setTimeout(() => {
        SEARCH_OVERLAY_CNT.style.pointerEvents = "auto";
      }, 1600);
    });
  }, []);

  return (
    <button
      id="searchToggler"
      className={`${styles.searchTogglerBtn} page-transition`}
    >
      <FaSearch />
    </button>
  );
};

export default SearchToggler;
