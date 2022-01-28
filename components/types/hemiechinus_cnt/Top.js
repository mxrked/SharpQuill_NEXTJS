import { BackgroundImage } from "react-image-and-background-image-fade";
import styles from "../../../styles/types/Types.module.css";

const Top = () => {
  return (
    <div className={styles.type_top}>
      <BackgroundImage
        src="http://basicallyeasy.com/NextJSCDNS/sharpquill/types/hemiechinus/hemiechinus-type.jpg"
        width="100%"
        height="100%"
        className={styles.type_top_bg}
      ></BackgroundImage>

      <div className={styles.type_top_cnt}>
        <div>
          <h2>Hemiechinus</h2>

          <p>Learn the 2 different species.</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
