import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CharacterModel from "./CharacterModel";

// texture : reçue en props, vient de SkinCreator (qui la génère à partir des pixels peints)
export default function SkinViewer3D({ texture }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{
        width: "100%",
        maxWidth: "400px",
        aspectRatio: "1 / 1",
        border: "1px solid #999",
      }}
    >
      {/* Lumière ambiante : éclaire tout uniformément, évite les faces noires */}
      <ambientLight intensity={0.6} />
      {/* Lumière directionnelle : donne du volume avec des ombres légères */}
      <directionalLight position={[3, 3, 3]} intensity={0.8} />

      <CharacterModel texture={texture} />

      {/* Clic-glisser pour tourner, molette pour zoomer */}
      <OrbitControls />
    </Canvas>
  );
}
