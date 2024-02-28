import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">Inicio</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/habilidades">Habilidades</Link>
    </div>
  );
};

export default NavBar;
