// Convertit les pixels peints en fichier PNG et déclenche le téléchargement
// dans le navigateur.
export function exportSkinAsPNG(pixels, filename = "mon-skin.png") {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Fond transparent : un vrai skin Minecraft a un fond transparent
  // (contrairement à la vue 3D où on avait choisi d'assumer le noir)
  ctx.clearRect(0, 0, 64, 64);

  Object.entries(pixels).forEach(([key, color]) => {
    const [x, y] = key.split("_").map(Number);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  });

  // toBlob : convertit le contenu du canvas en fichier PNG réel
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url); // libère la mémoire une fois le téléchargement lancé
  }, "image/png");
}
