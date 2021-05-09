import { Raycaster, Vector3 } from "three";
import { selected, setSelected } from "../globals/config";

export default class Raycasters {
  constructor(camera) {
    this.camera = camera;

    this.caster = new Raycaster();
    this.caster.far = 20;
    const rayOrigin = new Vector3(-3, 0, 0);
    const rayDirection = new Vector3(10, 0, 0);
    rayDirection.normalize();
    this.caster.set(rayOrigin, rayDirection);
  }

  test(mouse, objects) {
    this.caster.setFromCamera(mouse, this.camera);
    const intersection = this.caster.intersectObjects(objects);

    objects.map((object) => {
      return object.scale.set(1, 1, 1);
    });

    if (intersection.length === 0 && selected) {
      setSelected(undefined);
    }
    if (intersection[0]) {
      if (selected !== intersection[0].object) {
        setSelected(intersection[0].object);
      }
      intersection[0].object.scale.addScalar(0.1);
    }
  }
}
