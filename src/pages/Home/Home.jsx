import "./home.css";
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel";
import ShopWindow from "../../components/shopwindow/ShopWindow";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ShopWindow />
        </>
    )
};

export default Home