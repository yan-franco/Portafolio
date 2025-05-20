import React from "react";
import "./inicio.css";
import imgInicioPortfolio from "../../img/imgInicioPortfolio.webp";
import iconoGithub from "../../img/github.png";
import iconoWeb from "../../img/iconoWeb.png";

import iconoGitHubAbajo from "../../img/github-142-svgrepo-com.png";
import iconoLinkedin from "../../img/linkedin-svgrepo-com.png";

import imgCartelManhwa from "../../img/CARTEL_DE_MANHWAS_2.webp";
import imgYConverplus from "../../img/imgProyectCoverplus.png";
import imgGeoProduct from "../../img/geoproducto.gif";


const inicio = () => {
    const words = ["Mi ", "nombre ", "es ", "Yan ", "Franco ", "Mieles", ", ", "soy ", "una ", "persona ", "que ", "esta ", "comenzando ", "su ", "carrera ", "como ", "Desarrollador ", "Back-end", ". ", "Creo ", "que ", "la ", "capacidad ", "de ", "superación ", "es ", "una ", "de ", "las ", "cualidades ", "más ", "importantes ", "para ", "cualquier ", "trabajador", ". ", "Es ", "por ", "eso ", "que ", "me ", "considero ", "capaz ", "de ", "mejorar ", "y ", "aprender ", "a ", "diario", ", ", "de ", "cada ", "una ", "de ", "las ", "oportunidades ", "laborales ", "que ", "se ", "me ", "presenten", ". ", "Busco ", "un ", "empleo ", "que ", "confié ", "en ", "mi ", "capacidad ", "y ", "me ", "dé ", "las  ", "posibilidades ", "de ", "crecer ", "profesionalmente."];
    return (

        <div>
            <div className="enca">
                <section class="curvedArriba"></section>

                <img src={imgInicioPortfolio} alt="Software" />

                <svg viewBox="0 0 1320 300">
                    <text x="35%" y="20%" text-anchor="middle" fill="#038b86">
                        BIENVENIDO!
                    </text>
                </svg>
                <p className="animated-paragraph">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="word"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {word}
                        </span>
                    ))}


                </p>
            </div> <br /><br />

            <div className="content">
                <div className="tag-list">
                    <div class="fade fade-left"></div>
                    <div className="inner">
                        <div className="tag"><span>#</span>HTML</div>
                        <div className="tag"><span>#</span>CSS</div>
                        <div className="tag"><span>#</span>JavaScript</div>
                        <div className="tag"><span>#</span>React</div>
                        <div className="tag"><span>#</span>Redux</div>
                        <div className="tag"><span>#</span>Node</div>
                        <div className="tag"><span>#</span>Express</div>
                        <div className="tag"><span>#</span>PostgreSQL</div>
                        <div className="tag"><span>#</span>HTML</div>
                        <div className="tag"><span>#</span>CSS</div>
                        <div className="tag"><span>#</span>JavaScript</div>
                        <div className="tag"><span>#</span>React</div>
                        <div className="tag"><span>#</span>Redux</div>
                        <div className="tag"><span>#</span>Node</div>
                        <div className="tag"><span>#</span>Express</div>
                        <div className="tag"><span>#</span>PostgreSQL</div>
                        <div className="tag"><span>#</span>HTML</div>
                        <div className="tag"><span>#</span>CSS</div>
                        <div className="tag"><span>#</span>JavaScript</div>
                        <div className="tag"><span>#</span>React</div>
                        <div className="tag"><span>#</span>Redux</div>
                        <div className="tag"><span>#</span>Node</div>
                        <div className="tag"><span>#</span>Express</div>
                        <div className="tag"><span>#</span>PostgreSQL</div>
                        <div className="tag"><span>#</span>HTML</div>
                        <div className="tag"><span>#</span>CSS</div>
                        <div className="tag"><span>#</span>JavaScript</div>
                        <div className="tag"><span>#</span>React</div>
                        <div className="tag"><span>#</span>Redux</div>
                        <div className="tag"><span>#</span>Node</div>
                        <div className="tag"><span>#</span>Express</div>
                        <div className="tag"><span>#</span>PostgreSQL</div>
                    </div>
                    <div class="fade fade-right"></div>
                </div>

                <br />
                <h1>Mi trabajo</h1>
                <p>Una colección de proyectos en los que he trabajado.</p>

                <div class="card-container">
                    <div class="card">
                        <img src={imgCartelManhwa} alt="Cartel Manhwa" className="portadaCard" />
                        <h3>Cartel Manhwa</h3>
                        <p>
                            Página web de lectura de manhwas con React, Node.js y PostgreSQL, que incluye tendencias, notificaciones interactivas y un diseño responsivo.
                        </p>
                        <div class="icons">
                            <a href="https://carteldemanhwas.net/"><span><img src={iconoWeb} alt="Web" /></span></a>
                            {/* <a href="/"><span><img src={iconoGithub} alt="GitHub" /></span></a> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src={imgYConverplus} alt="Y ComvertiPlus" className="portadaCard" />
                            <h3>CombertiPlus</h3>
                            <p>
                                Página web de Conversion de de Unidades con React.
                            </p>
                            <div class="icons">
                                <a href="/https://y-converti-plus.vercel.app/"><span><img src={iconoWeb} alt="Web" /></span></a>
                            <a href="https://github.com/yan-franco/YConvertiPlus"><span><img src={iconoGithub} alt="GitHub" /></span></a>
                            </div>
                    </div>
                    <div class="card">
                        <img src={imgGeoProduct} alt="GeoProducto" className="portadaCard" />
                            <h3>GeoProducto</h3>
                            <p>
                                Página web de Localización de productos Escasos en el google map.
                            </p>
                            <div class="icons">
                                <a href="https://geoproducto.vercel.app/"><span><img src={iconoWeb} alt="Web" /></span></a>
                            <a href="https://github.com/yan-franco/webHappyBirthday"><span><img src={iconoGithub} alt="GitHub" /></span></a>
                            </div>
                    </div>

                </div>
            </div>



            <section class="curvedAbajo"></section>

            <div className="piecero">
                <h5>© 2024 yan-franco.vercel.app</h5>

                <a href="https://github.com/yan-franco"><span><img src={iconoGitHubAbajo} alt="GitHub" className="git" /></span></a>
                <a href="https://www.linkedin.com/in/yan-franco-mieles-genez/"><span><img src={iconoLinkedin} alt="Linkedin" className="linkedin" /></span></a>
            </div>


        </div >

    )
}

export default inicio;