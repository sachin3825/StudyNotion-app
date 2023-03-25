import React from "react";
import Templete from "../Components/Templete";
import loginImg from "../assets/login.png";
function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Templete
        title='Welcome Back'
        desc1='Build skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={loginImg}
        formtype='login'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
