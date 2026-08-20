// Lit un fichier image (PNG) et retourne une Promise qui résout vers un
// objet pixels ("x_y" -> couleur), au même format que celui de usePixelData.
// Rejette la Promise avec un message clair si le fichier n'est pas valide.
export function importSkinFromFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Ce fichier n'est pas une image. Choisis un PNG."));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        if (img.width !== 64 || img.height !== 64) {
          reject(
            new Error(
              `Taille invalide : ${img.width}×${img.height}px. Un skin doit faire exactement 64×64px.`
            )
          );
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const { data } = ctx.getImageData(0, 0, 64, 64);
        const pixels = {};

        for (let y = 0; y < 64; y++) {
          for (let x = 0; x < 64; x++) {
            const i = (y * 64 + x) * 4;
            const alpha = data[i + 3];
            if (alpha === 0) continue; // pixel transparent : on ne l'importe pas

            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            pixels[`${x}_${y}`] = `rgb(${r}, ${g}, ${b})`;
          }
        }

        resolve(pixels);
      };

      img.onerror = () => reject(new Error("Impossible de lire ce fichier comme une image."));
      img.src = reader.result;
    };

    reader.onerror = () => reject(new Error("Erreur lors de la lecture du fichier."));
    reader.readAsDataURL(file);
  });
}
