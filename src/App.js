import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Banner from './Banner';
import ProductList from './ProductList'
import Cart from './Cart'



function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <ProductList />
     <Cart />
    </div>
  );
}

export default App;
