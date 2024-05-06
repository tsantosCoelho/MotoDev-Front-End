import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import imgPrincipal from './img/devde.png'

function Main() {
    return (
        <div>
            <div className="header">
                <div className="navegacao">
                    <h1 id="logo">Moto <span>Dev</span></h1>
                    <div id="nav">
                        <a href="#">Inicio</a>
                        <a href="#">Sobre</a>
                        <a href="#">Serviços</a>
                        <a href="#">Contado</a>
                    </div>
                </div>
                <img id="img_principal" src={imgPrincipal} />
            </div>
            <Outlet />
            <div className="footer">

                <div className='menu_footer'>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Contado</a>
                    <a href="#">Login</a>
                </div>

            </div>
        </div>
    )
}
export default Main