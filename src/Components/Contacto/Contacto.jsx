import React from "react";
import "./Contacto.css";
const Contacto = () => {
  return (
    <div className="contact_form"> 
        
      
        <form  action="https://formsubmit.co/dilsonmasacontreras82@gmail.com" method="POST">       

            
<p>
  <label for="nombre" class="colocar_nombre">Nombre
    <span class="obligatorio">*</span>
  </label>
    <input type="text" name="nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
</p>

<p>
  <label for="email" class="colocar_email">Email
    <span class="obligatorio">*</span>
  </label>
    <input type="email" name="email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
</p>

<p>
  <label for="telefone" class="colocar_telefono">Teléfono
  </label>
    <input type="tel" name="telefono" id="telefono" placeholder="Escribe tu teléfono"/>
</p>    


<p>
  <label for="asunto" class="colocar_asunto">Asunto
    <span class="obligatorio">*</span>
  </label>
    <input type="text" name="asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
</p>    

<p>
  <label for="mensaje" class="colocar_mensaje">Mensaje
    <span class="obligatorio">*</span>
  </label>                     
                    <textarea name="mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                </p>                    

<input type="submit" name="formulario" id="enviar" value="Enviar"  className="btn"/>

<input type="hidden" name="_next" value="http://localhost:5173/contacto"/>
 <input type="hidden" name="_captcha" value="false"/>

<p class="aviso">
  <span class="obligatorio"> * </span>los campos son obligatorios.
</p>          

</form>
      
    </div>
  );
};

export default Contacto;
