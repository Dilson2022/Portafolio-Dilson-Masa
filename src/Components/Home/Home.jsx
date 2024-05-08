import "./Home.css"

const Home = () => {
  return (
      <div className="home">
        <div className="card">
          <div className="circulo-imagen">
            <img src="./src/assets/images/Dilson.jpg" className="foto" alt="Dilson Masa Contreras"/>
          </div>
          
          <h2>Dilson Masa Contreras</h2>
          <br />
          <p className="status">Desarrollador de Software</p>
          <a href="/sobremi" className="ingresarBtn">Ingresar</a>
        </div>
      </div>
  )
}

export default Home