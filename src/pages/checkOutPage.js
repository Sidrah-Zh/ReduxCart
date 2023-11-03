import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeAllFromCart } from "../redux/cartSlice";
import { updateQuantity, calculateSubtotal } from "../redux/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { decrementCartCount } from "../redux/cartCountSlice";
import { resetCartCount } from "../redux/cartCountSlice";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import { useRef } from "react";
import jsPDF from "jspdf";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
    dispatch(decrementCartCount());
  };

  const handleRemoveAllItems = () => {
    dispatch(removeAllFromCart());
    dispatch(resetCartCount());
  };

  const handleDownloadReceipt = () => {
    const input = document.getElementById("receipt");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [210, 297],
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("receipt.pdf");
    });
  };

  const handleQuantityChange = (item, quantity) => {
    dispatch(updateQuantity({ itemId: item.id, quantity: parseInt(quantity) }));
  };

  return (
    <>
      <div className="flex gap-0 mt-8">
        <h2 className="text-xl mx-1 text-gray-600 mb-4 ml-7 mt-4">
          <Link to="/">Home</Link>
        </h2>
        <h2 className="text-xl font-semibold mb-4 mt-4">/ Cart</h2>
      </div>
      <div className="checkout-page bg-white min-h-screen p-6 h-[356px]  ">
        <div className="cart-header flex space-between ml-[4rem] bg-white rounded-lg shadow-md shadow-gray-300 p-2 px-[25px]  mx-[4rem] mb-[2rem] mr-[5rem] ">
          <div className="info-label ">Product</div>
          <div className="info-label ml-[10rem]">Price</div>
          <div className="info-label ml-[10rem]">Quantity</div>
          <div className="info-label ml-[10rem]">Subtotal</div>
        </div>

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="cart-item flex space-between  bg-white rounded-lg shadow-md shadow-gray-300 p-2 px-[25px] mx-[4rem] mb-[2rem]  mr-[5rem]"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="item-details  flex space-between  ">
              <div className="item-info   flex justify center items-center relative">
                <div className="item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="50"
                    height="50"
                  />
                  {hoveredItem === item && (
                    <button
                      className="absolute top-0 left-0 text-red-600 hover:text-red-700 font-medium"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <RxCross2 />
                    </button>
                  )}
                </div>
                <div className="info-value ">{item.title}</div>
                <div className="info-value ml-[8rem]">${item.newPrice}</div>
                <div className="info-value ml-[10rem] ">
                  <select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((quantity, index) => (
                      <option key={index} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="info-value ml-[11rem]">
                  ${item.newPrice * item.quantity}
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center mt-4   mb-[2rem] ml-[6rem] ">
            <Link to="/products">
              <button className="mt-4 bg-white text-black hover-bg-black hover-text-white border border-black py-2 px-4  font-semibold">
                Return to Products
              </button>
            </Link>
          </div>
          <div>
            <button
              onClick={handleRemoveAllItems}
              className=" hover-bg-black hover-text-white mr-[6rem] bg-white text-black border  border-black py-2 px-4 font-semibold"
            >
              Remove All
            </button>
          </div>
        </div>

        <div
          className="w-[350px] h-1350 absolute top-16294 left-56636 bg-white mt-6 p-6 border border-gray-400"
          id="receipt"
        >
          <div>
            <h3 className="text-2xl font-medium font-poppins font-weight-500">
              CartTotal
            </h3>
            <div className="flex gap-[12rem] mt-3">
              <h3 className="text-sm font-medium font-poppins">Subtotal</h3>
              <h3 className="text-sm font-medium font-poppins">
                {" "}
                $
                {cartItems.reduce(
                  (total, item) => total + item.newPrice * item.quantity,
                  0
                )}
              </h3>
            </div>
            <hr className="border-t border-gray-400 my-3" />
            <div className="flex gap-[12rem]">
              <h3 className="text-sm font-medium font-poppins">Shipping:</h3>
              <h3 className="text-sm font-medium font-poppins">Free</h3>
            </div>
            <hr className="border-t border-gray-400 my-3" />
            <div className="flex gap-[14rem]">
              <h3 className="text-sm font-medium font-poppins">total</h3>
              <h3 className="text-sm font-medium font-poppins">
                {" "}
                $
                {cartItems.reduce(
                  (total, item) => total + item.newPrice * item.quantity,
                  0
                )}
              </h3>{" "}
            </div>
          </div>
          <div className="ml-5">
            {" "}
            <button
              onClick={handleDownloadReceipt}
              className="bg-red-600 my-3 hover-bg-white hover-text-red-600 text-white py-2 px-4 ml-4 mt-6 font-semibold"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
