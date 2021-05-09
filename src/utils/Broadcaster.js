/**
 * Broadcaster
 *
 * This we use to emit events between the react frontend and webGL.
 * Either party can emit and listen to events.
 *
 * All events are maintained in ./events.js, we use these consts to avoid typos.
 * If you want to add events, add them to the ./events.js file.
 *
 * A prototype of this is in /prototypes/react-webgl-setup.
 */
import { EventEmitter } from "events";

class Broadcaster extends EventEmitter {
  constructor() {
    super();
    if (typeof window !== "undefined") window.broadcaster = this;
  }

  emit(...args) {
    super.emit(...args);
  }
}

const instance = new Broadcaster();

export default instance;
