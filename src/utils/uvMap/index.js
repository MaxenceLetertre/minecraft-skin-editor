import { head } from "./head.js";
import { torso } from "./torso.js";
import { rightArm } from "./rightArm.js";
import { leftArm } from "./leftArm.js";
import { rightLeg } from "./rightLeg.js";
import { leftLeg } from "./leftLeg.js";

// UV_MAP est LA table de référence utilisée par le canvas 2D (pour dessiner
// le template) et par le modèle 3D (pour appliquer la texture sur les faces).
export const UV_MAP = {
  head,
  torso,
  rightArm,
  leftArm,
  rightLeg,
  leftLeg,
};
