import NavBar from "../NavBar/NavBar";
import "../Habilidades/Habilidades.css";

const Habilidades = () => {
  return (
    <div>
      {/* <NavBar /> */}

      <div className="habilidades">
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:react"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:html-5"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:javascript"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:css-3"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:mysql"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:postgresql"></span>
        </a>
        <a href="#" class="iconos">
          <span class="iconify" data-icon="logos:material-ui"></span>
        </a>
      </div>
    </div>
  );
};

export default Habilidades;
