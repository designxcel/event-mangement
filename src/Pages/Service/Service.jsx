import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {category_id, title, img, details} = service;
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl py-4">
                <figure><img 
                className="w-72 h-44"
                src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-slate-400 text-justify">
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
                    {/* <div className="card-actions justify-end">
                        
                    <Link to = "/details">
                        <button className="btn btn-primary w-full mt-5">Book Schedule</button>
                    </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Service;