import { useMemo } from "react";
import * as THREE from "three";
import { applyBoxUV } from "../../utils/applyBoxUV";

// size : [largeur, hauteur, profondeur]
// faceUVs : objet { top, bottom, right, front, left, back } venant de UV_MAP
// texture : la texture Three.js à appliquer
export default function TexturedBox({ size, faceUVs, texture, position }) {
  // useMemo : on ne recrée la géométrie que si size/faceUVs changent,
  // pas à chaque re-render du composant
  const geometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(...size);
    applyBoxUV(geo, faceUVs);
    return geo;
  }, [size, faceUVs]);

  return (
    <mesh position={position} geometry={geometry}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
