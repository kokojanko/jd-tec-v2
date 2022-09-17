import Main from "./pages/Main";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Katalog from "./pages/Katalog";
import Electronics from "./pages/Electronics";
import Other from "./pages/Other";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}
