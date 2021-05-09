import styles from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
  link?: string;
  title?: boolean;
  active?: boolean;
};

const Link = ({ children, link, title, active }: Props) => {
  return (
    <a
      className={`${styles.link} ${title ? styles.title : ""} ${
        active ? "" : styles.nonActive
      }`}
      href={link}
    >
      {children}
    </a>
  );
};

export default Link;
