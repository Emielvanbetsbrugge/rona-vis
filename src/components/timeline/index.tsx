import Link from "../link";
import styles from "./styles.module.css";

/**
 * Sadly the data is given day by day, which does not make this possible.
 */
const Timeline = () => {
  return (
    <nav className={styles.wrapper}>
      <Link link="#2020-01-30" active={true}>
        January
      </Link>
      <Link link="#2020-01-31">February</Link>
    </nav>
  );
};

export default Timeline;
