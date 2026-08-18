import { useState } from "react";
import SkinCanvas from "./SkinCanvas";
import ColorPicker from "./ColorPicker";
import { exportSkinAsPNG } from "../../utils/exportSkinAsPNG";

// pixels, onPaint : reçus en props, viennent de SkinCreator (état partagé avec la vue 3D)
export default function SkinEditor({ pixels, onPaint }) {
  const [color, setColor] = useState("#000000");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <ColorPicker color={color} onChange={setColor} />
      <SkinCanvas pixels={pixels} onPaint={(x, y) => onPaint(x, y, color)} />
      <button onClick={() => exportSkinAsPNG(pixels)}>Télécharger le skin (PNG)</button>
    </div>
  );
}
