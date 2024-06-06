import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-200">
        <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-around">
          <div className="text-center md:text-left text-lg md:text-2xl font-bold mb-4 md:mb-0 text-slate-700">
            For a better experience, download the BigBite app now
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <img
              className="w-28 md:w-40 h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Play Store"
            />
            <img
              className="w-28 md:w-40 h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="App Store"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white flex flex-wrap items-start pt-12 justify-around min-h-[31rem]">
        <div>logo</div>
        <div className="mb-24">
          <ul className="space-y-4">
            <li className="font-bold text-xl">Company</li>
            <li className="text-gray-400 font-semibold text-lg">About</li>
            <li className="text-gray-400 font-semibold text-lg">Careers</li>
            <li className="text-gray-400 font-semibold text-lg">Team</li>
          </ul>
        </div>
        <div className="space-y-16 mb-24">
          <ul className="space-y-4">
            <li className="font-bold text-xl">Contact us</li>
            <li className="text-gray-400 font-semibold text-lg">
              Help & Support
            </li>
            <li className="text-gray-400 font-semibold text-lg">
              Partner with us
            </li>
            <li className="text-gray-400 font-semibold text-lg">
              Ride with us
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="font-bold text-xl">Legal</li>
            <li className="text-gray-400 font-semibold text-lg">
              Terms & Conditions
            </li>
            <li className="text-gray-400 font-semibold text-lg">
              Cookie Policy
            </li>
            <li className="text-gray-400 font-semibold text-lg">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="mb-24">
          <ul className="space-y-4">
            <li className="font-bold text-xl">We deliver to</li>
            <li className="text-gray-400 font-semibold text-lg">Banglore</li>
            <li className="text-gray-400 font-semibold text-lg">Hyderabad</li>
            <li className="text-gray-400 font-semibold text-lg">Delhi</li>
            <li className="text-gray-400 font-semibold text-lg">Mumbai</li>
            <li className="text-gray-400 font-semibold text-lg">Pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
