import React from 'react';

export default function ImageModal(props) {
  const setSelectedImg = props.setSelectedImg;
  const selectedImg = props.selectedImg;
  const deselectImg = (e) => {
    if (e.target.classList.contains('modal-overlay')
      || e.target.classList.contains('close-btn')
    ) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="product-modal fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-75"
          onClick={deselectImg}
        ></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="my-6 align-middle inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform">
          <div className="flex flex-wrap p-4">
            <img className="mx-auto max-h-screen rounded-lg" src={selectedImg} alt=""/>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="close-btn mt-3 w-full inline-flex justify-center rounded-md border border-blue shadow-sm px-4 py-2 bg-white text-base font-medium text-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={deselectImg}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
