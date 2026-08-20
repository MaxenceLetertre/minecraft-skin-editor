export const SCALE = 10; // résolution interne : 1 pixel du skin = 10px dans le canvas
export const TEXTURE_SIZE = 64;

// Convertit la position d'un clic/mouvement de souris en coordonnées
// réelles du skin (0-63, 0-63). On calcule en pourcentage de la taille
// AFFICHÉE du canvas (rect.width/height), pas en divisant par SCALE —
// comme ça ça marche même si le canvas est réduit visuellement (petit écran).
export function getPixelFromEvent(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const relativeX = (event.clientX - rect.left) / rect.width;
  const relativeY = (event.clientY - rect.top) / rect.height;

  return {
    x: Math.floor(relativeX * TEXTURE_SIZE),
    y: Math.floor(relativeY * TEXTURE_SIZE),
  };
}
