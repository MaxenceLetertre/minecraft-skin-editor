import SkinEditor from "./components/editor/SkinEditor";
import SkinViewer3D from "./components/viewer3d/SkinViewer3D";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Éditeur de skin Minecraft</h1>
      <SkinEditor />
      <SkinViewer3D />
    </div>
  );
}

export default App;
