import { useEffect, useState } from "react";
import ShowItem from "./ShowItem";
import Navbar from "../Navbar/Navbar";


const Showcase = () => {
    const [showCase, setShowCase] = useState([])
    const [isShowing, setIsShowing] = useState(false);
    useEffect(() =>{
        fetch('/info.json')
        .then(res => res.json())
        .then(data => setShowCase(data))
    },[])
    return (
        <div>
            
            <h2 className="text-4xl font-bold  text-center mt-20">Our Completed Robotics Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                {
                    isShowing ?
                    showCase?.map(item => <ShowItem item={item}></ShowItem>)
                    :
                    showCase?.slice(0,3).map(item => <ShowItem item={item}></ShowItem>)
                }
            </div>
            <div className="flex justify-center items-center mb-10">
                    {
                        showCase.length > 3 && <button className="btn btn-primary w-1/4" onClick={() => setIsShowing(!isShowing)}>

                        {isShowing ? "see less" : "see all"}
                        </button>
                    }
            </div>
            
        </div>
    );
};

export default Showcase;