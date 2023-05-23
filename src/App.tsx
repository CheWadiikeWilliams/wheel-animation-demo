import React from 'react';
import ProductFeatures from "./components/templates/ProductFeatures";
import { PRODUCT_DATA } from "./data";
import './App.scss';

function App() {
  return (
    <ProductFeatures items={PRODUCT_DATA.features} />
  )
}

export default App;
