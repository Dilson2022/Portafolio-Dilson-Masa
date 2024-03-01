import NavBar from "../NavBar/NavBar";
import "../Inicio/Inicio.css";
function Inicio() {
  return (
    <div>
      <NavBar />
      
      <h1>Frontend developers</h1>


      <div className="Padre">
      <p className="inicio">
        Soy desarrollador full Stack, con mas de un año de experiencia, en desarrollo backend y frontend junior,
        soy una persona proactiva y creativa. Me gusta trabajar en equipo y dar soluciones para optimizar las tareas.
        Capacitado en gestion de proyectos.. 
      </p>
      </div>


      <nav className="redes">
      <a target="blank" href="https://www.linkedin.com/in/dilson-masa-contreras-b068b4216/" className="icons-contacto" ><i className="fa-brands fa-linkedin" ></i></a>
      <a target="blank" href="https://www.facebook.com/dilson.masacontreras?locale=es_LA" className="icons-contacto"><i className="fa-brands fa-facebook"></i></a>
      <a target="blank" href="https://github.com/Dilson2022" className="icons-contacto"><i className="fa-brands fa-github"></i></a>
      </nav>
      

      
      

    </div>
  );
}

export default Inicio;
