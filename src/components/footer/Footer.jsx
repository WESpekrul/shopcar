import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "./footer.css"



const Footer = () => {
    return (
        <div className="ftr-container">
            <div className="ftr-content">
                <div className="ftr-item-map">
                    <ul>
                        <li>Home</li>
                        <li>Estoque</li>
                        <li>Compra</li>
                        <li>Venda</li>
                        <li>Contato</li>                        
                    </ul>
                </div>

                <div className="ftr-item-end">
                    <span>CNPJ 36478408-0002/78</span>
                    <span>All rights reserved @ 2023</span>
                    <span>São Paulo SP</span>
                </div>

                <div className="ftr-item">
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebook />  
                </div>

            </div>

        </div>
    )
}

export default Footer