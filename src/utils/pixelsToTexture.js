import * as THREE from "three";

// Convertit l'objet pixels ("x_y" -> couleur, venant de usePixelData) en une
// texture Three.js, en dessinant chaque pixel peint sur un canvas 64x64.
export function pixelsToTexture(pixels) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Fond transparent : les pixels non peints restent invisibles sur le modèle
  ctx.clearRect(0, 0, 64, 64);

  Object.entries(pixels).forEach(([key, color]) => {
    const [x, y] = key.split("_").map(Number);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  });

  const texture = new THREE.CanvasTexture(canvas);
  // NearestFilter : évite le flou, garde un rendu net façon pixel art
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  return texture;
}
