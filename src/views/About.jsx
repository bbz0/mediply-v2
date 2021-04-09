import React, { useState } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import mediplyLogo from '../assets/logo/Mediply-logo-02.png';
import hemantLogo from '../assets/logo/hemant-logo-01.png';
import ImageModal from '../components/ImageModal';

export default function About() {
  const [ selectedImg, setSelectedImg ] = useState(null);
  const images = require.context('../assets/center', false).keys().map((img) => img.replace('./', ''));

  const imgDisplay = images.map((img) => {
    return (
      <div key={img} className="mb-6 w-full bg-blue rounded-lg h-60 overflow-hidden" onClick={() => setSelectedImg(require("../assets/center/" + img).default)}>
        <img className="object-center" src={require("../assets/center/" + img).default} alt={img} />
      </div>
    );
  });

  return (
    <main>
      <div className="container mx-auto h-full px-6 mt-8">
        <Nav />
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 mb-6">
            <img className="w-1/2 max-w-xs mx-auto" src={mediplyLogo} alt="Mediply Logo"/>
          </div>
          <div className="w-full sm:w-1/2">
            <img className="w-3/4 max-w-md mx-auto" src={hemantLogo} alt="Hemant Logo"/>
          </div>
        </div>
        <h1 className="my-14 text-center text-4xl sm:text-5xl lg:text-6xl text-blue font-extrabold tracking-tight">
          About Us
        </h1>
        <div className="mx-auto lg:w-3/4 xl:w-1/2 mb-12 leading-relaxed text-gray-700">
          <p className="mb-4"><strong>MEDIPLY</strong> is a company that specializes in setting up turn-key Hemodialysis Centers since 2013. It currently has an exclusive partnership with <strong>HEMANT SURGICAL India</strong>, a leading importer, exporter and manufacturer of Health Care products since 1985. Hemant is an ISO, CE and GMP certified company.</p>
          <p>Mediply Inc. is the principal distributor of their products in the Philippines and USA.</p>
        </div>
        <div className="mb-6 py-3 border-b-2 border-blue">
          <h5 className="text-2xl text-blue font-extrabold">Our Dialysis Centers</h5>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imgDisplay}
        </div>
      </div>
      <Footer />
      {selectedImg && <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </main>
  );
}
