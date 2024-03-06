import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Proyectos from "./Components/Proyectos/Proyectos";
import Habilidades from "./Components/Habilidades/Habilidades";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

 

function App() {
  useLocation()
  const mostrarNabvar = (location.pathname !== "/" );
 

  return (
    <div>

      {mostrarNabvar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades" element={<Habilidades />} />
      </Routes>
    </div>
  );
}

export default App;
