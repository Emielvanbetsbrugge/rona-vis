import gsap from "gsap";
import { Color, Mesh, MeshBasicMaterial, SphereGeometry } from "three";
import { mapBetweenValues } from "../../utils/functions";

export default class Ball {
  constructor(config, index) {
    this.index = index;
    this.config = config;
    this.material = new MeshBasicMaterial({});
    this.geometry = new SphereGeometry(0.24, 16, 16);
    this.mesh = new Mesh(this.geometry, this.material);

    // Add index to the mesh so we can have access to this for rollovers.
    this.mesh.index = index;
    this.update(config, index);
  }

  update(config, index) {
    // Position of the ball based on index.
    const xOffset = -4;
    const yOffset = 1.5;
    const x = (index % 9) + xOffset;
    const y = Math.ceil(-index / 9) + yOffset;
    this.mesh.position.set(x, y, 0);

    // Configuration for each ball based on data.
    const normalizedCases = mapBetweenValues(config.new_cases, 0, 80, 0, 1);

    // Scale
    const maxScale = 2;
    const minScale = 0.2;
    const scale = maxScale * normalizedCases + minScale;

    // Color
    // hsl(.5, 100%, 50%) = red;
    // hsl(.0, 100%, 50%) = green;
    // We map between those 2 values.
    const color = new Color(
      `hsl(${(0.5 - normalizedCases / 2) * 240}, 100%, 50%)`
    );
    this.mesh.material.color.set(color);

    const animationObject = { scale: 0 };
    gsap.to(animationObject, {
      scale,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () =>
        this.mesh.scale.set(
          animationObject.scale,
          animationObject.scale,
          animationObject.scale
        ),
    });
  }
}
