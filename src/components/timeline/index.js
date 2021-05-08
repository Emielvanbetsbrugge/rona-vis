import Link from "../link";
import styles from "./styles.module.css";

const Timeline = () => {
  return (
    <nav className={styles.wrapper}>
      <Link link="/jan-2019">January</Link>
      <Link link="/feb-2019">February</Link>
    </nav>
  );
};

export default Timeline;
