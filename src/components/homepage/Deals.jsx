import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Swal from "sweetalert2";
// components
import WeeklyCountdown from "./WeeklyCountdown";
import SingleProduct from "../others/SingleProduct";
// assets
import "react-multi-carousel/lib/styles.css";
import photo from "../../assets/images/offer2.jpg";
import { ModeContext } from "../../context/ModeContext";

const Deals = () => {
  const [mode] = useContext(ModeContext);

  const products = useSelector((state) => state.products.items);

  function getEndOfWeek() {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let daysUntilSunday = 7 - dayOfWeek;
    let endOfWeek = new Date(now);

    endOfWeek.setDate(now.getDate() + daysUntilSunday);
    endOfWeek.setHours(23, 59, 59, 999);

    return endOfWeek.getTime();
  }

  let d,
    h,
    m,
    s = 0;

  function startTimer() {
    function updateTimer() {
      let now = new Date().getTime();
      let timeLeft = getEndOfWeek() - now;

      d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      s = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }

    let interval = setInterval(updateTimer, 1000);
    updateTimer();
  }

  startTimer();

  const wishlistAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Product added to wishlist",
      confirmButtonColor: "#d87093",
      iconColor: "#4a9d7c89",
    });
  };

  const cartAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Product added to cart",
      confirmButtonColor: "#d87093",
      iconColor: "#4a9d7c89",
    });
  };

  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 1,
    },
    l: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    m: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 1,
    },
    s: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    xs: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  if (products) {
    return (
      <section className={`deals py-5 ${mode}`}>
        <div className="top">
          <div className="text pb-2">
            <h1 data-aos="zoom-in-right" data-aos-duration="700">
              Deals Of The Week
            </h1>
            <WeeklyCountdown />
          </div>
          <Link
            to={"/shop"}
            onClick={() => window.scrollTo({ top: "400", behavior: "smooth" })}
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <button>View All</button>
          </Link>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          autoPlay={true}
          autoPlaySpeed={5000}
          // removeArrowOnDeviceType={["xl", "l", "m", "s", "xs"]}
          className="py-4"
        >
          <SingleProduct data={products[0]} price={products[0].price} discount={products[0].discountPercentage} />
          <SingleProduct data={products[1]} price={products[1].price} discount={products[1].discountPercentage} />
          <SingleProduct data={products[2]} price={products[2].price} discount={products[2].discountPercentage} />
          <SingleProduct data={products[3]} price={products[3].price} discount={products[3].discountPercentage} />
          <SingleProduct data={products[4]} price={products[4].price} discount={products[4].discountPercentage} />
          <SingleProduct data={products[5]} price={products[5].price} discount={products[5].discountPercentage} />

        </Carousel>
      </section>
    );
  }
};

export default Deals;
