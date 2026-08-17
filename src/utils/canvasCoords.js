export const SCALE = 10; // 1 pixel du skin = 10px à l'écran

// Convertit la position d'un clic/mouvement de souris en coordonnées
// réelles du skin (0-63, 0-63), en tenant compte du zoom (SCALE).
export function getPixelFromEvent(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const screenX = event.clientX - rect.left;
  const screenY = event.clientY - rect.top;

  return {
    x: Math.floor(screenX / SCALE),
    y: Math.floor(screenY / SCALE),
  };
}
