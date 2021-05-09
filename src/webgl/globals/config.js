import { EVENT } from "../../common/events";
import Broadcaster from "../../utils/Broadcaster";

export let selected = null;
export function setSelected(val) {
  Broadcaster.emit(EVENT.UPDATE_SELECTED, val);
  selected = val;
}
