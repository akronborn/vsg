import styles from "../styles/TagLine.module.css";
import Image from "next/image";
import icon1 from "../public/icon1.png";

const TagLine = () => {
  return (
    <div className={styles.container}>
      <Image src={icon1} alt="green star photo" className={styles.image} />
      PC, Mobile, and Console Gaming
    </div>
  );
};

export default TagLine;
