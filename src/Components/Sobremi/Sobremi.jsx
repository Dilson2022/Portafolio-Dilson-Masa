import "./Sobremi.css";
import NavBar from "../NavBar/NavBar"



function Sobremi() {
  return (
    <div className="container">
      {/* <NavBar /> */}

      <div className="Padre">
        <h1 className="nombre">Sobre mí</h1>
        <div className="seccion">
          <p className="sobre-mi"><span className="yosoy">Soy Dilson Masa, </span>Soy un desarrollador Full Stack con más de un año de experiencia en el desarrollo de aplicaciones tanto en backend como en frontend. Mi enfoque principal es la creación de soluciones web eficientes y escalables. Tengo experiencia en la gestión de proyectos y soy una persona proactiva y creativa, siempre buscando maneras de optimizar tareas y procesos.</p>
          
          <ul className="wordpres">
            <li><span>Frontend:</span> HTML, CSS, JavaScript, React.</li>
            <li><span>Backend:</span> Node.js, Express, bases de datos postgreSql y Mysql.</li>
            <li><span>WordPress:</span> Desarrollo y personalización de temas y plugins, optimización de rendimiento y seguridad.</li>
          </ul>

          <p className="sobre-mi">Estoy siempre en la búsqueda de nuevos retos y oportunidades para aprender y crecer profesionalmente. Mi objetivo es seguir desarrollándome en el campo del desarrollo web y contribuir de manera significativa a los proyectos en los que participo.</p>
            
    
          <div className="fila">
          <div className="col columna-i">
            <h3 className="dato-personal">Datos Personales</h3>
              
            <ul className="info">
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
