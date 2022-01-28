export default function CloseSearch() {
  const SEARCH_CLICK_BLOCKER = document.getElementById("searchClickBlocker");
  const SEARCH_OVERLAY = document.getElementById("searchOverlay");
  const SEARCH_OVERLAY_CNT = document.getElementById("searchOverlayCnt");

  sessionStorage.removeItem("Search Toggled.");

  SEARCH_OVERLAY_CNT.style.pointerEvents = "none";
  SEARCH_OVERLAY_CNT.classList.toggle("deactive");

  setTimeout(() => {
    SEARCH_OVERLAY.classList.toggle("deactive");
  }, 700);

  setTimeout(() => {
    SEARCH_CLICK_BLOCKER.style.display = "none";
    document.body.style.overflowY = "auto";
  }, 1700);
}
