import styles from "../../styles/home/Home.module.css";

const { Component } = require("react");
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackgroundImage } from "react-image-and-background-image-fade";

class Top extends Component {
  constructor(props) {
    super(props);

    this.createIndexTopSlideTxt = this.createIndexTopSlideTxt.bind(this);
  }

  createIndexTopSlideTxt(props) {
    return (
      <div className={styles.index_top_slide_overlay}>
        <div
          className={`${styles.index_top_slide_overlay_cnt} override_iTopCnt`}
        >
          <h1>
            {props.indexTopSlideH1_A} <br />
            <span>{props.indexTopSlideH1_B}</span>
          </h1>

          <blockquote>{props.indexTopSlideP}</blockquote>

          <div>
            <Link href={props.indexTopSlideTO}>
              <a>
                <span className={styles.index_top_slide_link_span} />

                <p>Learn More</p>

                <span className={styles.index_top_slide_link_span} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const iTopSettings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 9900,
    };

    return (
      <div id={styles.indexTop}>
        <Slider {...iTopSettings}>
          <BackgroundImage
            src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/index/top/index-top-3.jpg"
            width="100%"
            height="100%"
            className={styles.index_top_slide}
            id={styles.iTopS1}
          >
            <this.createIndexTopSlideTxt
              indexTopSlideH1_A="All things"
              indexTopSlideH1_B="hedgie."
              indexTopSlideP="Learn the different types of hedgehog."
              indexTopSlideTO="/types/"
            />
          </BackgroundImage>
          <BackgroundImage
            src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/index/top/index-top-2.jpg"
            width="100%"
            height="100%"
            className={styles.index_top_slide}
            id={styles.iTopS2}
          >
            <this.createIndexTopSlideTxt
              indexTopSlideH1_A="Explore our"
              indexTopSlideH1_B="history."
              indexTopSlideP="Learn and get familiar with Sharpquills."
              indexTopSlideTO="/about/"
            />
          </BackgroundImage>
          <BackgroundImage
            src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/index/top/index-top-1.jpg"
            width="100%"
            height="100%"
            className={styles.index_top_slide}
            id={styles.iTopS3}
          >
            <this.createIndexTopSlideTxt
              indexTopSlideH1_A="Adopt a"
              indexTopSlideH1_B="hedgie."
              indexTopSlideP="Adopt and care for your own hedgie."
              indexTopSlideTO="/adopt/"
            />
          </BackgroundImage>
        </Slider>
      </div>
    );
  }
}

export default Top;
