

import { Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import Proyectos from './Components/Proyectos/Proyectos';
import Habilidades from './Components/Habilidades/Habilidades';
import '@fortawesome/fontawesome-free/css/all.min.css';





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        
      </Routes>
    </div>
  );
}

export default App;
