import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { BsCart3 } from "react-icons/bs";
import { incrementCartCount } from "../redux/cartCountSlice";
import { setfvrtlist } from "../redux/favouriteSlice";
import {
  incrementFavoritesCount,
  decrementFavoritesCount,
} from "../redux/fvrtCountSlice";

const ProductCard = ({
  id,
  image,
  title,
  newPrice,
  oldPrice,
  discountInPercentage,
  isProductPage = false,
}) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cartCount);

  const handleAddToCart = () => {
    const product = {
      id,
      image,
      title,
      newPrice,
      oldPrice,
      discountInPercentage,
    };

    dispatch(addToCart(product));
    dispatch(incrementCartCount());
  };

  const handleFavorite = () => {
    dispatch(setfvrtlist(image));
    dispatch(incrementFavoritesCount());
  };
  return (
    <div className="pt-[3rem] relative flex flex-col items-start justify-start">
      <div className="max-w-md mx-auto bg-gray-200 shadow-lg w-[270px] h-[250px] relative">
        <div className="absolute top-2 left-2">
          <div className="bg-red-700 text-white px-2 py-1 rounded">
            {discountInPercentage}%
          </div>
        </div>

        {isProductPage && (
          <div className="absolute bottom-0 left-0 w-full">
            <button
              className="bg-black text-white flex justify-center items-center curso w-full h-[3rem]"
              onClick={handleAddToCart}
            >
              <BsCart3 />
              Add to Cart
            </button>
          </div>
        )}

        <div className="absolute top-2 right-2">
          <button
            className="bg-white hover-bg-red-700 p-1 rounded-full"
            onClick={handleFavorite}
          >
            <AiOutlineHeart className="text-2xl font-bold" />
          </button>
        </div>

        <img
          className="w-[200px] h-[200px] mx-[1rem] my-[1rem] "
          src={image}
          alt={title}
        />
      </div>

      <div className="text-center mt-2 ml-[30px]">
        <p>{title}</p>
        <p>
          <span className="text-red-700 font-bold">${newPrice}</span>{" "}
          <span className="text-gray line-through">${oldPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
