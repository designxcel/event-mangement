import { Link } from 'react-router-dom';
import error from '../../assets/error.png'

const Error = () => {
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <img className='md:h-full md:absolute' src={error} alt="" />
            <div className='md:relative top-40 left-40'>
                <Link to="/">
                    <h2 className='bg-cyan-500 px-4 py-2 font-bold rounded-full'>GO HOME</h2>
                </Link>
                
            </div>
        </div>
    );
};

export default Error;