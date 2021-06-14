import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="flex flex-wrap mb-12 py-3 border-b-2 border-blue text-blue sm:space-x-4">
          <NavLink
            exact
            className="w-full sm:w-min px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            activeClassName="bg-blue text-white"
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            exact
            className="w-full sm:w-min px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            activeClassName="bg-blue text-white"
            to="/about"
          >
            About
          </NavLink>
          <a
            className="w-full sm:w-min px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            href="https://tour.mediplyhemant.com/" 
            target="_blank" rel="noreferrer"
          >
            Tour
          </a>
        </div>
      </div>
    </nav>
  );
}
