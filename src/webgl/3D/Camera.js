import { PerspectiveCamera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Camera extends PerspectiveCamera {
  constructor(fov, aspect, near, far, renderer) {
    super(fov, aspect, near, far);
    this.tweenPosition = new Vector3();
    this.tweenTarget = new Vector3();
    this.firstTime = true;

    this.position.set(0, 0, 5);
    this.orbitControls = new OrbitControls(this, renderer.domElement);
    this.orbitControls.enableDamping = true;
    this.orbitControls.rotateSpeed = 0.25;
  }

  resize() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.updateProjectionMatrix();
  }
}

export default Camera;
