import { BackgroundImage } from "react-image-and-background-image-fade";
import styles from "../../../styles/types/Types.module.css";

const Top = () => {
  return (
    <div className={styles.types_top}>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/types-top-bg.jpg"
        width="100%"
        height="100%"
        className={styles.types_top_bg}
      ></BackgroundImage>

      <div className={styles.types_top_cnt}>
        <div>
          <h2>Learn and Explore.</h2>

          <p>Get familiar with the 17 different types of hedgehog.</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
