import React, {useContext} from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { products, handleProducts } = useContext(ProductContext);
  return (
    <>
    {products}
      <div className="flow-root mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sepet</h2>
        <ul role="list" className="-my-6 mt-6 divide-y divide-gray-200">
          <li className="flex py-6 ">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Throwback Hip Bag</a>
                  </h3>
                  <p className="ml-4">$90.00</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Salmon</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty 1</p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cart;
