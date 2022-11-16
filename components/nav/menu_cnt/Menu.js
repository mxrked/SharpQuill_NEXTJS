import Link from "next/link";
import { useEffect } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import CloseMenu from "../../../helpers/functions/CloseMenu";

import styles from "../../../styles/nav/Nav.module.css";

const Menu = () => {
  //! Defaults
  useEffect(() => {
    const MENU_CLICK_BLOCKER = document.getElementById("menuClickBlocker");
    const MENU_DARKEN = document.getElementById("menuDarken");
    const MENU_MAIN = document.getElementById("menuMain");
    const MENU_MAIN_CNT = document.getElementById("menuMainCnt");

    MENU_DARKEN.style.pointerEvents = "none";
    MENU_MAIN_CNT.style.pointerEvents = "none";

    MENU_CLICK_BLOCKER.style.display = "none";
    MENU_MAIN_CNT.classList.toggle("deactive");
    MENU_MAIN.style.width = "0";
    MENU_MAIN.style.display = "none";
    MENU_DARKEN.classList.toggle("deactive");
    MENU_DARKEN.style.display = "none";
  }, []);

  //! Menu Links
  useEffect(() => {
    const ALL_MENU_LINK_SETS = document.querySelectorAll(
      ".menu_links_main_set"
    );
    const ALL_MENU_LINK_CBS = document.querySelectorAll(".menu_links_main_cb");
    const ALL_MENU_LINK_FA = document.querySelectorAll(".menu_links_main_fa");

    function triggerMenuLinkSet(set, cb, fa, h) {
      cb.addEventListener("change", () => {
        if (cb.checked) {
          fa.style.transform = "rotate(180deg)";
          set.style.height = h;
        } else {
          set.style.height = "0";
          fa.style.transform = "rotate(0deg)";
        }
      });
    }
    triggerMenuLinkSet(
      ALL_MENU_LINK_SETS[0],
      ALL_MENU_LINK_CBS[0],
      ALL_MENU_LINK_FA[0],
      "150px"
    );
    triggerMenuLinkSet(
      ALL_MENU_LINK_SETS[1],
      ALL_MENU_LINK_CBS[1],
      ALL_MENU_LINK_FA[1],
      "300px"
    );
    triggerMenuLinkSet(
      ALL_MENU_LINK_SETS[2],
      ALL_MENU_LINK_CBS[2],
      ALL_MENU_LINK_FA[2],
      "50px"
    );
  }, []);

  return (
    <div id="menu">
      <div className={styles.menu_click_blocker} id="menuClickBlocker" />

      <div
        className={`${styles.menu_darken} full-second`}
        id="menuDarken"
        onClick={CloseMenu}
      />

      <div className={`${styles.menu_main} full-second`} id="menuMain">
        <div
          className={`${styles.menu_main_cnt} page-transition`}
          id="menuMainCnt"
        >
          <div className={styles.menu_main_cnt_top}>
            <h2>Navigation</h2>

            <button id="menuCloser" onClick={CloseMenu}>
              Close <FaTimes />
            </button>

            <span id="dataHolderCount">0</span>
          </div>

          <div className={styles.menu_main_cnt_body}>
            <label>
              <input type="checkbox" className="menu_links_main_cb" />
              General
              <FaChevronDown className="menu_links_main_fa page-transition" />
            </label>

            <ul className="menu_links_main_set page-transition">
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
                <Link href="/adopt/">
                  <a className="page-transition">Adopt</a>
                </Link>
              </li>
            </ul>

            <label>
              <input type="checkbox" className="menu_links_main_cb" />
              Types
              <FaChevronDown className="menu_links_main_fa page-transition" />
            </label>

            <ul className="menu_links_main_set page-transition">
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
                <Link href="/types/erinaceus/">
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
            </ul>

            <label>
              <input type="checkbox" className="menu_links_main_cb" />
              Support
              <FaChevronDown className="menu_links_main_fa page-transition" />
            </label>

            <ul className="menu_links_main_set page-transition">
              <li>
                <Link href="/support/">
                  <a className="page-transition">Get Support</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
