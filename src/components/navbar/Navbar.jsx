import React from "react";
import "./navbar.css";
import {FaInstagram, FaWhatsapp, FaYoutube, FaFacebook} from "react-icons/fa"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nvb-container">
            <div className="nvb-content">
                <h1>SafeSearch</h1>
                <ul> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car">Estoque</Link></li>
                    <li>Vendas</li>
                    <li>Compra</li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>

                <div className="nvb-contato">
                    <FaWhatsapp />
                    <span>11 23181710</span>
                </div>

                <div className="nvb-socialmedia"> 
                    <FaInstagram />

                    <FaYoutube />

                    <FaFacebook />
                
                </div>

            </div>
        </div>
    )
}

export default Navbar