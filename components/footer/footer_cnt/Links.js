import { Component } from "react";
import styles from "../../../styles/footer/Footer.module.css";
import Link from "next/link";

class Links extends Component {
  constructor(props) {
    super(props);

    this.createFooterLink = this.createFooterLink.bind(this);
  }

  createFooterLink(props) {
    return (
      <li>
        <Link href={props.footerLinkHREF}>
          <a className="page-transition">{props.footerLinkTXT}</a>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className={styles.links}>
        <div className={styles.links_holder}>
          <div className={styles.links_holder_set} id={styles.linksS1}>
            <h3>General</h3>

            <ul>
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/"
                footerLinkTXT="Home/Index"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/about/"
                footerLinkTXT="About SQ"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/adopt/"
                footerLinkTXT="Adopt a Hedgie"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/support/"
                footerLinkTXT="Support"
              />
              <li className={styles.fake_link}>&nbsp;</li>
              <li className={styles.fake_link}>&nbsp;</li>
            </ul>
          </div>
          <div className={styles.links_holder_set} id={styles.linksS2}>
            <h3>Types</h3>

            <ul>
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/"
                footerLinkTXT="All Types"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/atelerix/"
                footerLinkTXT="Atelerix"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/erinaceus/"
                footerLinkTXT="Erinaceus"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/hemiechinus/"
                footerLinkTXT="Hemiechinus"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/mesechinus/"
                footerLinkTXT="Mesechinus"
              />
              <this.createFooterLink
                footerLinkHREF="/next-projects/sharpquills/types/paraechinus/"
                footerLinkTXT="Paraechinus"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
