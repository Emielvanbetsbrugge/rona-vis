import styles from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
  link?: string;
};

const Link = ({ children, link }: Props) => {
  return (
    <a className={styles.link} href={link}>
      {children}
    </a>
  );
};

export default Link;
