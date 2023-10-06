import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import background from '../../assets/bg.png'


const Home = () => {
    return (
        <div className="h-auto" style={{backgroundImage: `url(${background})`}}>
            <Navbar></Navbar>
            <div>
                <Header></Header>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

