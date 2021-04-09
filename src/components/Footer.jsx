import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue">
      <div className="container mx-auto px-6 py-6">
        <h4 className="mb-6 text-2xl text-blue-100 font-extrabold">Contact Us</h4>

        <div className="flex flex-wrap">
          <div className="mb-6 w-full sm:w-1/2 lg:w-1/3">
            <h6 className="text-md text-blue-100 font-medium">Address</h6>
            <span className="text-md text-blue-100 font-bold">20 Empress Road, Bgy. San Isidro <br />Antipolo City</span>
          </div>

          <div className="mb-6 w-full sm:w-1/2 lg:w-1/3">
            <h6 className="text-md text-blue-100 font-medium">Company Phone Number</h6>
            <span className="text-md text-blue-100 font-bold">
              6686659<br />
              09174698064<br />
              09997875915<br />
            </span>
          </div>

          <div className="mb-6 w-full sm:w-1/2 lg:w-1/3">
            <h6 className="text-md text-blue-100 font-medium">Email Address</h6>
            <span className="text-md text-blue-100 font-bold">info.mediply@gmail.com</span>
          </div>
        </div>

        <div className="pt-6 border-t-2">
          <span className="text-sm text-blue-100">Copyright Mediply, Hemant Philippines 2021</span>
        </div>
      </div>
    </footer>
  );
}
