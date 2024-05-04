import "./Home.css"



const Home = () => {
  return (
    
    <div className="home">
      
      
        <h1 className="title">Bienvenidos a mi portafolio wed </h1>
        <div className="card">
          <div className="circulo-imagen">
            <img src="./src/assets/Dilson.jpg" className="foto" alt="Dilson Masa Contreras"/>
          </div>
          <h2>Dilson Masa Contreras</h2>
          <br />
          <p className="status">Desarrollador de Software</p>

          <a href="/inicio" className="ingresarBtn">Ingresar</a>
        </div>

    </div>


    


  )
}

export default Home