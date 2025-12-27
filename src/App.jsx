import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/apply";

const App = () => {
  <div className="noise-layer"></div>
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply/:id" element={<Apply />} />
    </Routes>
  );
};

export default App;
