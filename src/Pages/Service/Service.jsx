import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {category_id, title, img, details} = service;
    
    return (
        <div>
            <div 
            className="
            transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
            card md:w-96 bg-base-100 shadow-xl py-4">
                <figure><img 
                className="w-72 h-44 rounded-xl"
                src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-justify">
                        {
                            details.length > 250 ? <p>
                                {details.slice(0,250)} <Link to={`/details/${category_id}`}>
                                    <p className="bg-cyan-500 py-2  text-white text-center rounded-xl mt-5">Book Schedule</p>
                                </Link>
                            </p>
                            :
                            <p>{details}</p>
                        }
                        </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;