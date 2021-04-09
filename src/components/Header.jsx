import React from 'react';

import mediplyLogo from '../assets/logo/Mediply-logo-02.png';
import hemantLogo from '../assets/logo/hemant-logo-01.png';

export default function Header() {
  return (
    <header className="header">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 mb-6">
          <img className="w-1/2 max-w-xs mx-auto" src={mediplyLogo} alt="Mediply Logo"/>
        </div>
        <div className="w-full sm:w-1/2">
          <img className="w-3/4 max-w-md mx-auto" src={hemantLogo} alt="Hemant Logo"/>
        </div>
      </div>
      <h1 className="my-14 text-center text-4xl sm:text-5xl lg:text-6xl text-blue font-extrabold tracking-tight">
        Serving For <br />Better Life Care
      </h1>
    </header>
  );
}
