import React from "react";
import "./info.css"
import linkedin from "../../img/perfilPer/linkedin.svg"
import github from "../../img/perfilPer/github.svg"
import imgContactos from "../../img/otros/contactoImg.png"
import js from "../../img/tecnologias/js.png"
import html from "../../img/tecnologias/html5.png"
import css from "../../img/tecnologias/css3.png"
import react from "../../img/tecnologias/react.png"
import sobreMi from "../../img/otros/sobreMi.png"

export default function info() {
    return(
        <div className="z">
            <div>
                <h5 class="accordion-header" id="heading3">
                    <button className="botonI collapsed" data-bs-toggle="collapse" data-bs-target="#sobreMi" aria-expanded="true" aria-controls="sobreMi">Sobre Mi...</button>
                </h5>
                
                <h5 class="accordion-header" id="heading2">
                    <button className="botonI collapsed" data-bs-toggle="collapse" data-bs-target="#contactos" aria-expanded="false" aria-controls="contactos">Contactos</button>
                </h5>
                
                
                <h5 class="accordion-header" id="heading1">
                    <button className="botonI collapsed" data-bs-toggle="collapse" data-bs-target="#tecnUsadas" aria-expanded="false" aria-controls="tecnUsadas">Tecnologias usadas</button>
                </h5>
            </div>

            <br />
            <br />

            <div class="accordion" id="accordionE">
                {/* ----------------------------------------------------------- */}
                <div id="sobreMi" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionE">
                    <div class="accordion-body">
                        <h4>Sobre mi:</h4>
                        <p>Soy una persona que esta comenzando su carrera como <strong>desarrollador Full Stack Developer</strong>.
                        Creo que la capacidad de <strong>superación</strong> es una de las cualidades más importantes para cualquier trabajador. Es por eso me considero capaz de <strong>mejorar y aprender</strong> a diario, de cada una de las oportunidades laborales que se me presenten.
                        Busco un empleo que confié en mi capacidad y me de la posibilidades de <strong>crecer</strong> profesionalmente.</p>
                        <img src={sobreMi} alt="sobre Mi" className="dendenM"/>
                        <br />
                        <img src="https://user-images.githubusercontent.com/89053178/217646016-763a13d8-0f9d-475c-9336-8e86b1bfd010.png" alt="home" className="emojis" />Vivo en <strong>Soacha</strong>,<strong> Cundinamarca</strong>,<strong> Colombia</strong>
                        <br />
                        <img src="https://user-images.githubusercontent.com/89053178/217645418-b5841b1e-a4a2-422d-9903-bcf61861abcc.png" alt="♥" className="emojis"/>Soltero
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------- */}

                <div id="contactos" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionE">
                    <div class="accordion-body">
                        <h4>Contactame:</h4>
                        <br />
                        <img src="https://user-images.githubusercontent.com/89053178/217647234-2b9b6f71-2834-4bcf-b69b-72c2d83225c1.png" alt="telefono" className="emojis"/> +57 310 884 09 44
                        <img src={imgContactos} alt="Den den mushi" className="dendenM" />
                        <br />
                        <br />
                        <img src="https://user-images.githubusercontent.com/89053178/217648348-fd71047f-891c-4e67-9f83-8a94a2d2e29b.png" alt="" className="emojis"/> jhonmieles.321@gmail.com
                        <br />
                        <br />
                        <a href="https://www.linkedin.com/in/yan-franco-mieles-genez-793a261b5/"><img src={linkedin} alt="" className="ContR"/></a> LinkedIn
                        <br />
                        <br />
                        <a href="https://github.com/yan-franco"><img src={github} alt="" className="ContR"/></a> GitHub
                        
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------- */}

                <div id="tecnUsadas" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionE">
                    <div class="accordion-body">
                        <h4>Tecnologías usadas en este proyecto:</h4>
                        <img src={js} alt="javaScript" className="tec"/>
                        <img src={html} alt="html" className="tec"/>
                        <img src={css} alt="css" className="tec"/>
                        <img src={react} alt="react" className="tec"/>
                    </div>
                </div>

            </div>
        </div>
        
    )
}