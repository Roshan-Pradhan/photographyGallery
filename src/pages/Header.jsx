import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerLogo">
          <img className="logo" src="../Images/logo-photographyWhite.png" alt="ANISH BHAKTA JOSHI" />
        </div>
        <div className="headerList">
          <NavLink to="/" className="navList"
         style={({ isActive }) => {
          return {
            color: isActive ? "white" : "white",
            borderBottom : isActive ? "2px solid red" :"none",
          };
        }}
          >Portfolio</NavLink>
         
        </div>
      </div>
    </>
  );
};

export default Header;
