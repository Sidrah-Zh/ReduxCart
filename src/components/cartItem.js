import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item flex items-center bg-white rounded-lg shadow-md p-2 mb-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="item-details ml-4">
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
