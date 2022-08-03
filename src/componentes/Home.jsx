import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
export default function Home(){

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (<div className="App">
    <div className="principal" data-aos="fade-down" data-aos-duration="2000" href="home" >
      <h1>AGENCIA DE PUBLICIDAD</h1>
      <div className="portada">
      <img src={require("../assets/logo-portada.png")} className="portada"/>
      </div>
    </div>
    



    <div className="video"><h1>Algunos de nuestros trabajos de branding y marketing digital</h1></div>
    <div className="cards" data-aos="fade-up" data-aos-duration="1000">
      
        
        <img src={require("../assets/1.png")} className="card"/>
        <img src={require("../assets/2.png")} className="card"/>
        <img src={require("../assets/3.png")} className="card"/>
        <img src={require("../assets/4.png")} className="card"/>
        <img src={require("../assets/5.png")} className="card"/>
        <img src={require("../assets/6.png")} className="card"/>
        <img src={require("../assets/7.png")} className="card"/>
        <img src={require("../assets/8.png")} className="card"/>
        <img src={require("../assets/9.png")} className="card"/>
      
    </div>
    {/*<div className="button">
    <Link to="what-we-do" className="myButton">VER TODOS</Link>
    </div>*/}
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
        
      </div>
      <div className="card-text">
        <h3 className="ancho">MARKETING</h3>
        <p>Nos enfocamos en crear valor para tus clientes, cultivar a la comunidad para las empresas y elevar su reconocimiento de marca a través de metodologías enfocadas a estrategias digitales, creación de contenido y campañas creativas.</p>
        
      </div>
      <div className="card-text">
        <h3 className="ancho">MULTIMEDIA</h3>
        <p>Utilizamos diferentes canales de expresión, desde texto, imágenes, ilustración, animación, edición de sonido y video, cualquier soporte necesario para presentar y comunicar tu marca de la mejor manera.</p>
        
      </div>
      <div className="card-text">
        <h3 className="ancho">WEB</h3>
        <p>Creamos sitios web atractivos y funcionales combinando un moderno diseño de interfaz de usuario (UI) con una amigable experiencia de usuario (UX),optimizando su posicionamiento en Google.</p>
        
      </div>
    </div>
    {/* 
    <div className="video-mapa">
      <h1>Lugar para video del mapa</h1>
    </div>
    */}

<div className="video"><h1>Diseñamos proyectos para:</h1></div>

<div className="clientes" data-aos="zoom-in">
  {/*  
        <img src={require("../assets/logos/5.png")} className="logo"/>
        <img src={require("../assets/logos/6.png")} className="logo"/>
        
        <img src={require("../assets/logos/9.png")} className="logo"/>
        <img src={require("../assets/logos/10.png")} className="logo"/>*/}
        
        
       <img src={require("../assets/logos/advanced.png")} className="logob"/>
       <img src={require("../assets/logos/7.png")} className="logo"/>
        <img src={require("../assets/logos/genesis.png")} className="logob"/>
        <img src={require("../assets/logos/4.png")} className="logo"/>
        <img src={require("../assets/logos/mati.png")} className="logob"/>
    </div>
    

    <div className="the-team" id="the-team">
      <div className="foto-div">
      <img src={require("../assets/smart-business.jpg")} className="foto"/>
      </div>

      <div className="the-team-text">
      <h1>Smart Business</h1><br/>
      <p>No somos una agencia de marketing digital más: Somos el escalón para saltar al siguiente nivel con tu proyecto.<br/>
      Talento, innovación, experiencia y creatividad son nuestras bases. Nos encanta la tecnología, sacarle todo el jugo al dato
      y trabajar de forma incansable en lo que tu marca necesita. Nada de adornos: Nuestra apuesta profesional va directo al grano.
      Aqui no existen las fórmulas mágicas, solo el trabajo duro de cada dia y una metodología concreta y especializada.
      </p>
      <a href="https://wa.me/5493517697475" className="damos">¿Damos el paso para ser mas SMART?</a>
      {/* 
      <div className="wpp">
      <a href="https://wa.me/5493517697475" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a></div>*/}
      </div> 
      

    </div>{/*
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
      <div className="card-question" >
        <p>Everardo Luna, Destacado, Marketing, Publicidad</p>
        <h3 className="ancho">9 tipos de agencias de publicidad</h3>
      </div>
    </div>
    <div className="button">
    <a href="#" class="myButton">VER MAS</a>
  </div>*/}
    
  </div>)
}