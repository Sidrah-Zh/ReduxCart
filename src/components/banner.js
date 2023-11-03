import React from "react";
import { Link } from "react-router-dom";
import Apple_logo from "../components/images/Apple_logo.png";
import Banner_image from "../components/images/mobile_banner.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className="w-[1000px] h-[344px] bg-black text-white  mx-auto mt-[2rem] flex justify-center items-center">
        <div className="mx-auto flex flex-col w-[17rem] h-[10rem] ">
          <div className="flex space-x-2 items-center">
            <img src={Apple_logo} alt="Apple Logo" />
            <p>iPhone 14 Series</p>
          </div>

          <div className="mx-auto">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "60px",
                letterSpacing: "4%",
              }}
            >
              Up to 10% off Vouchers
            </p>
          </div>

          <div className="flex space-x-2 items-center font-bold">
            <Link to="/products">
              <button>Shop Now</button>
            </Link>
            <AiOutlineArrowRight />
          </div>
        </div>

        <div>
          <img src={Banner_image} alt="Banner Image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
