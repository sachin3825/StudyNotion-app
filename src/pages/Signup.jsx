import React from "react";
import Templete from "../Components/Templete";
import SignupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      {" "}
      <Templete
        title='Join the million learning to code with StudyNotion for free'
        desc1='Build skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={SignupImg}
        formtype='signup'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup;
