import "./estoque.css";
import Navbar from "../../components/navbar/Navbar"
import React from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { BiSearch } from "react-icons/bi"
import "./estoque.css"
import ;

const Estoque = () => {
    return (
        <>
            <Navbar />

            <div className ="est-container"> 
            <div className ="est-content">
            <div className ="est-banner">
                <h1>Estoque</h1>
                <h2>Carros selecionados pelo nosso time para garantir <br></br>
                uma otíma compra do seu usado 
                </h2>
                <div className = "est-search-content">
                    <input type="text" id="txtSearch"/>
                    <BiSearch />
                </div>
            </div>

            <div className="est-vitrine">
                {carInfo.map((item, index)=> (
                    <Card item={item}/>
                    
                ))}

            </div>
            </div>
            </div>

            <Footer />
           
        </>
    )
};

export default Estoque 