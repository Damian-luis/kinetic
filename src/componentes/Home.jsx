import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as logo1 } from "../assets/1.svg";
import { default as logo2 } from "../assets/2.svg";
import { default as logo3 } from "../assets/3.svg";
import { default as logo4 } from "../assets/4.svg";
import { default as logo5 } from "../assets/5.svg";
export default function Home(){
    return (<div className="App">
    <div className="principal">
      <h1>AGENCIA DE PUBLICIDAD EN ARGENTINA</h1>
    </div>
    <div className="imagenes">
    <img src={logo1} className="gradient1"/>
    <img src={logo2} className="gradient1"/>
    <img src={logo3} className="gradient1"/>
    <img src={logo4} className="gradient1"/>
    <img src={logo5} className="gradient1"/>
    </div>
    <div className="video"><h1>Lugar para algun video</h1></div>
    <div className="cards">
      <div className="cards-column">
        <img src={require("../assets/1.png")} className="card"/>
        <img src={require("../assets/2.png")} className="card"/>
        <img src={require("../assets/3.png")} className="card"/>
      </div>
      <div className="cards-column">
        <img src={require("../assets/4.png")} className="card"/>
        <img src={require("../assets/5.png")} className="card"/>
        <img src={require("../assets/6.png")} className="card"/>
      </div>
      <div className="cards-column">
        <img src={require("../assets/7.png")} className="card"/>
        <img src={require("../assets/8.png")} className="card"/>
        <img src={require("../assets/9.png")} className="card"/>
      </div>
    </div>
    <div className="button">
    <a href="#" class="myButton">VER TODOS</a>
    </div>
    <div className="some-text">
      <h4>THIS IS</h4> <h1>WHAT WE DO</h1> <h4>EVERYDAY</h4><br/>
      <p>Somos una agencia de publicidad creativa, especializada en cuatro disciplinas principales. Todo lo que tu marca necesita, lo hacemos. Y lo hacemos bien.</p>
    </div>
    <div className="cards-text">
      <div className="card-text">
        <h3>BRANDING​</h3>
        <p>Sabemos que una marca es mucho más que su imagen. Creamos historias, trazamos el camino para el nacimiento y la evolución de ideas y las aterrizamos en soluciones gráficas que capturan la atención de la audiencia.</p>
        <button>CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3>MARKETING</h3>
        <p>Nos enfocamos en crear valor para tus clientes, cultivar a la comunidad para las empresas y elevar su reconocimiento de marca a través de metodologías enfocadas a estrategias digitales, creación de contenido y campañas creativas.</p>
        <button>CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3>MULTIMEDIA</h3>
        <p>Utilizamos diferentes canales de expresión, desde texto, imágenes, ilustración, animación, edición de sonido y video, cualquier soporte necesario para presentar y comunicar tu marca de la mejor manera.</p>
        <button>CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3>WEB</h3>
        <p>Creamos sitios web atractivos y funcionales combinando un moderno diseño de interfaz de usuario (UI) con una amigable experiencia de usuario (UX),optimizando su posicionamiento en Google.</p>
        <button>CONOCE MAS</button>
      </div>
    </div>
    <div className="video-mapa">
      <h1>Lugar para video del mapa</h1>
    </div>
    <div className="the-team">
      <h1>El equipo</h1><br/>
      <p>
Somos una comunidad creativa llevando endorfinas a cada rincón del mundo. Creemos que las historias de éxito son un medio para alcanzar la felicidad y somos el medio que impulsa a marcas excepcionales a superar sus metas.
Nuestro equipo está conformado por más de 50 creativos multidisciplinarios entre los 18 y 38 años, con un orgulloso 60% de mujeres</p>
    </div>
    <div className="foto-grupal">
      Aqui va una foto enorme
    </div>
    <div className="random-text">
      <h1>¿QUIERES SER UN ENDORINO?</h1><br/>
      <a href="#" class="myButton">SI QUIERO</a>
    </div>
    <div className="cards-question">
      <div className="card-question">
        <p>Frank Moreno, Destacado, Marketing, Publicidad</p>
        <h3>Agencias de Publicidad en México</h3>
      </div>
      <div className="card-question">
        <p>Frank Moreno, Destacado, Marketing, Social Media</p>
        <h3>¿Qué es un Influencer y cuál es su función?</h3>
      </div>
      <div className="card-question">
        <p>Everardo Luna, Destacado, Marketing, Publicidad</p>
        <h3>9 tipos de agencias de publicidad</h3>
      </div>
      <a href="#" class="myButton">VER MAS</a>
    </div>
    
  </div>)
}