import Main from './pages/Main'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Katalog from "./pages/Katalog";
import Info from './pages/Info'

export default function App(){
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/katalog" element={<Katalog />}/>
          <Route path="/info" element={<Info />}/>
        </Routes>
      </div>
  );
}