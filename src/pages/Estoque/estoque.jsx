import "./estoque.css";
import Navbar from "../../components/navbar/Navbar"
import React from "react";
import Footer from "../../components/footer/Footer";

const Estoque = () => {
    return (
        <>
            <Navbar />

            <div className ="est-container"> 
            <div className ="est-content">
            <div className ="est-banner">
                <h1>Estoque</h1>
                <h2>Carros selecionados pelo nosso time para garantir


                </h2>



            </div>
            </div>
            </div>

            <Footer />
           
        </>
    )
};

export default Estoque 