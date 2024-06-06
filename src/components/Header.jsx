import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <div className="w-full h-15 flex items-center justify-between shadow-lg px-4 mb-5 fixed top-0 bg-white z-10">
        <img className="w-36" src="/images/logo1.png" alt="logo" />
        <ul className="hidden md:flex ml-[20rem] flex-grow justify-evenly space-x-4">
          <li className="group">
            <img
              className={`w-10`}
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
              alt="search"
            />
            <span className={`group-hover:text-orange-500`}>Search</span>
          </li>
          <li className="group">
            <img
              className={`w-10`}
              src="https://img.icons8.com/?size=100&id=12089&format=png&color=000000"
              alt="offers"
            />
            <span className={`group-hover:text-orange-500`}>Offers</span>
          </li>
          <li className="group">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=646&format=png&color=000000"
              alt="help"
            />
            <span className={`group-hover:text-orange-500`}>Help</span>
          </li>
          <li className="group">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=111473&format=png&color=000000"
              alt="signin"
            />
            <span className={`group-hover:text-orange-500`}>Sign In</span>
          </li>
          <li className="group">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=mlzugiBNw6GO&format=png&color=000000"
              alt="cart"
            />
            <span className={`group-hover:text-orange-500`}>Cart</span>
          </li>
        </ul>
        <div className="md:hidden mb-1">
          <a className="text-3xl" href="#" onClick={handleSideBar}>
            &#8801;
          </a>
        </div>
      </div>
      {sideBar && <Sidebar handleSideBar={handleSideBar} />}
    </>
  );
};

export default Header;
