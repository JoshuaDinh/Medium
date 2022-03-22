import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between p-5 max-w-7xl mx-auto items-center">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="Medium Logo"
          />
        </Link>
        <ul className="hidden md:inline-flex items-center space-x-5">
          <li>About</li>
          <li>Contact</li>
          <li className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-5 text-green">
        <button>Sign In</button>
        <button className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
