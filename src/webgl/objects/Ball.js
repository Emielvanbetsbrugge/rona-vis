import { DoubleSide, Mesh, MeshBasicMaterial, SphereGeometry } from "three";

export default class Ball {
  constructor() {
    this.material = new MeshBasicMaterial({ color: "red", side: DoubleSide });
    this.geometry = new SphereGeometry(1, 16, 16);
    this.mesh = new Mesh(this.geometry, this.material);
  }
}
