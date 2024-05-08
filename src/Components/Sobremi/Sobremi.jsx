import "./Sobremi.css";
import NavBar from "../NavBar/NavBar"

function Sobremi() {
  return (
    <div className="container">
      {/* <NavBar /> */}

      <div className="Padre">
        <h1>Sobre mí</h1>
        <div className="seccion">
          <p className="sobre-mi"><span className="yosoy">Soy Dilson Masa. </span>Pesarrollador full Stack, con mas de un año de experiencia,
          en desarrollo backend y frontend junior, soy una persona proactiva y creativa. 
          Me gusta trabajar en equipo y dar soluciones para optimizar las tareas. Capacitado en gestion de proyectos.</p>
    
          <div className="fila">
          <div className="col columna-i">
            <h3>Datos Personales</h3>
            <ul>
              <li><strong>Cumpleaños</strong>07-05-2024</li>
              <li><strong>Teléfono</strong>+57 305 2119573</li>
              <li><strong>Email</strong> [tu ya le pones] </li>
              <li><strong>Website</strong>www.mi-portafolio.com</li>
              <li><strong>Direccion</strong> [tu ya le pones] </li>
              <li><strong>Cargo</strong>freelance</li>
            </ul>
          </div>
          <div className="col columna-d">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="intereses">
                <span>JUEGOS</span>
              </div>
              <div className="intereses">
                <span>MUSICA</span>
              </div>
              <div className="intereses">
                <span>VIAJAR</span>
              </div>
              <div className="intereses">
                <span>VIDA SOC.</span>
              </div>
              <div className="intereses">
                <span>DEPORTE</span>
              </div>
              <div className="intereses">
                <span>LIBROS</span>
              </div>
              <div className="intereses">
                <span>AUTOS</span>
              </div>
              <div className="intereses">
                <span>TECNOLOGIA</span>
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
