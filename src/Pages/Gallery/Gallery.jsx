
import { useEffect, useState } from "react";
import GalleryDisplay from "./GalleryDisplay";
import { Link } from "react-router-dom";

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() =>{
        fetch('/info.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[100vh]">
            {
                gallery.map(image => <GalleryDisplay image={image}></GalleryDisplay>)
            }
            <div>
                
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Gallery;