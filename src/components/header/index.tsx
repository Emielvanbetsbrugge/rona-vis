import CountBoard from "../count-board";
import Link from "../link";
import styles from "./styles.module.css";
import { DataEntry } from "../../App";

interface Props {
  selected: DataEntry | undefined;
}

const Header = ({ selected }: Props) => {
  return (
    <h1 className={styles.wrapper}>
      <Link link="/" title={true} active={true}>
        RONAvis
      </Link>
      {selected ? <CountBoard selected={selected} /> : null}
    </h1>
  );
};

export default Header;
