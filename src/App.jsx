import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TogglePage } from "./pages/TogglePage";
import { TrafficLightPage } from "./pages/TrafficLightPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/traffic-light" element={<TrafficLightPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
