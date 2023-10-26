import {useState} from "react";
import "./carousel.css";
import {
    BsCircleFill,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";


const Carousel = () => {

    const data = [
        {id: 1, url: "http://localhost:3000/assets/images/carro0.jpg"},
        {id: 2, url: "http://localhost:3000/assets/images/carro1.jpg"},
        {id: 3, url: "http://localhost:3000/assets/images/carro2.jpg"},

    ];

    const [slide, setSlide] = useState(0);

    const navPrev = () => {
        
    }

    return (
        <div className="crs-container">
            <div className="crs-arrow">
                <BsFillArrowLeftCircleFill />
                <BsFillArrowRightCircleFill /> 

            </div>
            <div className="crs-item" style={{ background:`url(${data[slide].url})`}}>

            </div>
            <div className="crs-dots">
                <BsCircleFill />
                <BsCircleFill />
                <BsCircleFill />
                
            </div>
        </div>
    )
}

export default Carousel