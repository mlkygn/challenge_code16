import React,{useContext} from "react";
import Products from "../Products";
import { ProductContext } from "../context/ProductContext";

function Main() {
  const productsList = Products;
  const { products, handleProduct } = useContext(ProductContext);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ürünler
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
            {productsList.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">{product.product_name}</a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {" "}
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    $ {product.price}
                  </p>
                </div>
                <button onClick={handleProduct(product)} className="rounded-full bg-amber-300 hover:bg-amber-100 px-2 py-1">
                  Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
