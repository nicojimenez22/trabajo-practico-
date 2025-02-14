import React from 'react';
import ProductList from './components/productList'; // Asegúrate de usar la misma capitalización del archivo
import  Navbar from './components/navbar';
import Carousel from './components/hero';
import AgregarProducto from './components/agregarProductos';

const App = () => {
  return (
    <>
    <div>
      < Navbar/>
    </div>
    <div>
      <Carousel/>
    </div>
    <div>
      <ProductList/>
    </div>
    <div>
      <AgregarProducto/>
    </div>
    </>
  );
};

export default App;