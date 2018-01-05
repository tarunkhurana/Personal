import React, { Component } from 'react';
import ProductsContainer from "../containers/ProductsContainer";
import CartContainer from "../containers/CartContainer";
import './App.css';

const App=()=> {
    return (
      <div className="App">
        <h2>Shopping Cart</h2>
        <hr/>
        <ProductsContainer/>
        <CartContainer/>
      </div>
    );
}

export default App;
