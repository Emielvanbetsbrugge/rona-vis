import gsap from "gsap";
import { DoubleSide, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

export default class Ball {
  constructor(config, index) {
    this.material = new MeshBasicMaterial({
      color: "#D62E2E",
      side: DoubleSide,
    });
    this.geometry = new SphereGeometry(0.24, 16, 16);
    this.mesh = new Mesh(this.geometry, this.material);

    // Add index to the mesh so we can have access to this for rollovers.
    this.mesh.index = index;

    const xOffset = -4;
    const yOffset = 1.5;
    const x = (index % 9) + xOffset;
    const y = Math.ceil(-index / 9) + yOffset;
    this.mesh.position.set(x, y, 0);
    // console.log(config);

    this.mesh.scale.set(0, 0, 0);

    const animationObject = { scale: 0 };
    gsap.to(animationObject, {
      scale: 1,
      duration: 2,
      onUpdate: () =>
        this.mesh.scale.set(
          animationObject.scale,
          animationObject.scale,
          animationObject.scale
        ),
    });
  }
}
