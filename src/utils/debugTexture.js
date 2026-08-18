import * as THREE from "three";
import { UV_MAP } from "./uvMap";

// Texture de test : chaque face de chaque partie du corps reçoit une
// couleur unique (même code couleur partout). Sert uniquement à vérifier
// que applyBoxUV() met la bonne couleur sur la bonne face — à remplacer
// par le vrai skin une fois validé.
export function createDebugTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Fond gris pour les zones non utilisées (overlay pas encore géré)
  ctx.fillStyle = "#888888";
  ctx.fillRect(0, 0, 64, 64);

  const colorByFace = {
    front: "red",
    back: "blue",
    left: "limegreen",
    right: "yellow",
    top: "purple",
    bottom: "orange",
  };

  Object.values(UV_MAP).forEach((bodyPart) => {
    Object.entries(bodyPart).forEach(([face, rect]) => {
      ctx.fillStyle = colorByFace[face];
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    });
  });

  const texture = new THREE.CanvasTexture(canvas);
  // NearestFilter : évite le flou, garde un rendu net façon pixel art
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}
