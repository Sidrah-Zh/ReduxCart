import { v4 as uuidv4 } from "uuid";
import React from "react";
import ProductCard from "../components/productCard";
import jsondata from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { addMultipleToCart } from "../redux/cartSlice";
import {
  updateCartCount,
  incrementCartCount,
  decrementCartCount,
} from "../redux/cartCountSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch(addToCartAndIncrementCount(product));
  };
  const addToCartAndIncrementCount = (product) => {
    dispatch(addToCart(product));
    dispatch(incrementCartCount());
    dispatch(decrementCartCount());
  };
  const uniqueId = uuidv4();

  const moveAllToCart = () => {
    const allProducts = jsondata.map((product) => ({
      ...product,
      id: uuidv4(),
    }));
    console.log(allProducts);
    dispatch(addMultipleToCart(allProducts));

    const totalProductsInCart = allProducts.length;
    dispatch(updateCartCount(totalProductsInCart));
  };

  const totalProducts = jsondata.length;

  return (
    <div>
      <div className="flex justify-between items-center top-3 mx-7 p-4 font-bold">
        <div className="mt-4 px-4">Total Products({totalProducts})</div>
        <button
          className="mt-4 bg-white text-black hover.bg-black hover.text-white border border-black py-2 px-4 font-semibold"
          onClick={moveAllToCart}
        >
          Move All to Cart
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {jsondata.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            discountInPercentage={product.discountInPercentage}
            isProductPage={true}
            productData={product}
            addToCart={addToCartAndIncrementCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
