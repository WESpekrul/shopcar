import React from "react";
import CarouselSmall from "../carousel/CarouselSmall"
import "./card.css"
import {FaMapMarkedAlt} from "react-icons/fa"


const Card = () => {
    return (

        <div className="crd-container">
            <div className="crd-top">
                <CarouselSmall />
            </div>

            <div className="crd-bottom">
                <div className="crd-carinfo">
                    <h1> UNO </h1>
                    <h2> X3 Sport Edition </h2>
                    <span> 2023 </span>
                </div>

                <div className="crd-preco">
                    <h1> R$ 48.000,00 </h1>

                </div>

                <div className="crd-location">
                    <FaMapMarkedAlt />
                    <span> São Paulo - SP </span>

                </div>

            </div>

        </div>
    )
}

export default Card;
