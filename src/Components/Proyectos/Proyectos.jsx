//import NavBar from "../NavBar/NavBar";
import "./Proyectos.css"

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      titulo: "API DE RICKY AND MORTY",
      descripcion: "Una aplicación web desarrollada con React.js y Node.js, con las siguiestes tecnologias:",
      tecnologias: [
        "React.js",
        "Node.js",
        "Javascript",
        "CSS",
        "Html",
        "Express",
        "PostgreSql",
      ],
      enlace: "https://github.com/Dilson2022/RICK_AND_MORTY",
      imagen: "/images/rick-y-morty.avif",
    },
    {
      id: 2,
      titulo: "API DE POKEMONES",
      descripcion: "Una aplicación web desarrollada con React.js y Node.js, con las siguiestes tecnologias:",
      tecnologias: [
        "React.js",
        "Node.js",
        "Javascript",
        "CSS",
        "Html",
        "Express",
        "PostgreSql",
      ],
      enlace: "https://github.com/Dilson2022/PI-Pokemon-Dilson-Masa",
      imagen: "/images/pokemon.jpg",
    },
    {
      id: 3,
      titulo: "API DE PAISES",
      descripcion: "Una aplicación web desarrollada con React.js y Node.js, con las siguiestes tecnologias:",
      tecnologias: [
        "React.js",
        "Node.js",
        "Javascript",
        "CSS",
        "Html",
        "Express",
        "PostgreSql",
      ],
      enlace: "https://github.com/Dilson2022/PI-CountryDILSON-MASA",
      imagen: "/images/paises.png",
    },
    {
      id: 4,
      titulo: "Pagina de peliculas",
      descripcion: "Una aplicación web desarrollada con React.js con las siguiestes tecnologias:",
      tecnologias: [
        "React.js",
        "Javascript",
        "CSS",
        "Html",
      ],
      enlace: "https://github.com/Dilson2022/pagina-de-peliculas-con-react/tree/master/srchttps://github.com/Dilson2022/pagina-de-peliculas-con-react",
      imagen: "/images/movie.jpg",
    },
        
        
        
    
  ];

  return (
    <div>
     {/* <NavBar /> */}
      <section>
        <div className="container-padre">
          <div className="galeria">
            {proyectosData.map((elementos) => (
              
              <div key={elementos.id} className="proyectoCard">
                  <a href={elementos.enlace} target="blank" className="enlace">
                    <h3 className="titulo">{elementos.titulo} </h3>
                    <img src={elementos.imagen} className="imagen" alt="" />
                    <div className="overlay">
                      <p className="parrafo1">{elementos.descripcion}</p>
                      <p className="parrafo2">{elementos.tecnologias.join(", ")} </p>
                    </div>
                  </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
