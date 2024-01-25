import { createContext, useState } from "react";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  function handleProduct(product) {
    let localCart = JSON.parse(localStorage.getItem("products")) ?? [];
    let itemIndex = localCart.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localCart = localCart.filter((item) => item.id !== product.id);
    } else {
      localCart.push({ id: product.id });
    }

    localStorage.setItem("products", JSON.stringify(localCart));
    console.log(localCart);
  }

  return (
    <ProductContext.Provider value={{ handleProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
export { ProductContextProvider, ProductContext };
