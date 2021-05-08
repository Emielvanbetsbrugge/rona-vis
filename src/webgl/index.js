import { Scene } from "three";
import Camera from "./3D/Camera";
import Renderer from "./3D/Renderer";
import Ball from "./objects/Ball";

export default class WebGL {
  constructor({ canvas }) {
    this.renderer = new Renderer({ canvas });
    this.camera = new Camera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
      this.renderer
    );
    this.scene = new Scene();

    // Events
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

    this.addObjects();
    this.render();
  }

  addObjects() {
    this.ball = new Ball();
    console.log(this.ball.mesh.position);
    this.scene.add(this.ball.mesh);
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }

  render() {
    this.camera.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
