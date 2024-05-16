import React from "react";
import "./sobremi.css"

import imgAcercaDEMi from "../../img/acercademi.png"
import imgcerti from "../../img/imgcerti.jpg"
import icocasa from "../../img/icocasa.ico"

import html from "../../img/tecnologias/html5.png"
import css from "../../img/tecnologias/css3.png"
import js from "../../img/tecnologias/js.png"
import react from "../../img/tecnologias/react.png"
import redux from "../../img/tecnologias/redux.png"
import bootstrao from "../../img/tecnologias/bootstrap.png"
import node from "../../img/tecnologias/nodejs.png"
import express from "../../img/tecnologias/expressroute.png"
import postgresql from "../../img/tecnologias/postgresql.png"


const sobremi = () => {
    return (
        <div>
            <table className="tabla">
                <tr>
                    <td className="f1" colSpan="2">
                        <a href="/"><img src={icocasa} alt="casa" /></a>
                    </td>
                </tr>

                <tr>
                    <td className="p2-f2" colSpan="2">
                        <h2>¿A quién tengo yo en los cielos sino a ti? Y fuera de ti, nada deseo en la tierra. <br /> Salmos 73: 25</h2>
                    </td>
                </tr>

                <tr>
                    <td className="p2-f3" colSpan="2">
                        <img src={imgAcercaDEMi} alt="Acerca de Mi" className="imgacercademi" />

                        <h2>Acerca de mi</h2>
                        <h5>Como aspirante a <b>Desarrollador Full Stack</b>, valoro la capacidad de <b>superación</b> como una habilidad fundamental en cualquier trayectoria profesional. Estoy comprometido a <b>mejorar y aprender constantemente</b>, aprovechando cada oportunidad laboral como un medio para mi desarrollo. <b>Busco un empleo</b> que reconozca mi potencial y me brinde el espacio para crecer profesionalmente.</h5>
                    </td>
                </tr>

                <tr>
                    <td className="p2-f4" colSpan="2">
                        <h2>Tecnologías</h2> <br />
                        <h4>Front-end</h4>

                        <img src={html} alt="HTML" />
                        <img src={css} alt="CSS" />
                        <img src={js} alt="JAVASCRIPT" />
                        <img src={react} alt="REACT" />
                        <img src={redux} alt="REDUX" />
                        <img src={bootstrao} alt="BOOTSTRAP" />
                        <br />
                        <br />
                        <h4>Back-end</h4>

                        <img src={node} alt="NODE" />
                        <img src={express} alt="EXPRESS" />
                        <br />
                        <br />
                        <h4>Base de datos</h4>

                        <img src={postgresql} alt="POSTSGRESQL" />

                    </td>
                </tr>

                <tr>
                    <td className="p2-f5" colSpan="2">
                        <img src={imgcerti} alt="ule" />

                        <h2>Certificaciones</h2> <br />

                        <a href="https://github.com/yan-franco/yan-franco/files/15330206/programacion.de.software.Titulo.pdf"><h4>- Tecnico en Programacion de Software</h4></a>

                        <a href="https://github.com/yan-franco/yan-franco/files/15330218/certificaion.henry.pdf"><h4>- Full Stack Developer</h4></a>

                        <a href="https://skillshop.exceedlms.com/student/award/gpPxRdLY7BXvZacM3wQEAqCX"><h4>- Cloud Computing</h4></a>

                    </td>
                </tr>

                <tr className="f4">
                    <td className="f4c1">
                        <h1 className="titulofinal">¿SALIR?</h1>
                        <h5>¡Espero que lo hayas pasado bien! Envía un mensaje y hablamos de cualquier cosa. <br /><br />
                            P.D: 
                            ¡También estoy abierto a trabajos independientes!</h5>
                    </td>
                    <td className="f4c2">
                        <a href="mailto:jhonmieles.321@gmail.com"><button className="button1"></button></a>
                    </td>
                    
                </tr>

            </table>
        </div>
    )
}

export default sobremi;