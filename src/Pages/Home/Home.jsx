import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import MainBody from "../../Shared/MainBody/MainBody";
import Navbar from "../../Shared/Navbar/Navbar";

import Showcase from "../../Shared/Showcase/Showcase";
import background from '../../assets/bg.png'


const Home = () => {
    return (
        <div>
            <div className="h-auto bg-gradient-to-t from-[#f6f6f6] via-[#71c3f7] to-[#2c6cbc]">
                <Navbar></Navbar>
                <div>
                    <Header></Header>
                </div>
            </div>
            <MainBody></MainBody>
            <Showcase></Showcase>
            <Footer></Footer>
        </div>
    );
};

export default Home;

