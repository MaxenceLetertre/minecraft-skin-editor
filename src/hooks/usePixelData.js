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
  // history : liste de tous les états successifs des pixels (un "instantané" par action)
  // historyIndex : à quel instantané on se trouve actuellement
  const [history, setHistory] = useState([{}]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const pixels = history[historyIndex];

  // Enregistre un nouvel état : on coupe le "futur" s'il y en avait un
  // (cas où on a fait undo puis qu'on repeint - le redo précédent devient invalide)
  const commit = useCallback(
    (newPixels) => {
      setHistory((prev) => [...prev.slice(0, historyIndex + 1), newPixels]);
      setHistoryIndex((prev) => prev + 1);
    },
    [historyIndex]
  );

  const paintPixel = useCallback(
    (x, y, color) => {
      if (!isValidPixel(x, y)) return;
      commit({ ...pixels, [`${x}_${y}`]: color });
    },
    [pixels, commit]
  );

  const erasePixel = useCallback(
    (x, y) => {
      if (!isValidPixel(x, y)) return;
      const next = { ...pixels };
      delete next[`${x}_${y}`];
      commit(next);
    },
    [pixels, commit]
  );

  // Remplace tous les pixels d'un coup (utilisé pour l'import de skin)
  const loadPixels = useCallback((newPixels) => commit(newPixels), [commit]);

  const undo = useCallback(() => {
    setHistoryIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const redo = useCallback(() => {
    setHistoryIndex((prev) => Math.min(history.length - 1, prev + 1));
  }, [history.length]);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return { pixels, paintPixel, erasePixel, loadPixels, undo, redo, canUndo, canRedo };
}
