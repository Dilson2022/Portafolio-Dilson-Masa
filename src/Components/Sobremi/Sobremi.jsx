import "./Sobremi.css";
import NavBar from "../NavBar/NavBar"



function Sobremi() {
  return (
    <div className="container">
      {/* <NavBar /> */}

      <div className="Padre">
        <h1 className="nombre">Sobre mí</h1>
        <div className="seccion">
          <p className="sobre-mi"><span className="yosoy">Soy Dilson Masa, </span>Desarrollador full Stack, con mas de un año de experiencia,
          en desarrollo backend y frontend junior, soy una persona proactiva y creativa. 
          Me gusta trabajar en equipo y dar soluciones para optimizar las tareas. Capacitado en gestion de proyectos.</p>
    
          <div className="fila">
          <div className="col columna-i">
            <h3 className="dato-personal">Datos Personales</h3>
              
            <ul>
              <li><strong>Whatsaap:</strong><a href="https://wa.me/+573052119573" target="blank">+57 305 2119573</a></li>
              <li><strong className="email">Email:</strong> dilsonmasacontreras82@gmail.com </li>
              <li><strong className="direccion">Direccion:</strong> Colombia - Cartagena </li>
              <li><strong className="cargo">Cargo:</strong>freelance</li>
            </ul>
              
          </div>
          <div className="col columna-d">
            <h3 className="interese">Intereses</h3>
            <div className="contenedor-intereses">
              <div className="intereses">
                <span className="titulo-interes">JUEGOS</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">MUSICA</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">VIAJAR</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">VIDA SOC.</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">DEPORTE</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">LIBROS</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">AUTOS</span>
              </div>
              <div className="intereses">
                <span className="titulo-interes">TECNOLOGIA</span>
              </div>
            </div>
          </div>
          </div>
        </div>

        <nav className="redes">
          <a
            target="blank"
            href="https://www.linkedin.com/in/dilson-masa-contreras-b068b4216/"
            className="icons-contacto"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="blank"
            href="https://www.facebook.com/dilson.masacontreras?locale=es_LA"
            className="icons-contacto"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="blank"
            href="https://github.com/Dilson2022"
            className="icons-contacto"
          >
            <i className="fa-brands fa-github"></i>
          </a>
      </nav>

      </div>
    </div>
  );
}

export default Sobremi;
