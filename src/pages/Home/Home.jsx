import "./home.css";
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel";
import ShopWindow from "../../components/shopwindow/ShopWindow";
import Contact from "../../components/contact/Contact";
import Servico from "../../components/servico/Servico";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <ShopWindow />
            <Contact />
            <Servico />
            <Footer />
        </>
    )
};

export default Home