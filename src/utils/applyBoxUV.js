// Applique les coordonnées UV (issues de UV_MAP, en pixels) sur les 6 faces
// d'une BoxGeometry Three.js.
//
// Principe : une BoxGeometry par défaut a déjà des UV qui vont de 0 à 1 sur
// chaque face (les 4 coins du carré). On ne fait que "remapper" ces 0 et 1
// vers la portion exacte de la texture qui correspond à cette face.
export function applyBoxUV(geometry, faceUVs, textureSize = 64) {
  const uvAttr = geometry.attributes.uv;

  // Ordre des faces tel que Three.js construit une BoxGeometry :
  // droite, gauche, dessus, dessous, avant, arrière (4 sommets chacune)
  const faceOrder = ["right", "left", "top", "bottom", "front", "back"];

  faceOrder.forEach((faceName, faceIndex) => {
    const rect = faceUVs[faceName];
    if (!rect) return; // face pas encore définie dans UV_MAP, on l'ignore

    const u1 = rect.x / textureSize;
    const u2 = (rect.x + rect.w) / textureSize;
    // Axe Y inversé : Three.js a son origine UV en bas à gauche,
    // alors que nos coordonnées pixel ont leur origine en haut à gauche
    const v1 = 1 - (rect.y + rect.h) / textureSize;
    const v2 = 1 - rect.y / textureSize;

    const vertexStart = faceIndex * 4;
    for (let i = 0; i < 4; i++) {
      const vi = vertexStart + i;
      const origU = uvAttr.getX(vi); // vaut 0 ou 1 par défaut
      const origV = uvAttr.getY(vi); // vaut 0 ou 1 par défaut
      uvAttr.setXY(vi, origU === 0 ? u1 : u2, origV === 0 ? v1 : v2);
    }
  });

  uvAttr.needsUpdate = true;
}
