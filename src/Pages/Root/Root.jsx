import bg1 from '../../assets/mainBG.png'
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div style={{backgroundImage: `url(${bg1})`}}>
            <div className='max-w-7xl mx-auto font-poppins'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;