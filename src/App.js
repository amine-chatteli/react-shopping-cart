import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Banner from './Banner';
import ProductList from './ProductList'


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <ProductList />
    </div>
  );
}

export default App;
