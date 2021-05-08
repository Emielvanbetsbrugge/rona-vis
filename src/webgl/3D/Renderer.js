import { WebGLRenderer } from "three";

export default class Renderer extends WebGLRenderer {
  resize() {
    this.setSize(window.innerWidth, window.innerHeight);
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
