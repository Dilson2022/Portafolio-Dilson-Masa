import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";



const NavBar = () => {

  const [abrir, setAbrir] = useState(false)

  const abrirMenu = () => {
    setAbrir(!abrir);
  }
  
  return (
    <div>
      <FaBars className="menu" onClick={abrirMenu} />
      <div className={`NavBar ${abrir ? 'open' : ''}`}>
        <Link to="/" className="cerrar"onClick={abrirMenu}>Inicio</Link>
        <Link to="/sobremi"onClick={abrirMenu}>Sobre mi</Link>
        <Link to="/proyectos"onClick={abrirMenu}>Proyectos</Link>
        <Link to="/habilidades"onClick={abrirMenu}>Habilidades</Link>
      </div>
    </div>
  );
};

export default NavBar;
