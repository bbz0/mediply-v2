import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap items-center mb-12 py-3 border-b-2 border-blue text-blue justify-between">
          <NavLink
            exact
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            activeClassName="bg-blue text-white"
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            exact
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            activeClassName="bg-blue text-white"
            to="/about"
          >
            About
          </NavLink>
          <a
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            href="https://tour.mediplyhemant.com/" 
            target="_blank" rel="noreferrer"
          >
            Dialycare Hemodialysis Center 360&deg; Tour
          </a>
          <a
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            href="https://tour2.mediplyhemant.com/" 
            target="_blank" rel="noreferrer"
          >
            Sta. Ana Hospital Dialysis Center 360&deg; Tour
          </a>
          <a
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            href="https://tour3.mediplyhemant.com/" 
            target="_blank" rel="noreferrer"
          >
            TrueCare Dialysis Center 360&deg; Tour
          </a>
          <a
            className="w-full px-3 py-3 text-center font-extrabold mb-3 sm:mb-0 rounded-lg" 
            href="https://mayontour.mediplyhemant.com/" 
            target="_blank" rel="noreferrer"
          >
            Mayon Kidney Care Center 360&deg; Tour
          </a>
        </div>
      </div>
    </nav>
  );
}
