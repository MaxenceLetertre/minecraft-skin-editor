import { UV_MAP } from "../../utils/uvMap";
import TexturedBox from "./TexturedBox";

// Dimensions en unités Three.js, dérivées des tailles réelles Minecraft
// (1 unité = 1 pixel du modèle, comme dans le jeu)
const HEAD = [8, 8, 8];
const TORSO = [8, 12, 4];
const ARM = [4, 12, 4];
const LEG = [4, 12, 4];

// texture : reçue en props, générée à partir des pixels peints par l'utilisateur
export default function CharacterModel({ texture }) {
  return (
    <group scale={0.15}>
      {/* Torse : premier test du mapping UV réel, avec la texture de debug */}
      <TexturedBox
        size={TORSO}
        faceUVs={UV_MAP.torso}
        texture={texture}
        position={[0, 0, 0]}
      />

      {/* Tête : juste au-dessus du torse */}
      <TexturedBox
        size={HEAD}
        faceUVs={UV_MAP.head}
        texture={texture}
        position={[0, TORSO[1] / 2 + HEAD[1] / 2, 0]}
      />

      {/* Bras droit : collé au flanc droit du torse */}
      <TexturedBox
        size={ARM}
        faceUVs={UV_MAP.rightArm}
        texture={texture}
        position={[TORSO[0] / 2 + ARM[0] / 2, 0, 0]}
      />

      {/* Bras gauche : collé au flanc gauche du torse */}
      <TexturedBox
        size={ARM}
        faceUVs={UV_MAP.leftArm}
        texture={texture}
        position={[-(TORSO[0] / 2 + ARM[0] / 2), 0, 0]}
      />

      {/* Jambe droite : sous le torse, décalée à droite */}
      <TexturedBox
        size={LEG}
        faceUVs={UV_MAP.rightLeg}
        texture={texture}
        position={[LEG[0] / 2, -(TORSO[1] / 2 + LEG[1] / 2), 0]}
      />

      {/* Jambe gauche : sous le torse, décalée à gauche */}
      <TexturedBox
        size={LEG}
        faceUVs={UV_MAP.leftLeg}
        texture={texture}
        position={[-LEG[0] / 2, -(TORSO[1] / 2 + LEG[1] / 2), 0]}
      />
    </group>
  );
}
