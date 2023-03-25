import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
    console.log(navigate);
  }
  return (
    <form
      onSubmit={submitHandler}
      className='text-white flex flex-col w-full gap-y-4 mt-6'
    >
      <label htmlFor='email' className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
          Email Address<sup className='text-pink-200'>*</sup>
        </p>
        <input
          id='email'
          type='email'
          name='email'
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter email address'
          className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
        />
      </label>
      <label htmlFor='password' className='relative'>
        <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
          Password<sup className='text-pink-200'>*</sup>
        </p>
        <input
          id='password'
          type={showPassword ? "text" : "password"}
          name='password'
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder='Enter password here'
          className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
        />
        <span
          className='absolute top-[40px] right-3 cursor-pointer'
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
          ) : (
            <AiOutlineEye fontSize={24} fill='#AFB2BF' />
          )}
        </span>
        <Link to='#'>
          <p className='text-xs text-blue-100 max-w-max ml-auto'>
            Forgot password?
          </p>
        </Link>
      </label>
      <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5'>
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
