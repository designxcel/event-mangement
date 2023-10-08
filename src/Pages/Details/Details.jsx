import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
    
    const handlePurchase = () =>{
        swal("Good job!", "Purchased Successfully", "success");  
            
    }


    return (
        <div className="md:w-[850px] px-8 mx-auto py-8">
            <div className="flex justify-center mb-5">
                <img className="rounded-xl" src={img} alt="" />
            </div>
            <h2 className="font-bold text-3xl mb-5">{title}</h2>
            <p className="text-red-600 font-semibold text-2xl mb-4">Course Price: $ {price}</p>
            <p>{details}</p>
            <div className="flex justify-center items-center mt-10">
                <div>
                    <Link 
                    
                    to="/">
                        <button className="bg-cyan-500 btn">Back to Home page</button>
                    </Link>
                </div>
                <div>
                    
                        <button onClick={handlePurchase} className="btn bg-cyan-500">Purchase Course</button>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Details;