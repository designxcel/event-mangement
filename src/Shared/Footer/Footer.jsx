
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/chip.png'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 text-primary-content">
            <aside>
                <div>
                    <img className='w-32' src={mainLogo} alt="" />
                </div>
                <p className="font-bold text-4xl text-slate-800">
                Tech Robot
                </p> 
                <nav className='flex gap-6 text-slate-800 font-semibold'>
                <Link>Blogs</Link>
                <Link>Gallery</Link>
            </nav>
                <p>Copyright © 2023 - All right reserved</p>
            </aside> 
            
        </footer>
    );
};

export default Footer;