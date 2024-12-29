import React from "react";
import "./inicio.css";
import imgInicioPortfolio from "../../img/imgInicioPortfolio.webp";
import iconoGithub from "../../img/github.png";
import iconoWeb from "../../img/iconoWeb.png";

import iconoGitHubAbajo from "../../img/github-142-svgrepo-com.png";
import iconoLinkedin from "../../img/linkedin-svgrepo-com.png";

import imgCartelManhwa from "../../img/CARTEL_DE_MANHWAS_2.webp"


const inicio = () => {
    return (

        <div>
            <div className="enca">
                <section class="curvedArriba"></section>

                <img src={imgInicioPortfolio} alt="Software" />
                {/* <spline-viewer url="https://prod.spline.design/I0c0cPxXn52ZU7aI/scene.splinecode"></spline-viewer> */}

                <svg viewBox="0 0 1320 300">
                    <text x="35%" y="20%" text-anchor="middle" fill="#038b86">
                        BIENVENIDO!
                    </text>
                </svg>
                <p>Mi nombre es <u><em>Yan Franco Mieles</em></u>, soy una persona que esta comenzando su carrera como <em>Desarrollador Back-end</em>. Creo que la capacidad de superación es una de las cualidades más importantes para cualquier trabajador. Es por eso me considero capaz de mejorar y aprender a diario, de cada una de las oportunidades laborales que se me presenten. Busco un empleo que confié en mi capacidad y me dé las posibilidades de crecer profesionalmente.</p>
            </div>

            <div className="content">
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
                            <a href="/"><span><img src={iconoWeb} alt="Web" /></span></a>
                            <a href="/"><span><img src={iconoGithub} alt="GitHub" /></span></a>
                        </div>
                    </div>
                    {/* <div class="card">
                        <img src="" alt="Card Image" />
                            <h3>Bahía.js</h3>
                            <p>
                                Una biblioteca liviana y fácil de usar para componentes web. No necesita un paso de compilación.
                            </p>
                            <div class="icons">
                                <a href="/"><span><img src={iconoWeb} alt="Web" /></span></a>
                            <a href="/"><span><img src={iconoGithub} alt="GitHub" /></span></a>
                            </div>
                    </div> */}

                </div>
            </div>



            <section class="curvedAbajo"></section>

            <div className="piecero">
                <h5>© 2024 yan-franco.vercel.app</h5>

                <a href="https://github.com/yan-franco"><span><img src={iconoGitHubAbajo} alt="GitHub" className="git" /></span></a>
                <a href="https://www.linkedin.com/in/yan-franco-mieles-genez/"><span><img src={iconoLinkedin} alt="Linkedin" className="linkedin" /></span></a>
            </div>


        </div>

    )
}

export default inicio;