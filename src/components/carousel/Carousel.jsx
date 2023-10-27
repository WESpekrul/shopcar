import {useState} from "react";
import "./carousel.css";
import {
    BsCircleFill,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";


const Carousel = () => {

    const data = [
        {id: 1, url: "http://10.11.11.145:3000/assets/images/carro0.jpg"},
        {id: 2, url: "http://10.11.11.145:3000/assets/images/carro1.jpg"},
        {id: 3, url: "http://10.11.11.145:3000/assets/images/carro2.jpg"},

    ];

    const [slide, setSlide] = useState(0);

    const navPrev = () => {
        const isFirst = slide === 0;
        const prevSlide = isFirst ? data.length - 1 : slide - 1;
        setSlide (prevSlide);

    };

    const navNext = () => {
        const isLast = slide === data.length -1;
        const nextSlide = isLast ? 0 : slide + 1;
        setSlide (nextSlide);

    };

    const navDot = (index) => {
        setSlide (index)

    }



    return (
        <div className="crs-container">
            <div className="crs-arrow">
                <BsFillArrowLeftCircleFill onClick={() => navPrev() }/>
                <BsFillArrowRightCircleFill onClick={() => navNext() }/> 

            </div>
            <div className="crs-item" style={{ background:`url(${data[slide].url})`}}>

            </div>
            <div className="crs-dots">
                <BsCircleFill onClick={() => navDot(0)}/>
                <BsCircleFill onClick={() => navDot(1)}/>
                <BsCircleFill onClick={() => navDot(2)}/>
                
            </div>
        </div>
    )
}

export default Carousel