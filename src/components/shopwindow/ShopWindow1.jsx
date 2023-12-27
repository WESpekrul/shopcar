import React from "react";
import "./shopwindow.css";
import Card from "../card/Card";
import { carInfo } from "../../data/car"
import { Link } from "react-router-dom";

const ShopWindow = () => {
    return (
        <div className="spw-container">
            <div className="spw-content">
                {carInfo.slice(0, 12).map((item, index)=>(
                    <Card item ={item} />

                ))}              

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

                <button>
                    <Link to="/car">

                        Visualizar todos os veículos do estoque 
                        
                    </Link>

                                    
                </button>
            </div>            
        </div>
    )
}

export default ShopWindow;