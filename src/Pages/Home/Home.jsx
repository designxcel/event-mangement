import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MainBody from "../../Shared/MainBody/MainBody";
import Navbar from "../../Shared/Navbar/Navbar";
import background from '../../assets/bg.png'


const Home = () => {
    return (
        <div>
            <div className="h-auto" style={{backgroundImage: `url(${background})`}}>
                <Navbar></Navbar>
                <div>
                    <Header></Header>
                </div>
            </div>
            <MainBody></MainBody>
            <Footer></Footer>
        </div>
    );
};

export default Home;

