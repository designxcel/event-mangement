import robot from '../../assets/robot.png'
import { FaAngleRight } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
            <div className='text-white space-y-4 mb-8'>
                <div className='flex justify-between items-center bg-cyan-300 py-2 md:w-2/3 px-4 rounded-xl'>
                    <h2 className=' text-black font-semibold'>Welcome to Tech Robot</h2>
                    <FaAngleRight className='bg-black rounded-full'></FaAngleRight>
                </div>
                <p className='text-4xl'>Pioneering the <br /> <span className='text-cyan-400 font-extrabold text-7xl'>FUTURE</span> <br /> of robotics</p>
                <h3>Building Intelligent Robots for <br /> a smarter Tomorrow.</h3>
            </div>
            <div>
                <img className='md:w-[550px]' src={robot} alt="" />
            </div>
        </div>
    );
};

export default Header;