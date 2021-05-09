import { DataEntry } from "../../App";
import styles from "./styles.module.css";

interface Props {
  selected?: DataEntry | undefined;
}

const CountBoard = ({ selected }: Props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.location}>
        <p>location:</p>
        <p>{selected?.area_name}</p>
      </section>
      <section>
        <p>new cases: {selected?.new_cases}</p>
        <p>total cases: {selected?.total_cases}</p>
      </section>
    </div>
  );
};

export default CountBoard;
