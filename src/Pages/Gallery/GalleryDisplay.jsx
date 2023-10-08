import { Link } from "react-router-dom";


const GalleryDisplay = ({image}) => {
    const {gallery_img, gallery_title} = image
    return (
        <div>
            <div className="card w-96 shadow-lg">
                <figure><img className="h-56 w-full" src={gallery_img}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{gallery_title}</h2>
                    
                    <div className="card-actions">
                    <button className="btn btn-primary">Cheers!</button>
                    </div>
                </div>
         </div>
         
        </div>
    );
};

export default GalleryDisplay;