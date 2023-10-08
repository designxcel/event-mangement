import { Link } from "react-router-dom";



const ShowItem = ({item}) => {
    const {project_img, project_title, category_id} = item
    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="rounded-t-xl h-60 w-[450px]" src={project_img} alt="projects" /></figure>
                <div className="card-body flex justify-center items-center">
                    
                    <div className="card-actions justify-center">
                    <h2 className="card-title">{project_title}</h2>
                    <Link to={`/projectdetails/${category_id}`}>
                        <button className="btn btn-primary">Project Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowItem;