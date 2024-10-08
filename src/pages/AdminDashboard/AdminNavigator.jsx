import { CiLogout, CiShoppingCart } from 'react-icons/ci';
import { FaBlog, FaChevronDown } from 'react-icons/fa';
import { GoCodeReview, GoHistory } from 'react-icons/go';
import { RxDashboard } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { MdOutlineAdminPanelSettings, MdOutlinePostAdd } from 'react-icons/md';
import { BsPersonVcard } from 'react-icons/bs';

const AdminNavigator = () => {
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
                navigate('/loader');
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You're successfully logged out.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        navigate('/');
                    })
                    .catch(() => {
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
            <ul className="w-[80%] mx-auto flex flex-col items-start justify-start gap-2">
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/dash'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <RxDashboard size={20} />
                            <p className=''>Dashboard</p>
                        </div>
                        {/* <FaChevronDown size={20} className=''/> */}
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/cart'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <CiShoppingCart size={20} />
                            <p>My Cart</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/history'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <GoHistory size={20} />
                            <p>Order History</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/reviews'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <GoCodeReview size={20} />
                            <p>My Reviews</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/blogs'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <FaBlog size={20} />
                            <p>My Blogs</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/posts'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <MdOutlinePostAdd size={20} />
                            <p>My Posts</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/beseller'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <BsPersonVcard size={20} />
                            <p>Be a Seller</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={'/user/beadmin'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <MdOutlineAdminPanelSettings size={20} />
                            <p>Be an Admin</p>
                        </div>
                    </NavLink>
                </li>
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <button onClick={handleLogout} className='p-3 flex items-center justify-start '>
                        <CiLogout size={20} />
                        <p>LogOut</p>
                    </button>
                </li>
            </ul>
        </div >
    );
};

export default AdminNavigator;