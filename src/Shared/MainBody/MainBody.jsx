import { useEffect, useState } from 'react';
import bodyImage from '../../assets/bodyimage.png'
import Service from '../../Pages/Service/Service';

const MainBody = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mb-10 h-auto'>
            <div className='flex flex-col md:flex-row items-center h-[550px]'>
            <div className='flex-1'>
                <img src={bodyImage} alt="" />
            </div>
            <div className='flex-1 space-y-4'>
                <h2 className='bg-cyan-400 w-1/3 py-2 px-4 rounded-xl text-white'>About Robotics</h2>
                <h2 className='font-bold text-5xl'>Business with Robotic Solutions.</h2>
                <p className='text-justify'>
                    The about us section provides a brief company overview. It should highlight FutureBotics' position as a leader in AI and robotics, shaping the future of intelligent automation. 
                    <div className='border-l-8 border-l-cyan-500'>
                        <p className='m-4 text-justify text-slate-400'>Discuss the company's commitment to designing and developing innovative robots that blend cutting-edge technology, AI algorithms, and human-like interaction.</p>
                    </div> 
                    Emphasize FutureBotics' core values, which include innovation, sustainability, and a passion for pushing the boundaries of possibility. Additionally, mention that FutureBotics offers a range of services, including customization options to tailor robots according to specific needs.
                </p>
                <button className='bg-cyan-400 py-2 px-4 rounded-xl text-white'>Read More</button>
            </div>
            </div>
            <div className='mt-10'>
                <h2 className='font-bold text-5xl text-center mb-10'>Our Services</h2>
                <div className='grid grid-col md:grid-cols-3 gap-6'>
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainBody;