import NavBar from "../NavBar/NavBar";
import "../Habilidades/Habilidades.css"

const Habilidades = () => {
    return ( 
        <div>
             {/* <NavBar /> */}

             <div className="habilidades">

                <a href="#" className="iconos"><i className="fa-brands fa-react"></i></a>
                <a href="#" className="iconos"><i className="fa-brands fa-html5"></i></a>
                <a href="#" className="iconos"><i className="fa-brands fa-js"></i></a>
                <a href="#" className="iconos"><i className="fa-brands fa-css3"></i></a>
                <a href="#" className="iconos"><i className="fa-brands fa-node"></i></a>
                <a href="#" className="iconos"><i className="fa-solid fa-database"></i> </a>
                

            </div>
        </div>
     );
}
 
export default Habilidades;