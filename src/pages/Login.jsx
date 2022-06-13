import React from "react";

const Login = ({login,logout,auth,setauth}) => {
  let formsubmit=(event)=>{
    event.preventDefault();
    login();
    console.log(auth)
  }
  return (
    <div>
      <form onSubmit={formsubmit}>
        <input data-cy="login-email" placeholder="Enter E-mail..." /><br />
        <input data-cy="login-password" placeholder="Enter Password..." /><br />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
