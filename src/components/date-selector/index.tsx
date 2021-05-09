import { ChangeEvent, useRef } from "react";
import styles from "./styles.module.css";

interface Props {
  date: string;
  setDate: Function;
}

const DateSelector = ({ date, setDate }: Props) => {
  const inputRef = useRef(null);

  const changedDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  return (
    <input
      type="date"
      className={styles.wrapper}
      ref={inputRef}
      value={date}
      onChange={changedDate}
    ></input>
  );
};

export default DateSelector;
