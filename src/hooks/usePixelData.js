import { useState, useCallback } from "react";
import { UV_MAP } from "../utils/uvMap";

// Vérifie qu'un pixel (x, y) tombe bien dans une des zones dessinables
// définies par UV_MAP (pour ne pas peindre dans le fond gris "inutilisé").
function isValidPixel(x, y) {
  return Object.values(UV_MAP).some((bodyPart) =>
    Object.values(bodyPart).some(
      ({ x: fx, y: fy, w, h }) => x >= fx && x < fx + w && y >= fy && y < fy + h
    )
  );
}

export function usePixelData() {
  // pixels : objet où chaque clé "x_y" pointe vers une couleur, ex: { "8_8": "#ff0000" }
  const [pixels, setPixels] = useState({});

  const paintPixel = useCallback((x, y, color) => {
    if (!isValidPixel(x, y)) return;
    setPixels((prev) => ({ ...prev, [`${x}_${y}`]: color }));
  }, []);

  return { pixels, paintPixel };
}
