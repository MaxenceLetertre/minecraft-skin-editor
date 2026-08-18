import { Canvas } from "@react-three/fiber";
import CharacterModel from "./CharacterModel";

export default function SkinViewer3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: "400px", height: "400px", border: "1px solid #999" }}
    >
      {/* Lumière ambiante : éclaire tout uniformément, évite les faces noires */}
      <ambientLight intensity={0.6} />
      {/* Lumière directionnelle : donne du volume avec des ombres légères */}
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <CharacterModel />
    </Canvas>
  );
}
