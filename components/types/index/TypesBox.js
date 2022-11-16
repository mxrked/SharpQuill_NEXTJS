import styles from "../../../styles/types/Types.module.css";
import Atelerix from "./types_box_cnt/Atelerix";
import Erinaceus from "./types_box_cnt/Erinaceus";
import Hemiechinus from "./types_box_cnt/Hemiechinus";
import Mesechinus from "./types_box_cnt/Mesechinus";
import Paraechinus from "./types_box_cnt/Paraechinus";

const TypesBox = () => {
  return (
    <div className={styles.types_box}>
      <Atelerix />
      <Erinaceus />
      <Hemiechinus />
      <Mesechinus />
      <Paraechinus />
    </div>
  );
};

export default TypesBox;
