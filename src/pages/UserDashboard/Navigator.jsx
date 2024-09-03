import { FaChevronDown } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navigator = () => {
    return (
        <div>
            <Link to={'/'} className='my-12 flex justify-center items-center gap-3'>
                <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/1162/1162456.png" alt="logo" />
                <h2 className='text-xl font-semibold font-beginner'>Mega Mart</h2>
            </Link>
            <ul className="menu space-y-2">
                <li className='font-open'>
                    <Link to={'/user'} className='p-3 max-w-52 flex items-center  justify-between'>
                        <div className='hover:text-amber-600 flex items-center justify-center gap-2'>
                            <RxDashboard size={20} />
                            <p className=''>Dashboard</p>
                        </div>
                        {/* <FaChevronDown size={20} className=''/> */}
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user'} className='p-3'>
                        <RxDashboard size={20} />
                        <p>My Orders</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user'} className='p-3'>
                        <RxDashboard size={20} />
                        <p>Order History</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user'} className='p-3'>
                        <RxDashboard size={20} />
                        <p>My Reviews</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user'} className='p-3'>
                        <RxDashboard size={20} />
                        <p>Dashboard</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigator;