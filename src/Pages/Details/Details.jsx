import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";


const Details = () => {
    const {id} = useParams()
    const [detailItem, setDetailItem] = useState(null)

    

    useEffect(() => {
        fetch('/info.json')
        .then (res => res.json())
        .then (data => {
            const foundDetails = data.find(item => item.category_id === id);
            setDetailItem(foundDetails);
        })
    },[id])
    if(!detailItem){
        return <p>Loading...</p>
    }

    const {category_id, title, img, details, price} = detailItem;
    return (
        <div className="w-[850px] mx-auto py-8">
            <div className="flex justify-center mb-5">
                <img className="rounded-xl" src={img} alt="" />
            </div>
            <h2 className="font-bold text-3xl mb-5">{title}</h2>
            <p className="text-red-600 font-semibold text-2xl mb-4">Course Price: $ {price}</p>
            <p>{details}</p>
            <div>
                <Link 
                
                to="/">
                    <h2 className="bg-cyan-500 w-1/4 py-2 text-center text-white rounded-xl mt-5">Back to Home page</h2>
                </Link>
            </div>
            <div>
                {/* <Link 
                
                to="/">
                    <h2 className="bg-cyan-500 w-1/4 py-2 text-center text-white rounded-xl mt-5">purchase Course</h2>
                </Link> */}
                <button className="btn bg-cyan-500">Purchase Course</button>
            </div>
        </div>
    );
};

export default Details;