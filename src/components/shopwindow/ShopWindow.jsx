import React from "react";
import "./shopwindow.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const ShopWindow = () => {
    return (
        <div className="spw-container">
             <button>
                    <Link to="/estoque">

                        Visualizar os veículos do estoque 
                        
                    </Link>

                                    
                </button>
            <div className="spw-content">
           
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>  
                </div>
                
                      
        
    )
}

export default ShopWindow;