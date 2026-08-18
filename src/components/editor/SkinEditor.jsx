import { useState } from "react";
import SkinCanvas from "./SkinCanvas";
import ColorPicker from "./ColorPicker";
import { exportSkinAsPNG } from "../../utils/exportSkinAsPNG";
import { importSkinFromFile } from "../../utils/importSkin";

// pixels, onPaint, onErase, onImport, onUndo, onRedo, canUndo, canRedo : reçus en props, viennent de SkinCreator
export default function SkinEditor({
  pixels,
  onPaint,
  onErase,
  onImport,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}) {
  const [color, setColor] = useState("#000000");
  const [tool, setTool] = useState("brush"); // "brush" ou "eraser"

  // Selon l'outil actif, on peint ou on efface le pixel cliqué
  const handlePixelClick = (x, y) => {
    if (tool === "eraser") {
      onErase(x, y);
    } else {
      onPaint(x, y, color);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const importedPixels = await importSkinFromFile(file);
    onImport(importedPixels);
    event.target.value = ""; // permet de réimporter le même fichier si besoin
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <ColorPicker color={color} onChange={setColor} />
        <button
          onClick={() => setTool("brush")}
          style={{ fontWeight: tool === "brush" ? "bold" : "normal" }}
        >
          Pinceau
        </button>
        <button
          onClick={() => setTool("eraser")}
          style={{ fontWeight: tool === "eraser" ? "bold" : "normal" }}
        >
          Gomme
        </button>
        <button onClick={onUndo} disabled={!canUndo}>
          ↩ Annuler
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
          ↪ Rétablir
        </button>
      </div>
      <SkinCanvas pixels={pixels} onPaint={handlePixelClick} />
      <div style={{ display: "flex", gap: "16px" }}>
        <button onClick={() => exportSkinAsPNG(pixels)}>Télécharger le skin (PNG)</button>
        <label style={{ cursor: "pointer", border: "1px solid #999", padding: "4px 8px", borderRadius: "4px" }}>
          Importer un skin
          <input type="file" accept="image/png" onChange={handleFileChange} style={{ display: "none" }} />
        </label>
      </div>
    </div>
  );
}
