import { useState } from "react";
import SkinCanvas from "./SkinCanvas";
import ColorPicker from "./ColorPicker";
import { usePixelData } from "../../hooks/usePixelData";

export default function SkinEditor() {
  const [color, setColor] = useState("#000000");
  const { pixels, paintPixel } = usePixelData();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <ColorPicker color={color} onChange={setColor} />
      <SkinCanvas pixels={pixels} onPaint={(x, y) => paintPixel(x, y, color)} />
    </div>
  );
}
