import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./home.css"
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by Property name</h1>
            <PropertyList/>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
            </div>
        </div>
    ); 
};

export default Home;