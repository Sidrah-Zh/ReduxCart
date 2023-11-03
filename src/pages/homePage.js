import React, { useState } from "react";
import Banner from "../components/banner";
import ProductCard from "../components/productCard";
import jsondata from "../data.json";

const HomePage = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  const displayedProducts = showAllProducts ? jsondata : jsondata.slice(0, 4);
  console.log(displayedProducts);
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-4 p-4">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            discountInPercentage={product.discountInPercentage}
          />
        ))}
      </div>
      {!showAllProducts && (
        <div className="text-center pt-[3rem] pb-[4rem]">
          <button
            onClick={toggleShowAllProducts}
            className="hover:bg-white hover:text-red-700 font-bold  bg-red-700 text-white px-5 py-3"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
