import React from "react";
import {Route} from "react-router-dom"
// import perfil from "../../img/perfilPer/pefil.png"
import perfil2 from "../../img/perfilPer/perfil2.png"
// import github from "../../img/perfilPer/github.png"
// import linkedin from "../../img/perfilPer/linkedin-hover.png"
import javaS from "../../img/tecnologias/js.png"
import html from "../../img/tecnologias/html5.png"
import css from "../../img/tecnologias/css3.png"
import react from "../../img/tecnologias/react.png";
import redux from "../../img/tecnologias/redux.png"
import node from "../../img/tecnologias/nodejs.png"
import express from "../../img/tecnologias/expressroute.png"
import postgres from "../../img/tecnologias/postgresql.png"
import bootstrap from "../../img/tecnologias/bootstrap.png"
import proyect from "../Proyectos/proyectos";
import tecno from "../tecnologias/tecno"
import info from "../informacion/info"
import "./carrusel.css";

const carrusel = () => {
    return(

        <div className="container">
            <div className="card">
                <div className="card-body fontInvi">
                    {/* ----------------------------- carousel ------------------------ */}
                    <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade " data-bs-ride="carousel">
                        {/* <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="6" />
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="7" />
                        </div> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active adaptabilidad"></div>
                            <div class="carousel-item responsabilidad"></div>
                            <div class="carousel-item colaboracion"></div>
                            <div class="carousel-item creatividad"></div>
                            <div class="carousel-item inteEmocional"></div>
                            <div class="carousel-item flexibilidad"></div>
                            <div class="carousel-item paciencia"></div>
                            <div class="carousel-item atenDetalles"></div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* ---------------------------- foto perfil ------------------------- */}
                    <div>

                        {/* <img src={perfil} alt="Yan F. Mieles" className="perfil"/> */}
                        <img src={perfil2} alt="Yan F. Mieles" className="perfil"/>
                        <h1 className="nombre">Yan Franco Mieles Genez</h1>

                        <div className="iconosL">
                            <a href="https://www.linkedin.com/in/yan-franco-mieles-genez-793a261b5/"><div className="linkedin"></div></a>
                        </div>
                        <div className="iconosG">
                            <a href="https://github.com/yan-franco"><div className="github"></div></a>
                        </div>
                        
                        <br />
                        <br />
                        <br />
                        <h4 className="fullS">Full Stack Developer</h4>
                        <br />
                        <br />
                        <img src={javaS} alt="JavaScript" className="iconosT"/>
                        <img src={html} alt="" className="iconosT"/>
                        <img src={css} alt="" className="iconosT"/>
                        <img src={react} alt="" className="iconosT"/>
                        <img src={redux} alt="" className="iconosT"/>
                        <img src={node} alt="" className="iconosT"/>
                        <img src={express} alt="" className="iconosT"/>
                        <img src={postgres} alt="" className="iconosT"/>
                        <img src={bootstrap} alt="" className="iconosT"/>
                    </div>
                    {/* ------------------------------ Selectores --------------------------- */}

                    <div>
                        <h5 class="accordion-header" id="headingThree">
                            <button className="boton collapsed" data-bs-toggle="collapse" data-bs-target="#informacion" aria-expanded="false" aria-controls="tecnologias">Información</button>
                        </h5>
                        
                        <h5 class="accordion-header" id="headingTwo">
                            <button className="boton collapsed" data-bs-toggle="collapse" data-bs-target="#tecnologias" aria-expanded="false" aria-controls="tecnologias">Tecnologías</button>
                        </h5>
                        
                        
                        <h5 class="accordion-header" id="headingOne">
                            <button className="boton collapsed" data-bs-toggle="collapse" data-bs-target="#proyectos" aria-expanded="false" aria-controls="proyectos">Proyectos</button>
                        </h5>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div class="accordion" id="accordionExample">
                        <div id="proyectos" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <Route component={proyect}></Route>
                            </div>
                        </div>
                        <div id="tecnologias" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <Route component={tecno}></Route>
                            </div>
                        </div>
                        <div id="informacion" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <Route component={info}></Route>
                            </div>
                        </div>
                    </div>
                    


                    {/* <p>
                        <a class="btn btn-primary select" data-bs-toggle="collapse" href="#proyectos" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Proyectos
                        </a>
                        <a class="btn btn-primary select" data-bs-toggle="collapse" href="#tecnologias" role="button" aria-expanded="false" aria-controls="collapseExample">
                            
                            Tecnologías
                        </a>
                        <a class="btn btn-primary select" data-bs-toggle="collapse" href="#informacion" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Información
                        </a>
                    </p>
                    <div class="collapse in" id="proyectos">
                        <div class="card card-body">
                            Proyectos
                        </div>
                    </div>
                    <div class="collapse in" id="tecnologias">
                        <div class="card card-body">
                            Tecnologías
                        </div>
                    </div>
                    <div class="collapse in" id="informacion">
                        <div class="card card-body">
                            Información
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>




        // 
    )
}

export default carrusel;