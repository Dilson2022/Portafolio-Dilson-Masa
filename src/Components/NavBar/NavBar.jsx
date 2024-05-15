import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
//import Menu from "../Menu/Menu";

const NavBar = () => {
  return (
    <div>
    {/* <Menu/> */}
    <div className="NavBar">
      <Link to="/" className="cerrar">Inicio</Link>
      <Link to="/sobremi">Sobre mi</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/habilidades">Habilidades</Link>
    </div>
  </div>
  );
};

export default NavBar;
