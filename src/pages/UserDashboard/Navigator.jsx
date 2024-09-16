import { CiLogout, CiShoppingCart } from 'react-icons/ci';
import { FaBlog, FaChevronDown } from 'react-icons/fa';
import { GoCodeReview, GoHistory } from 'react-icons/go';
import { RxDashboard } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { MdArrowBackIosNew, MdOutlineAdminPanelSettings, MdOutlinePostAdd, MdQueryStats } from 'react-icons/md';
import { BsPersonVcard } from 'react-icons/bs';
import { FaUsersGear } from 'react-icons/fa6';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { TbTransactionDollar } from 'react-icons/tb';

const Navigator = () => {
    const { logOut, userDB } = useAuth();
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
    const customerNavigator = <>
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
    </>;

    const adminNavigator = <>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/users'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <FaUsersGear size={20} />
                    <p>Manage Users</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/sales'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <MdQueryStats size={20} />
                    <p>Sales Report</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Products</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/orders'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Order Lists</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/category'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Categories</p>
                </div>
            </NavLink>
        </li>
        {/* <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Brands</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Refund Requests</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Order Cancel Request</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Order Cancel History</p>
                </div>
            </NavLink>
        </li> */}
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/admin/transactions'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TbTransactionDollar size={20} />
                    <p>Transactions</p>
                </div>
            </NavLink>
        </li>
    </>;
    const sellerNavigator = <>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/seller/brands'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>My Brands</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/seller/products'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>My Products</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/seller/sales'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <MdQueryStats size={20} />
                    <p>Sales Report</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/seller/orders'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TfiShoppingCartFull size={20} />
                    <p>Order Lists</p>
                </div>
            </NavLink>
        </li>
        <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
            <NavLink to={'/seller/transactions'} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                <div className='flex items-center justify-center gap-2'>
                    <TbTransactionDollar size={20} />
                    <p>Transactions</p>
                </div>
            </NavLink>
        </li>
    </>;

    return (
        <div className='fixed md:w-64'>
            <MdArrowBackIosNew className='absolute top-0 right-0 p-2 bg-blue-100 hover:bg-blue-200 rounded-l-md' size={35} />
            <Link to={'/'} className='my-12 flex justify-center items-center gap-3'>
                <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/1162/1162456.png" alt="logo" />
                <h2 className='text-xl font-semibold font-beginner'>Mega Mart</h2>
            </Link>
            <ul className="w-[80%] mx-auto flex flex-col items-start justify-start gap-2">
                <li className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg'>
                    <NavLink to={userDB?.role === 'customer' ? '/user/dash' : (userDB?.role === 'admin' ? '/admin' : '/seller')} className={({ isActive }) => isActive ? "flex items-center justify-start p-3 bg-amber-400 text-white rounded-lg" : "p-3 flex items-center justify-start"} end>
                        <div className='flex items-center justify-center gap-2'>
                            <RxDashboard size={20} />
                            <p className=''>Dashboard</p>
                        </div>
                        {/* <FaChevronDown size={20} className=''/> */}
                    </NavLink>
                </li>
                {
                    userDB?.role === 'customer' ? customerNavigator : userDB?.role === 'admin' ? adminNavigator : sellerNavigator
                }
                <li onClick={handleLogout} className='w-full font-open text-gray-700 hover:text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-lg cursor-pointer'>
                    <button className='p-3 flex items-center justify-start '>
                        <CiLogout size={20} />
                        <p>LogOut</p>
                    </button>
                </li>
            </ul>
        </div >
    );
};

export default Navigator;