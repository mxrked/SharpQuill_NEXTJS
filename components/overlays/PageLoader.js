import { useEffect } from "react";
import styles from "../../styles/overlay/Overlay.module.css";

const PageLoader = () => {
  //! Main code for Page Loader
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.addEventListener("load", pageLoaderPercent);

    function pageLoaderPercent() {
      const PAGE_LOADER = document.getElementById("pageLoader");
      const PAGE_LOADER_CNT = document.getElementById("pageLoaderCnt");
      const PAGE_LOADER_PERC = document.getElementById("pageLoaderPerc");

      var w = 0;
      var t = setInterval(() => {
        w = w + 1;
        PAGE_LOADER_PERC.textContent = w + "%";

        if (w === 100 && !sessionStorage.getItem("Page Loader Finished.")) {
          PAGE_LOADER_CNT.classList.toggle("deactive");

          setTimeout(() => {
            PAGE_LOADER.classList.toggle("deactive");
          }, 500);

          setTimeout(() => {
            sessionStorage.setItem("Page Loader Finished.", true);
            document.body.style.overflow = "auto";
          }, 900);

          clearInterval(t);
          w = 0;
        }
      }, 20);
    }
  }, []);

  //! Check for Page Loader SS
  useEffect(() => {
    if (sessionStorage.getItem("Page Loader Finished.")) {
      document.getElementById("pageLoader").style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }, []);

  return (
    <div className={`${styles.page_loader} full-second`} id="pageLoader">
      <div
        className={`${styles.page_loader_cnt} page-transition`}
        id="pageLoaderCnt"
      >
        <h2>Sharpquills</h2>

        <span id="pageLoaderPerc">0%</span>
      </div>
    </div>
  );
};

export default PageLoader;
