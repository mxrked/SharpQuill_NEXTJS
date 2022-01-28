import { useRouter } from "next/router";
import { useEffect } from "react";

import { DataHolder } from "../../arrays/DataHolder";

import styles from "../../styles/nav/Nav.module.css";

const DataHolderStuff = () => {
  const router = useRouter();

  //! Checking and pushing Cookies
  useEffect(() => {
    function detectingCookies() {
      // 1 cookie..
      if (
        sessionStorage.getItem("Route Cookie") &&
        !DataHolder.indexOf("Route Cookie Detected!") > -1
      ) {
        DataHolder.push("Route Cookie Detected!");
      }

      // 2 cookies..
      if (
        sessionStorage.getItem("Other Cookie") &&
        !DataHolder.indexOf("Other Cookie Detected!") > -1
      ) {
        DataHolder.push("Other Cookie Detected!");
      }
    }

    detectingCookies();
    setTimeout(() => {
      console.log(DataHolder);

      if (document.getElementById("dataHolderCount")) {
        document.getElementById("dataHolderCount").innerHTML =
          DataHolder.length;
      } else {
        console.log("Could not find dataHolderCount...");
      }
    }, 500);
  }, [router]);

  //! Cookie Togglers
  useEffect(() => {
    document.getElementById("dataHolderCount").style.display = "none";

    // This is for if the user is on another page
    if (document.getElementById("routeCookieToggler")) {
      document
        .getElementById("routeCookieToggler")
        .addEventListener("click", () => {
          sessionStorage.setItem("Route Cookie", true);
        });
    }

    if (document.getElementById("otherCookieToggler")) {
      document
        .getElementById("otherCookieToggler")
        .addEventListener("click", () => {
          sessionStorage.setItem("Other Cookie", true);
        });
    }
  }, []);

  return <div className={styles.data_holder_stuff}></div>;
};

export default DataHolderStuff;
