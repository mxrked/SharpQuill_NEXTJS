import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import {
  ABOUT_KWS,
  ADOPT_KWS,
  ATELERIX_KWS,
  ERINACEUS_KWS,
  HEMIECHINUS_KWS,
  HOME_KWS,
  MESECHINUS_KWS,
  PARAECHINUS_KWS,
  POLICIES_KWS,
  SUPPORT_KWS,
  TYPES_KWS,
} from "../../../arrays/Keywords";
import CloseSearch from "../../../helpers/functions/CloseSearch";

import styles from "../../../styles/nav/Nav.module.css";

const Search = () => {
  const router = useRouter();
  const env = process.env.NODE_ENV; // This will be used to detect client vs server side for the search

  function filterSearchLinks() {
    var ipt, filter, links, links_li, link, i, txtVal;

    ipt = document.getElementById("searchIpt");
    filter = ipt.value.toUpperCase();
    links = document.getElementById("searchLinks");
    links_li = links.getElementsByTagName("li");

    for (i = 0; i < links_li.length; i++) {
      link = links_li[i].getElementsByTagName("a")[0];

      txtVal = link.textContent || link.innerText;

      if (txtVal.toUpperCase().indexOf(filter) > -1) {
        links_li[i].style.display = "";
      } else {
        links_li[i].style.display = "none";
      }
    }
  }

  function localRouting() {
    var i;
    const searchIptVal = document
      .getElementById("searchIpt")
      .value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (searchIptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (searchIptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/about/");
      }
    }

    for (i = 0; i < ADOPT_KWS.length; i++) {
      if (searchIptVal.indexOf(ADOPT_KWS[i]) > -1) {
        router.push("/adopt/");
      }
    }

    for (i = 0; i < TYPES_KWS.length; i++) {
      if (searchIptVal.indexOf(TYPES_KWS[i]) > -1) {
        router.push("/types/");
      }
    }

    for (i = 0; i < ATELERIX_KWS.length; i++) {
      if (searchIptVal.indexOf(ATELERIX_KWS[i]) > -1) {
        router.push("/types/atelerix/");
      }
    }

    for (i = 0; i < ERINACEUS_KWS.length; i++) {
      if (searchIptVal.indexOf(ERINACEUS_KWS[i]) > -1) {
        router.push("/types/erinaceus/");
      }
    }
    for (i = 0; i < HEMIECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(HEMIECHINUS_KWS[i]) > -1) {
        router.push("/types/hemiechinus/");
      }
    }
    for (i = 0; i < MESECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(MESECHINUS_KWS[i]) > -1) {
        router.push("/types/mesechinus/");
      }
    }
    for (i = 0; i < PARAECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(PARAECHINUS_KWS[i]) > -1) {
        router.push("/types/paraechinus/");
      }
    }

    for (i = 0; i < SUPPORT_KWS.length; i++) {
      if (searchIptVal.indexOf(SUPPORT_KWS[i]) > -1) {
        router.push("/support/");
      }
    }
  }

  function serverRouting() {
    var i;
    const searchIptVal = document
      .getElementById("searchIpt")
      .value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (searchIptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (searchIptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/about/");
      }
    }

    for (i = 0; i < ADOPT_KWS.length; i++) {
      if (searchIptVal.indexOf(ADOPT_KWS[i]) > -1) {
        router.push("/adopt/");
      }
    }

    for (i = 0; i < TYPES_KWS.length; i++) {
      if (searchIptVal.indexOf(TYPES_KWS[i]) > -1) {
        router.push("/types/");
      }
    }

    for (i = 0; i < ATELERIX_KWS.length; i++) {
      if (searchIptVal.indexOf(ATELERIX_KWS[i]) > -1) {
        router.push("/types/atelerix/");
      }
    }
    for (i = 0; i < ERINACEUS_KWS.length; i++) {
      if (searchIptVal.indexOf(ERINACEUS_KWS[i]) > -1) {
        router.push("/types/erinaceus/");
      }
    }
    for (i = 0; i < HEMIECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(HEMIECHINUS_KWS[i]) > -1) {
        router.push("/types/hemiechinus/");
      }
    }
    for (i = 0; i < MESECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(MESECHINUS_KWS[i]) > -1) {
        router.push("/types/mesechinus/");
      }
    }
    for (i = 0; i < PARAECHINUS_KWS.length; i++) {
      if (searchIptVal.indexOf(PARAECHINUS_KWS[i]) > -1) {
        router.push("/types/paraechinus/");
      }
    }

    for (i = 0; i < SUPPORT_KWS.length; i++) {
      if (searchIptVal.indexOf(SUPPORT_KWS[i]) > -1) {
        router.push("/support/");
      }
    }
  }

  // Defaults
  useEffect(() => {
    const SEARCH_CLICK_BLOCKER = document.getElementById("searchClickBlocker");
    const SEARCH_OVERLAY = document.getElementById("searchOverlay");
    const SEARCH_OVERLAY_CNT = document.getElementById("searchOverlayCnt");

    SEARCH_CLICK_BLOCKER.style.display = "none";
    SEARCH_OVERLAY.style.display = "none";
    SEARCH_OVERLAY_CNT.style.display = "none";

    SEARCH_OVERLAY.classList.toggle("deactive");
    SEARCH_OVERLAY_CNT.classList.toggle("deactive");
  }, []);

  // Rerouting
  useEffect(() => {
    document.getElementById("searchIpt").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (env == "development") {
          localRouting();
        }

        if (env == "production") {
          serverRouting();
        }
      }
    });

    document.getElementById("searchGo").addEventListener("click", () => {
      if (env == "development") {
        localRouting();
      }

      if (env == "production") {
        serverRouting();
      }
    });
  }, [router]);

  return (
    <div id={styles.search}>
      <div id="searchClickBlocker" className={styles.search_click_blocker} />

      <div
        className={`${styles.search_overlay} full-second`}
        id="searchOverlay"
      >
        <div
          className={`${styles.search_overlay_cnt} page-transition`}
          id="searchOverlayCnt"
        >
          <div className={styles.search_overlay_cnt_top}>
            <h3>Search</h3>

            <button
              id="searchCloser"
              className={styles.search_closer}
              onClick={CloseSearch}
            >
              Close <FaTimesCircle />
            </button>
          </div>

          <div className={styles.search_overlay_cnt_main}>
            <input
              type="text"
              autoComplete="off"
              id="searchIpt"
              placeholder="Search.."
              onKeyUp={filterSearchLinks}
            />

            <button
              id="searchGo"
              className={`${styles.search_go} page-transition`}
            >
              <FaSearch />
            </button>
          </div>

          <ul id="searchLinks">
            <li>
              <Link href="/">
                <a className="page-transition">Home/Index</a>
              </Link>
            </li>
            <li>
              <Link href="/about/">
                <a className="page-transition">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/types/">
                <a className="page-transition">All Types</a>
              </Link>
            </li>
            <li>
              <Link href="/types/atelerix/">
                <a className="page-transition">Atelerix</a>
              </Link>
            </li>
            <li>
              <Link href="/types/erinaceus">
                <a className="page-transition">Erinaceus</a>
              </Link>
            </li>
            <li>
              <Link href="/types/hemiechinus/">
                <a className="page-transition">Hemiechinus</a>
              </Link>
            </li>
            <li>
              <Link href="/types/mesechinus/">
                <a className="page-transition">Mesechinus</a>
              </Link>
            </li>
            <li>
              <Link href="/types/paraechinus/">
                <a className="page-transition">Paraechinus</a>
              </Link>
            </li>
            <li>
              <Link href="/adopt/">
                <a className="page-transition">Adoption</a>
              </Link>
            </li>
            <li>
              <Link href="/support/">
                <a className="page-transition">Get Support</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
