import { Scene, Vector2 } from "three";
import Camera from "./3D/Camera";
import Renderer from "./3D/Renderer";
import Ball from "./objects/Ball";

import Broadcaster from "../utils/Broadcaster";
import { EVENT } from "../common/events";
import Raycasters from "./3D/raycaster";

export default class WebGL {
  constructor({ canvas }) {
    this.renderer = new Renderer({ canvas, alpha: true });
    this.camera = new Camera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
      this.renderer
    );
    this.scene = new Scene();

    this.mouse = new Vector2();

    // Events
    this.resize();
    this.addEvents();

    this.raycasters = new Raycasters(this.camera);
    this.render();
  }

  addEvents() {
    Broadcaster.on(EVENT.UPDATE_DATA, (data) => {
      this.data = data;
      if (!this.meshes) {
        this.addObjects();
      } else {
        this.updateObjects();
      }
    });

    window.addEventListener("resize", this.resize.bind(this));

    window.addEventListener("mousemove", (e) => {
      this.mouse.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    });
  }

  addObjects() {
    this.meshes = [];
    this.objects = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data && this.data[i]) {
        const currentBall = new Ball(this.data[i], i);
        this.scene.add(currentBall.mesh);
        this.meshes[i] = currentBall.mesh;
        this.objects[i] = currentBall;
      }
    }
  }

  updateObjects() {
    this.objects.map((object, index) => {
      return object.update(this.data[index], index);
    });
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }

  render() {
    this.camera.orbitControls.update();
    if (this.meshes && this.meshes.length > 0) {
      this.raycasters.test(this.mouse, this.meshes);
    }
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
