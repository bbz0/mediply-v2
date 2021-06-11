import React, { useState } from 'react';

import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Nav from '../components/Nav';

export default function Landing() {
  const [selectedProduct, setSelectedProduct] = useState(false);
  return (
    <main>
      <div className="container mx-auto h-full px-6 mt-8">
        <Nav />
        <Header />        
        <Products setSelectedProduct={setSelectedProduct} />
      </div>
      <Footer />
      {selectedProduct && <Modal selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />}
    </main>
  );
}
