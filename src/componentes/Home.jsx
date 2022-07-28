import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as logo1 } from "../assets/1.svg";
import { default as logo2 } from "../assets/2.svg";
import { default as logo3 } from "../assets/3.svg";
import { default as logo4 } from "../assets/4.svg";
import { default as logo5 } from "../assets/5.svg";
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Home(){

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (<div className="App">
    <div className="principal" data-aos="fade-down" data-aos-duration="2000">
      <h1>AGENCIA DE PUBLICIDAD EN ARGENTINA</h1>
    </div>
    <div className="imagenes" data-aos="zoom-in">
    <img src={logo1} className="gradient1"/>
    <img src={logo2} className="gradient1"/>
    <img src={logo3} className="gradient1"/>
    <img src={logo4} className="gradient1"/>
    <img src={logo5} className="gradient1"/>
    </div>
    <div className="video"><h1>Lugar para algun video</h1></div>
    <div className="cards" data-aos="fade-up" data-aos-duration="3000">
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
    <div className="some-text" data-aos="zoom-out">
        <div className="what-we-do"><h4>THIS IS</h4> <span className="what">WHAT WE DO </span><h4>EVERYDAY</h4></div>
        <div className="somos">
        <p>Somos una agencia de publicidad creativa, especializada en cuatro disciplinas principales. Todo lo que tu marca necesita, lo hacemos. Y lo hacemos bien.</p>
        </div>
    </div>
    <div className="cards-text" data-aos="fade-up">
      <div className="card-text">
        <h3 className="ancho">BRANDING​</h3>
        <p>Sabemos que una marca es mucho más que su imagen. Creamos historias, trazamos el camino para el nacimiento y la evolución de ideas y las aterrizamos en soluciones gráficas que capturan la atención de la audiencia.</p>
        <button className="myButton">CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3 className="ancho">MARKETING</h3>
        <p>Nos enfocamos en crear valor para tus clientes, cultivar a la comunidad para las empresas y elevar su reconocimiento de marca a través de metodologías enfocadas a estrategias digitales, creación de contenido y campañas creativas.</p>
        <button className="myButton">CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3 className="ancho">MULTIMEDIA</h3>
        <p>Utilizamos diferentes canales de expresión, desde texto, imágenes, ilustración, animación, edición de sonido y video, cualquier soporte necesario para presentar y comunicar tu marca de la mejor manera.</p>
        <button className="myButton">CONOCE MAS</button>
      </div>
      <div className="card-text">
        <h3 className="ancho">WEB</h3>
        <p>Creamos sitios web atractivos y funcionales combinando un moderno diseño de interfaz de usuario (UI) con una amigable experiencia de usuario (UX),optimizando su posicionamiento en Google.</p>
        <button className="myButton">CONOCE MAS</button>
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
    <div className="random-text" data-aos="fade-up">
      <h1>¿QUIERES SER UN ENDORINO?</h1><br/>
      <a href="#" class="myButton">SI QUIERO</a>
    </div>
    <div className="cards-question">
      <div className="card-question" data-aos="fade-right">
        <p>Frank Moreno, Destacado, Marketing, Publicidad</p>
        <h3 className="ancho">Agencias de Publicidad en México</h3>
      </div>
      <div className="card-question">
        <p>Frank Moreno, Destacado, Marketing, Social Media</p>
        <h3 className="ancho">¿Qué es un Influencer y cuál es su función?</h3>
      </div>
      <div className="card-question" data-aos="fade-left">
        <p>Everardo Luna, Destacado, Marketing, Publicidad</p>
        <h3 className="ancho">9 tipos de agencias de publicidad</h3>
      </div>
    </div>
    <div className="button">
    <a href="#" class="myButton">VER MAS</a>
    </div>
    
  </div>)
}