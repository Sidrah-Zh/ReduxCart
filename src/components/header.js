import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { setSearchQuery } from "../redux/searchSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const cartCount = useSelector((state) => state.cartCount);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search);

  const list = useSelector((state) => state.fvrtlist);
  console.log(list);
  const favoritesCount = useSelector((state) => state.favoritesCount);

  useEffect(() => {
    const totalProductsInCart = cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart, dispatch]);

  return (
    <div>
      <div className="w-screen h-[48px] bg-black"></div>

      <div className="w-[1170px] h-[38px] left-[135px] gap-[148px] flex items-center space-x-2 justify-center mt-[2rem]">
        <div
          className="w-[118px] h-[24px] font-inter font-bold text-xl text-black"
          style={{ letterSpacing: "3%" }}
        >
          Exclusive
        </div>

        <ul className="flex space-x-2">
          <li
            className="w-[48px] h-[24px] font-poppins font-normal text-base  hover:underline cursor-pointer text-black text-center"
            style={{ letterSpacing: "3%" }}
          >
            <Link to="/">Home</Link>
          </li>
          <Link to="/products">
            <li
              className="w-[71px] h-[24px] cursor-pointer left-[-2px] font-poppins  hover:underline font-normal text-base text-black text-center"
              style={{ letterSpacing: "3%" }}
            >
              Products
            </li>
          </Link>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-200 rounded-md pt-[5px] pr-[12px] pb-[5px] pl-[20px]">
            <input
              className="bg-gray-200 text-black"
              type="text"
              placeholder="Search by product name..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              style={{ outline: "none" }}
            />
            <BsSearch className="w-[19px] h-[19px] font-bold text-2xl cursor-pointer" />
          </div>

          <div className="flex gap-2 relative">
            <div className="relative">
              <AiOutlineHeart className="font-bold text-3xl w-[30px] flex items-center space-x-4 cursor-pointer" />
              <div className="flex items-center justify-center">
                <span className="absolute top-0 right-0 w-[19px]  h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-center">
                  <span className="w-2 h-2 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                </span>
              </div>
            </div>

            <Link to="/checkout">
              <div className="relative">
                <BsCart3 className="font-bold text-3xl w-[30px] flex items-center space-x-4 cursor-pointer" />
                <div className="flex items-center justify-center">
                  <span className="absolute top-0 right-0 w-[19px]  h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-center">
                    <span className="w-2 h-2 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
