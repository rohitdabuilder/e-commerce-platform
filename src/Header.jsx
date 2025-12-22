import React from "react";
import AddtoCart from "./AddtoCart"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">ShopNow</div>

        <nav className="nav">
          <Link to='/'>Home</Link>
          <Link to='/'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          
        </nav>
          <AddtoCart />

        
      </header>
    </div> 
  );
}

export default Header;
