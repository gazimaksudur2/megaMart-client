import { CiLogout, CiShoppingCart } from 'react-icons/ci';
import { FaBlog, FaChevronDown } from 'react-icons/fa';
import { GoCodeReview, GoHistory } from 'react-icons/go';
import { RxDashboard } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { MdOutlinePostAdd } from 'react-icons/md';

const Navigator = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You'll be logged Out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You're successfully logged out.",
                            icon: "success"
                        });
                        navigate('/');
                    })
                    .catch(()=>{
                        Swal.fire({
                            title: "Failed!!",
                            text: "Unfortunately, Logout process failed.",
                            icon: "error"
                        });
                    })
            }
        });
    }
    return (
        <div className='fixed md:w-64'>
            <Link to={'/'} className='my-12 flex justify-center items-center gap-3'>
                <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/1162/1162456.png" alt="logo" />
                <h2 className='text-xl font-semibold font-beginner'>Mega Mart</h2>
            </Link>
            <ul className="menu space-y-2">
                <li className='font-open hover:text-amber-600 '>
                    <Link to={'/user'} className='p-3 flex items-center  justify-between'>
                        <div className='flex items-center justify-center gap-2'>
                            <RxDashboard size={20} />
                            <p className=''>Dashboard</p>
                        </div>
                        {/* <FaChevronDown size={20} className=''/> */}
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user/cart'} className='p-3'>
                        <CiShoppingCart size={20} />
                        <p>My Cart</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user/history'} className='p-3'>
                        <GoHistory size={20} />
                        <p>Order History</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user/reviews'} className='p-3'>
                        <GoCodeReview size={20} />
                        <p>My Reviews</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user/reviews'} className='p-3'>
                        <FaBlog size={20} />
                        <p>My Blogs</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <Link to={'/user/reviews'} className='p-3'>
                        <MdOutlinePostAdd size={20} />
                        <p>My Posts</p>
                    </Link>
                </li>
                <li className='font-open hover:text-amber-600'>
                    <button onClick={handleLogout} className='p-3'>
                        <CiLogout size={20} />
                        <p>LogOut</p>
                    </button>
                </li>
            </ul>
        </div >
    );
};

export default Navigator;