import React from "react";
// import imgPriP from "../../img/imgPrimerP.png"
// import ProxProyectos from "../../img/ProxProyectos.png"
import "./carrusel.css"

const carrusel = () => {
    return(

        <div className="container">
            <div className="card">
                <div className="card-body">
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
                </div>
            </div>
        </div>




        // 
    )
}

export default carrusel;