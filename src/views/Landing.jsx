import React from 'react';
import products from '../assets/products.json';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  render() {
    const products = this.state.products.map((product, i) => {
      return (
        <div className="w-full mb-6 border-2 border-blue rounded-lg shadow-lg" key={product.name}>
          <img className="mx-auto my-6 h-60 px-6" src={product.file} alt={product.name} />
          <div className="p-4 h-32 bg-blue">
            <h5 className="text-2xl text-blue-100 font-extrabold">{product.name}</h5>
          </div>
        </div>
      );
    });

    return products;
  }  
}

export default function Landing() {
  return (
    <main>
      <div className="container mx-auto h-full px-6 mt-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 mb-6">
            <img className="w-1/2 max-w-xs mx-auto" src="/assets/logo/Mediply-logo-02.png" alt="Mediply Logo"/>
          </div>
          <div className="w-full sm:w-1/2">
            <img className="w-3/4 max-w-md mx-auto" src="/assets/logo/hemant-logo-01.png" alt="Hemant Logo"/>
          </div>
        </div>
        <h1 className="my-14 text-center text-4xl sm:text-5xl lg:text-6xl text-blue font-extrabold tracking-tight">
          Serving For <br />Better Life Care
        </h1>

        <div className="mb-6 py-3 border-b-2 border-blue">
          <h5 className="text-2xl text-blue font-extrabold">Our Products</h5>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Product />
        </div>
      </div>
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
    </main>
  );
}
