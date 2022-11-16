export default function CloseMenu() {
  const MENU_CLICK_BLOCKER = document.getElementById("menuClickBlocker");
  const MENU_DARKEN = document.getElementById("menuDarken");
  const MENU_MAIN = document.getElementById("menuMain");
  const MENU_MAIN_CNT = document.getElementById("menuMainCnt");
  const ALL_MENU_LINK_SETS = document.querySelectorAll(".menu_links_main_set");
  const ALL_MENU_LINK_CBS = document.querySelectorAll(".menu_links_main_cb");
  const ALL_MENU_LINK_FA = document.querySelectorAll(".menu_links_main_fa");

  sessionStorage.removeItem("Menu Toggled.");

  MENU_DARKEN.style.pointerEvents = "none";
  MENU_MAIN_CNT.style.pointerEvents = "none";

  MENU_MAIN_CNT.classList.toggle("deactive");

  setTimeout(() => {
    MENU_MAIN.style.width = "0";
  }, 600);

  setTimeout(() => {
    MENU_DARKEN.classList.toggle("deactive");
  }, 900);

  setTimeout(() => {
    MENU_CLICK_BLOCKER.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 1500);

  ALL_MENU_LINK_SETS.forEach((set) => {
    set.style.height = "0";
  });
  ALL_MENU_LINK_CBS.forEach((cb) => {
    cb.checked = false;
  });
  ALL_MENU_LINK_FA.forEach((fa) => {
    fa.style.transform = "rotate(0deg)";
  });
}
