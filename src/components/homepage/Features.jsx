import React, { useContext } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosChatbubbles, IoMdGift } from "react-icons/io";
import { LuTruck } from "react-icons/lu";
import { ModeContext } from "../../context/ModeContext";

const Features = () => {
  const [mode] = useContext(ModeContext);

  return (
    <section className={`features ${mode}`}>
      <div className="feature">
        <LuTruck />
        <div className="text">
          <p>Fast Delivery</p>
          <span>For All Orders Over $120</span>
        </div>
      </div>
      <div className="feature">
        <FaRegCreditCard />
        <div className="text">
          <p>Safe Payments</p>
          <span>100% Secure Payment</span>
        </div>
      </div>
      <div className="feature">
        <IoMdGift />
        <div className="text">
          <p>Discount Coupons</p>
          <span>Enjoy Huge Promotions</span>
        </div>
      </div>
      <div className="feature">
        <IoIosChatbubbles />
        <div className="text">
          <p>Quality Support</p>
          <span>Dedicated 24/7 support</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
