import { useEffect } from "react";
import styles from "../../styles/overlay/Overlay.module.css";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  useEffect(() => {
    function triggerBackToTop() {
      const BACK_TO_TOP = document.getElementById("backToTop");

      if (window.scrollY <= 30) {
        BACK_TO_TOP.style.bottom = "-120px";
      } else {
        BACK_TO_TOP.style.bottom = "15px";
      }
    }

    document.getElementById("backToTop").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("load", () => {
      triggerBackToTop();
    });
    window.addEventListener("scroll", () => {
      triggerBackToTop();
    });
  }, []);

  return (
    <button id="backToTop" className={`${styles.back_to_top} page-transition`}>
      <FaChevronUp />
    </button>
  );
};

export default BackToTop;
