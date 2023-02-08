import React from "react";
import PrimerPro from "../../img/otros/imgPrimerP.png"
import ProxPro from "../../img/otros/ProxProyectos.png"
import "./proyectos.css"

export default function proyectos() {
    return(
        <div className="x">
            {/* <h1>Proyectos...</h1> */}
            <div class="card c">
                <img src={PrimerPro} class="card-img-top" alt="..." />

                <div class="card-body">
                    <h5 class="card-title">La Ruina Tv</h5>
                    <p class="card-text">La ruina TV es una plataforma de difusión de contenido multimedia que está en uso por una disquera en chile.</p>
                    <a href="https://tv.laruinarecords.cl/browser" class="b">Visitar</a>
                </div>
            </div>

            <div class="card c" aria-hidden="true">
                <img src={ProxPro} class="proxp" alt="..." />
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>
        
        
        // <div class="row row-cols-1 row-cols-md-2 g-4">
        //     <div class="col">
        //         <div class="card">
        //             <img src={PrimerPro} class="card-img-top pripro" alt="La Ruina Tv" />
        //             <div class="card-body">
        //                 <h5 class="card-title">La Ruina Tv</h5>
        //                 <p class="card-text">La ruina TV es una plataforma de difusión de contenido multimedia que está en uso por una disquera en chile.</p>
        //             </div>
        //             <a href="https://tv.laruinarecords.cl/browser" type="button" className="b">Visitar</a>
        //         </div>

        //         <div class="card" aria-hidden="true">
        //             <img src={ProxPro} class="card-img-top" alt="..." />
        //             <div class="card-body">
        //                 <h5 class="card-title placeholder-glow">
        //                     <span class="placeholder col-6"></span>
        //                 </h5>
        //                 <p class="card-text placeholder-glow">
        //                     <span class="placeholder col-7"></span>
        //                     <span class="placeholder col-4"></span>
        //                     <span class="placeholder col-4"></span>
        //                     <span class="placeholder col-6"></span>
        //                     <span class="placeholder col-8"></span>
        //                 </p>
        //                 <a href="..." tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}

