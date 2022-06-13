import React, { useEffect, useState } from "react";
import style from "./navbar.module.css"
import axios from "axios"
import { Link } from "react-router-dom";

const Navbar = ({auth,logout}) => {
  const [arr, setarr] = useState([]);
  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get("http://localhost:8080/cartItems")
      setarr(r.data)
    }
    getData()
    
  },[])
  return (
    <div data-cy="navbar" className={style.nav}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link">Logo</a>
      </div>
      <div className={style.subnav}>
        <div data-cy="navbar-cart-items-count">Cart:{auth?arr.length:0}</div>
        <button data-cy="navbar-login-logout-button" onClick={()=>logout()}>{auth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
