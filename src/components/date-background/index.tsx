import styles from "./styles.module.css";

interface Props {
  date: string | undefined;
}

const DateBackground = ({ date }: Props) => {
  return <p className={styles.background}>{date}</p>;
};

export default DateBackground;
