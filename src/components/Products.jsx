import React from 'react';

import productsObj from '../assets/products-v2.json';

function Product(props) {
  const productData = props.productData;
  const setSelectedProduct = props.onClick;

  return (
    <div 
      className="w-full mb-6 border-2 border-blue rounded-lg shadow-lg" 
      onClick={() => setSelectedProduct(productData)}
    >
      <img className="mx-auto my-6 h-60 px-6" src={require("../assets/product/" + productData.productImage).default} alt={productData.productName} />
      <div className="p-4 h-32 bg-blue">
        <h5 className="text-2xl text-blue-100 font-extrabold capitalize">{productData.productName}</h5>
      </div>
    </div>
  );
}

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsObj,
      setSelectedProduct: props.setSelectedProduct
    };
  }

  render() {
    const setSelectedProduct = this.state.setSelectedProduct;
    const products = this.state.products.map((product, i) => {
      return (
        <Product 
          key={product.productName}
          productData={product} 
          onClick={setSelectedProduct}
        />
      );
    });

    return (
      <div className="Products">
        <div className="mb-6 py-3 border-b-2 border-blue">
          <h5 className="text-2xl text-blue font-extrabold">Our Products</h5>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products}
        </div>
      </div>
    );
  }  
}
