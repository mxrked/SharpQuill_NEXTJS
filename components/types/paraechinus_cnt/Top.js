import { BackgroundImage } from "react-image-and-background-image-fade";
import styles from "../../../styles/types/Types.module.css";

const Top = () => {
  return (
    <div className={styles.type_top}>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mxrked/SharpQuill_NEXTJS_CDN/main/types/paraechinus/paraechinus-type.jpg"
        width="100%"
        height="100%"
        className={styles.type_top_bg}
      ></BackgroundImage>

      <div className={styles.type_top_cnt}>
        <div>
          <h2>Paraechinus</h2>

          <p>Learn the 4 different species.</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
