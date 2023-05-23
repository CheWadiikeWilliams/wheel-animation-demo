import { createContext } from 'react';
import ProductFeatures from "./components/templates/ProductFeatures";
import { ProductStore } from "store/product/productStore";
import { AppStore } from 'store/appStore';
import { PRODUCT_DATA } from "./data";
import './App.scss';

export const AppContext = createContext(
  AppStore.create({
    product: ProductStore.create(PRODUCT_DATA)
  })
);

function App() {
  return (
    <ProductFeatures />
  )
}

export default App;
