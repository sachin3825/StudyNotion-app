import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("student");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changehandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);

    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    const finalData = {
      ...accountData,
      accountType,
    };

    console.log("printing Final account data ");
    console.log(finalData);
    navigate("/dashboard");
  }
  return (
    <div className='flex flex-col gap-5 mt-5 '>
      <div className='flex bg-richblack-800 max-w-max p-1 gap-x-1 rounded-full'>
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full transition-all duration-200 p-4 `}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } rounded-full transition-all duration-200 p-4 `}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler} className='w-full  flex flex-col gap-4'>
        <div className='flex justify-between '>
          <label htmlFor='firstname'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type='text'
              required
              name='firstname'
              id='firstname'
              onChange={changehandler}
              placeholder='Enter first name'
              value={formData.firstname}
              className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
            />
          </label>
          <label htmlFor='lastname'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type='text'
              required
              name='lastname'
              id='lastname'
              onChange={changehandler}
              placeholder='Enter last name'
              value={formData.lastname}
              className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
            />
          </label>
        </div>
        <label htmlFor='email'>
          <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
            Email address <sup className='text-pink-200'>*</sup>
          </p>
          <input
            id='email'
            type='email'
            name='email'
            required
            value={formData.email}
            onChange={changehandler}
            placeholder='Enter email id'
            className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
          />
        </label>
        <div className='flex justify-between'>
          <label htmlFor='password' className='relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
              Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name='password'
              id='password'
              onChange={changehandler}
              placeholder='Enter password'
              value={formData.password}
              className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
            />
            <span
              className='absolute top-[38px] right-3 cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
              ) : (
                <AiOutlineEye fontSize={24} fill='#AFB2BF' />
              )}
            </span>
          </label>
          <label htmlFor='confirmPassword' className='relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.725rem]'>
              Confirm password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name='confirmPassword'
              id='confirmPassword'
              onChange={changehandler}
              placeholder='Confirm password'
              value={formData.confirmPassword}
              className='bg-richblack-800 w-full rounded-[0.5rem] p-[12px] text-richblack-5 '
            />
            <span
              className='absolute top-[38px] right-3 cursor-pointer'
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
              ) : (
                <AiOutlineEye fontSize={24} fill='#AFB2BF' />
              )}
            </span>
          </label>
        </div>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5'>
          Create account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
