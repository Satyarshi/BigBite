import React from "react";

const Sidebar = ({ handleSideBar }) => {
  return (
    <div className="h-[100vh] w-[300px] fixed right-0 z-10 bg-white md:hidden">
      <div className="mt-4 flex justify-end pr-4">
        <img
          onClick={handleSideBar}
          className="w-10 h-10 hover:w-11 hover:h-11"
          src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
          alt="close"
        />
      </div>
      <div className="mt-8">
        <ul className="space-y-4 pl-4">
          <li className="group flex">
            <img
              className={`w-6`}
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
              alt="search"
            />
            <span className={`group-hover:text-orange-500 ml-5`}>Search</span>
          </li>
          <li className="group flex">
            <img
              className={`w-6`}
              src="https://img.icons8.com/?size=100&id=12089&format=png&color=000000"
              alt="offers"
            />
            <span className={`group-hover:text-orange-500 ml-5`}>Offers</span>
          </li>
          <li className="group flex">
            <img
              className={`w-6`}
              src="https://img.icons8.com/?size=100&id=646&format=png&color=000000"
              alt="help"
            />
            <span className={`group-hover:text-orange-500 ml-5`}>Help</span>
          </li>
          <li className="group flex">
            <img
              className={`w-6`}
              src="https://img.icons8.com/?size=100&id=111473&format=png&color=000000"
              alt="signin"
            />
            <span className={`group-hover:text-orange-500 ml-5`}>Sign In</span>
          </li>
          <li className="group flex">
            <img
              className={`w-6`}
              src="https://img.icons8.com/?size=100&id=mlzugiBNw6GO&format=png&color=000000"
              alt="cart"
            />
            <span className={`group-hover:text-orange-500 ml-5`}>Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
