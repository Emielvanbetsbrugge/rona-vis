import "./App.css";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Timeline from "./components/timeline";

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline />
      <Canvas />
    </div>
  );
}

export default App;
