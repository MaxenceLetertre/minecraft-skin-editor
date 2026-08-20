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
  const [importError, setImportError] = useState(null);

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

    setImportError(null);
    try {
      const importedPixels = await importSkinFromFile(file);
      onImport(importedPixels);
    } catch (error) {
      setImportError(error.message);
    }
    event.target.value = ""; // permet de réimporter le même fichier si besoin
  };

  return (
    <div className="panel">
      <div className="toolbar">
        <ColorPicker color={color} onChange={setColor} />
        <button className={tool === "brush" ? "active" : ""} onClick={() => setTool("brush")}>
          Pinceau
        </button>
        <button className={tool === "eraser" ? "active" : ""} onClick={() => setTool("eraser")}>
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
      <div className="toolbar">
        <button onClick={() => exportSkinAsPNG(pixels)}>Télécharger le skin (PNG)</button>
        <label>
          Importer un skin
          <input type="file" accept="image/png" onChange={handleFileChange} style={{ display: "none" }} />
        </label>
      </div>
      {importError && <p className="import-error">{importError}</p>}
    </div>
  );
}
