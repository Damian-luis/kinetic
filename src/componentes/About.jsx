import React from "react";
import "./About.css"
export default function About(){
    return (<div className="about">
        <div className="somos">
            <h1>SOMOS</h1><br/>
            <p>Somos una comunidad creativa llevando endorfinas a cada rincón del mundo. Creemos que las historias de éxito son un medio para alcanzar la felicidad y somos el medio que impulsa a marcas excepcionales a superar sus metas. Nuestro equipo está conformado por 50 creativos multidisciplinarios entre los 18 y 38 años, con un orgulloso 60% de mujeres.</p>
        </div>
        <div className="video"><p>Espacio para logos/imagen/video</p></div>
        <div className="first-section">
        <img src={require("../assets/about1.jpg")} className="card"/>
        <p>Nuestra Historia<br/>
ēndor nació de la búsqueda de la innovación, la experimentación en diferentes áreas creativas y la misión de provocar felicidad.

Hemos creado más de 900 marcas de todas partes del mundo.
Hemos generado más de 700 minutos de video, más de 25 millones de views en redes sociales e incontables endorfinas en clientes y colaboradores.</p>
        </div>
        <div className="second-section">
        <img src={require("../assets/about2.jpg")} className="card"/>
        <p>Cooltura<br/>
Todo lo que conformamos, desde nuestro equipo e instalaciones, hasta nuestras entregas y resultados, está creado para despertar endorfinas.

Nuestra cooltura es la libertad creativa de experimentar, la confianza de expresarnos como somos y la apertura para hacer de nuestros clientes, amigos.</p>
        </div>
        <div className="our-filosofy">
        Nuestra Filosofía<br/>
Become Better® se basa en pasar del decir al hacer y del plan a la acción. Sabemos que todo en este mundo comienza por atreverse a hacer. Lo que de verdad deja huella es soltar los temores, emprender proyectos y apoyarnos para salir adelante. Nuestro más grande orgullo es convertir el “algún día lo haré” en un “me encanta hacerlo”.
        </div>
    </div>)
}