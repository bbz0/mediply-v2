import React from 'react';
import ReactHtmlParser from 'html-react-parser';

export default function Modal(props) {
  const selectedProduct = props.selectedProduct;
  const setSelectedProduct = props.setSelectedProduct;
  const deselectProduct = (e) => {
    if (e.target.classList.contains('modal-overlay')
      || e.target.classList.contains('close-btn')
    ) {
      setSelectedProduct(null);
    }
  };

  return (
    <div className="product-modal fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-75"
          onClick={deselectProduct}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="sm:w-5/6 md:w-3/4 lg:w-5/6 2xl:w-1/2 align-middle inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform">
          <div className="flex flex-wrap">
            <div className="bg-white w-full lg:w-1/3">
              <img 
                className="mx-auto p-6" 
                src={require("../assets/product/" + selectedProduct.productImage).default} 
                alt={selectedProduct.productName} 
              />
            </div>
            <div className="flex flex-col w-full lg:w-2/3 p-4 sm:px-6">
              <h3 className="text-xl lg:text-3xl font-bold text-blue" id="modal-title">
                {selectedProduct.productName}
              </h3>
              <div className="mt-6 leading-relaxed text-sm text-gray-700">
                {ReactHtmlParser(selectedProduct.productDetail)}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="close-btn mt-3 w-full inline-flex justify-center rounded-md border border-blue shadow-sm px-4 py-2 bg-white text-base font-medium text-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={deselectProduct}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
