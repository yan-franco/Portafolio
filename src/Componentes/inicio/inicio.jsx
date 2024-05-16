import React from "react";
// import {Route} from "react-router-dom"
import "./inicio.css";
import perfil from "../../img/perfil.png"
import perfil2 from "../../img/perfil2.png"
import imgProyectos from "../../img/imgproyectos.jpg"

const inicio = () => {
    return (

        <div>
            <table className="tabla">
                <tr className="f1">
                    <td colSpan="2">

                    </td>
                </tr>
                <tr className="f2">
                    <td className="f2c1">
                        <h1 className="tituloName">Yan Mieles</h1>
                        <h5>Soy Yan, un desarrollador web genial y (a veces) ingenioso con una habilidad especial para crear magia dentro y fuera de la pantalla.</h5>
                    </td>
                    <td className="f2c2"><img src={perfil} alt="Yan F. Mieles" className="imgperfil" /></td>
                </tr>

                <tr>
                    
                    <td colSpan="2" className="f3-1">
                        <a href="/Proyectos">

                        <div className="margin">
                            <img src={imgProyectos} alt="yan mieles" className="perfil2" />
                            <h4 className="sub2">2020 - AHORA</h4>
                            <h2 className="sub1">Proyectos</h2>

                            <h5 className="parra">Construyendo un futuro digital donde la creatividad se encuentra <br /> con la innovación, cada proyecto es una historia única tejida con <br /> pasión y dedicación, impulsando el cambio y dejando una huella <br /> duradera en el mundo virtual.</h5>
                        </div>
                        </a>
                    </td>

                </tr>

                <tr>
                    
                    <td colSpan="2" className="f3">
                        <a href="/SobreMi">

                        <div className="margin">
                            <img src={perfil2} alt="yan mieles" className="perfil2" />
                            <h4 className="sub2">200X - AHORA</h4>
                            <h2 className="sub1">Sobre Mi</h2>

                            <h5 className="parra">Conóceme a través de las cosas que viven <br /> en mi cabeza sin pagar alquiler.</h5>
                        </div>
                        </a>
                    </td>

                </tr>

                

                <tr className="f4">
                    <td className="f4c1">
                        <h1 className="titulofinal">¡TE VEO LUEGO!</h1>
                        <h5>¡Te agradezco que hayas pasado por aquí! No seas un extraño, mantengámonos en contacto. <br />
                            P.D. <br />
                            ¡También estoy abierto a trabajos independientes!</h5>
                    </td>
                    <td className="f4c2">
                        <a href="mailto:jhonmieles.321@gmail.com"><button className="button1"></button></a>

                        <br />
                        <br />
                        <br />

                        <a href="https://www.linkedin.com/in/yan-franco-mieles-genez/"><button className="button2"></button></a>
                    </td>
                </tr>
            </table>
        </div>

    )
}

export default inicio;