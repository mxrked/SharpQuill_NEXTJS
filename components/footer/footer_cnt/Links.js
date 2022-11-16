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
                footerLinkHREF="/"
                footerLinkTXT="Home/Index"
              />
              <this.createFooterLink
                footerLinkHREF="/about/"
                footerLinkTXT="About SQ"
              />
              <this.createFooterLink
                footerLinkHREF="/adopt/"
                footerLinkTXT="Adopt"
              />
              <this.createFooterLink
                footerLinkHREF="/types/"
                footerLinkTXT="Adopt a Hedgie"
              />
              <this.createFooterLink
                footerLinkHREF="/support/"
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
                footerLinkHREF="/types/"
                footerLinkTXT="All Types"
              />
              <this.createFooterLink
                footerLinkHREF="/types/atelerix/"
                footerLinkTXT="Atelerix"
              />
              <this.createFooterLink
                footerLinkHREF="/types/erinaceus/"
                footerLinkTXT="Erinaceus"
              />
              <this.createFooterLink
                footerLinkHREF="/types/hemiechinus/"
                footerLinkTXT="Hemiechinus"
              />
              <this.createFooterLink
                footerLinkHREF="/types/mesechinus/"
                footerLinkTXT="Mesechinus"
              />
              <this.createFooterLink
                footerLinkHREF="/types/paraechinus/"
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
