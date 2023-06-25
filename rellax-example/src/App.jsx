import { useEffect } from 'react'
import Rellax from "rellax";
import bigPlanet from "/parallax-space-big-planet.png"
import planets from "/parallax-space-far-planets.png"
import ringPlanet from "/parallax-space-ring-planet.png"
import './App.css'

function App() {
  // Using useEffect to create classes for parallex effect
  useEffect(() => {
    // Parallex effect for the text
    new Rellax(".titleRellax", {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      zindex: 3
    });

    // Parallex effect for the far planets
    new Rellax(".planetsRellax", {
      speed: -8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      zindex: 0
    });

    // Parallex effect for the planet with ring
    new Rellax(".ringPlanetRellax", {
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    // Parallex effect for the foreground planet
    new Rellax(".bigPlanetRellax", {
      speed: -3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className="App">

      {/* Creating elements from the imported images with parallex effect */}
      <div className='planets'>
        <img className='planetsRellax' src={planets} height={400} />
      </div>

      <div className='ringPlanet'>
        <img className="ringPlanetRellax" src={ringPlanet} height={200}/>
      </div>

      <div className='bigPlanet'>
        <img className="bigPlanetRellax" src={bigPlanet} height={300}/>
      </div>

      {/* The texts */}
      <div className='title'>
        <h1 class="titleRellax">Welcome to Space</h1> 
        <p class="titleRellax">This is a demo of using Rellax to achieve parallax scrolling</p>
      </div>
      
      <div>
        <h1 className='titleRellax'>Parallax Scrolling</h1> 
        <p className='titleRellax'>Rellax allows us to have elements that move at different speeds as we scroll</p>
      </div>
      
      <div className='rectangle'>
        <p >Material obtained from ansimuz on opengameart.org</p>
      </div>

    </div>
  )
}

export default App
