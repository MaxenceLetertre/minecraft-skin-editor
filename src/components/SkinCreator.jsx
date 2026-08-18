import { useMemo } from "react";
import { usePixelData } from "../hooks/usePixelData";
import { pixelsToTexture } from "../utils/pixelsToTexture";
import SkinEditor from "./editor/SkinEditor";
import SkinViewer3D from "./viewer3d/SkinViewer3D";

export default function SkinCreator() {
  // L'état des pixels vit ici, au niveau du parent commun, pour que
  // l'éditeur 2D ET la vue 3D puissent tous les deux y accéder.
  const { pixels, paintPixel, erasePixel, loadPixels, undo, redo, canUndo, canRedo } =
    usePixelData();

  // useMemo : on ne régénère la texture 3D que quand les pixels changent réellement
  const texture = useMemo(() => pixelsToTexture(pixels), [pixels]);

  return (
    <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
      <SkinEditor
        pixels={pixels}
        onPaint={paintPixel}
        onErase={erasePixel}
        onImport={loadPixels}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
      <SkinViewer3D texture={texture} />
    </div>
  );
}
