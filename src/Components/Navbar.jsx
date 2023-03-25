import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className='flex justify-between items-center text-white w-11/12 max-w-[1160px] mx-auto py-4'>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex  gap-x-6'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex gap-x-4 items-center '>
        {!isLoggedIn && (
          <Link to='/login'>
            <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-md border border-richblack-700'>
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to='/signup'>
            <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-md border border-richblack-700'>
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/'>
            <button
              className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-md border border-richblack-700'
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/dashboard'>
            <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-md border border-richblack-700'>
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
