import { useEffect } from "react";
import Menu from "../components/nav/menu_cnt/Menu";
import Nav from "../components/nav/Nav";
import Search from "../components/nav/search_cnt/Search";
import BackToTop from "../components/overlays/BackToTop";
import PageLoader from "../components/overlays/PageLoader";
import DataHolderStuff from "./components/DataHolderStuff";

const OnAllPages = () => {
  //! Removing Session Storage cookies and Adding vertical scrolling back.
  useEffect(() => {
    if (
      sessionStorage.getItem("Menu Toggled.") ||
      sessionStorage.getItem("Search Toggled.")
    ) {
      sessionStorage.removeItem("Menu Toggled.");
      sessionStorage.removeItem("Search Toggled.");

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 200);
    }
  }, []);

  //! Made with NextJS
  useEffect(() => {
    if (document.getElementById("__next")) {
      console.log("SharpQuills was made with NextJS (v. 12.0.8).");
    }
  }, []);

  return (
    <div className="onAllPages">
      <PageLoader />
      <BackToTop />
      <Nav />
      <DataHolderStuff />
      <Search />
      <Menu />
    </div>
  );
};

export default OnAllPages;
