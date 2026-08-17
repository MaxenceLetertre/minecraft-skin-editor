import { useRef, useEffect, useState } from "react";
import { UV_MAP } from "../../utils/uvMap";
import { SCALE, getPixelFromEvent } from "../../utils/canvasCoords";

const TEXTURE_SIZE = 64; // texture Minecraft toujours 64x64

// pixels : objet "x_y" -> couleur (vient du hook usePixelData)
// onPaint(x, y) : fonction appelée quand on clique/glisse sur un pixel valide
export default function SkinCanvas({ pixels, onPaint }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fond gris : les zones de la texture qu'on n'utilise pas (hors UV_MAP)
    ctx.fillStyle = "#e5e5e5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Template : une case blanche par face définie dans UV_MAP
    Object.values(UV_MAP).forEach((bodyPart) => {
      Object.values(bodyPart).forEach(({ x, y, w, h }) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
        ctx.strokeStyle = "#cccccc";
        ctx.lineWidth = 1;
        ctx.strokeRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
      });
    });

    // Par-dessus : les pixels déjà peints par l'utilisateur
    Object.entries(pixels).forEach(([key, color]) => {
      const [x, y] = key.split("_").map(Number);
      ctx.fillStyle = color;
      ctx.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
    });
  }, [pixels]);

  const handlePaint = (event) => {
    const { x, y } = getPixelFromEvent(event, canvasRef.current);
    onPaint(x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      width={TEXTURE_SIZE * SCALE}
      height={TEXTURE_SIZE * SCALE}
      style={{ border: "1px solid #999", imageRendering: "pixelated", cursor: "crosshair" }}
      onMouseDown={(event) => {
        setIsDrawing(true);
        handlePaint(event);
      }}
      onMouseMove={(event) => {
        if (isDrawing) handlePaint(event);
      }}
      onMouseUp={() => setIsDrawing(false)}
      onMouseLeave={() => setIsDrawing(false)}
    />
  );
}
