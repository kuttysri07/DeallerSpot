import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import hamburger from "../Assets/icons8-hamburger-menu-100.png";


const Nav2 = () => {
  const [menu, setMenu] = useState(false);

  // Use the location hook to get the current route
  const location = useLocation();

  const menutoggle = () => {
    setMenu(!menu);
  };

  // Determine whether the current page is buyer or seller based on the URL path
  const isBuyerPage = location.pathname.includes('buyerpage');
  const isSellerPage = location.pathname.includes('sellerpage');
  const isFranchisePage = location.pathname.includes('franchise');
  const isBuyerFormPage = location.pathname.includes('form/buyer');
  const isSellerFormePage = location.pathname.includes('form/seller');
  

  return (
    <Fragment>
      <nav className='navcontainer'>
        <img className='hamburger' src={hamburger} alt="" onClick={menutoggle} />
        <h1>Dealers Connect</h1>
        <ul className={menu ? 'reset' : 'navcontent'}>
          <li><Link to={"/"} style={{ color: "#03045e", textDecoration: "none" }}>Home</Link></li>

          {/* Conditionally render the form link based on the page */}
          <li>
            {isBuyerPage ? (
              <Link to={"/form/buyer"} style={{ color: "#03045e;", textDecoration: "none" }}>Buyer Form</Link>
            ) : isSellerPage ? (
              <Link to={"/form/seller"} style={{ color: "#03045e", textDecoration: "none" }}>Seller Form</Link>
            ) : "" }
          </li>

          <li>
            {isBuyerFormPage ? (
              <Link to={"/form/buyer"} style={{ color: "#03045e;", textDecoration: "none" }}>Buyer Form</Link>
            ) : isSellerFormePage ? (
              <Link to={"/form/seller"} style={{ color: "#03045e", textDecoration: "none" }}>Seller Form</Link>
            ) : "" }
          </li>

          <li>
          {isBuyerPage ? <Link to={"/login/buyer"}  style={{ color: "#03045e", textDecoration: "none" } }>Buyer Login </Link> : isSellerPage ? <Link to={"/login/seller"}  style={{ color: "#03045e", textDecoration: "none" }}> Seller Login</Link> :""}
          </li>

          <li>
          {isBuyerFormPage ? <Link to={"/login/buyer"}  style={{ color: "#03045e", textDecoration: "none" } }>Buyer Login </Link> : isSellerFormePage ? <Link to={"/login/seller"}  style={{ color: "#03045e", textDecoration: "none" }}> Seller Login</Link> :""}
          </li>

          <li>
          {isFranchisePage ? "Dashboard" :""}
          </li>

          <li>
          {isFranchisePage ? <Link to={"/"} style={{ color: "#03045e", textDecoration: "none" }}>Logout</Link> :""}
              
           
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav2;
