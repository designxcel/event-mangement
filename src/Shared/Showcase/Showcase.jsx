import { useEffect, useState } from "react";
import ShowItem from "./ShowItem";


const Showcase = () => {
    const [showCase, setShowCase] = useState([])
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
                    showCase.map(item => <ShowItem item={item}></ShowItem>)
                }
            </div>
            
        </div>
    );
};

export default Showcase;