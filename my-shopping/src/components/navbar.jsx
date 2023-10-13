import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillCartPlusFill} from "react-icons/bs";
import "./navbar.css"


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart"><BsFillCartPlusFill size={32}/></Link>
      </div>
    </div>
  );
}


