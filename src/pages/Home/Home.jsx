import "./home.css";
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel";
import ShopWindow from "../../components/shopwindow/ShopWindow";
import Contact from "../../components/contact/Contact";
import Servico from "../../components/servico/Servico";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ShopWindow />
            <Contact />
            <Servico />


        </>
    )
};

export default Home