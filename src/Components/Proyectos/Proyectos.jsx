import NavBar from "../NavBar/NavBar";
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
    },
    
  ];

  return (
    <div>
     {/* <NavBar /> */}
      <section>
        <div className="container">
        


          {proyectosData.map((elementos) => (
            <div key={elementos.id} className="proyectoCard">
              <h3 className="titulo">{elementos.titulo} </h3>
              <p className="parrafo1">{elementos.descripcion}</p>
              <p className="parrafo2">{elementos.tecnologias.join(", ")} </p>
              <a href={elementos.enlace} target="blank" className="enlace">
                Ver Proyectos
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
