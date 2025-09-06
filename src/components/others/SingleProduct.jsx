import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useSelector } from "react-redux";
import { useWishlist } from "react-use-wishlist";
// utils
import slugify from "slugify";
import { LangContext } from "../../context/LangContext";
import { LoginContext } from "../../context/LoginContext";
import StaticLang from "../../utils/StaticLang";
import { toast, Zoom } from "react-toastify";
import Swal from "sweetalert2";
// assets
import photo from "../../assets/images/product-image-test2.jpg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const SingleProduct = ({ data, price, discount }) => {
  const [lang] = useContext(LangContext);
  const { addItem } = useCart();
  const categories = useSelector((state) => state.categories.items);
  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
    inWishlist,
    addWishlistItem,
  } = useWishlist();
  const [isLoggedIn] = useContext(LoginContext);

  const newPrice = (price - (price * discount) / 100).toFixed(2);

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  const addToCart = (data) => {
    addItem(data);
    toast.success(
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={data.image}
          alt="Product"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        {lang === "AZ"
          ? `${data.title_az} səbətə əlavə edildi.`
          : `${data.title_en} has been added to the cart.`}
      </div>,
      {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        progress: undefined,
        icon: false,
      }
    );
  };

  const addToWishlist = (data) => {
    if (isLoggedIn === true) {
      if (inWishlist(data.id)) {
        removeWishlistItem(data.id);
        toast(
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={data.image}
              alt="Product"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {lang === "AZ"
              ? `${data.title_az} istək siyahısından silindi.`
              : `${data.title_en} has been removed from the wishlist.`}
          </div>,
          {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            progress: undefined,
            icon: false,
            transition: Zoom,
          }
        );
      } else {
        addWishlistItem(data);
        toast(
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={data.image}
              alt="Product"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {lang === "AZ"
              ? `${data.title_az} istək siyahısına əlavə edildi.`
              : `${data.title_en} has been added to the wishlist.`}
          </div>,
          {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            progress: undefined,
            icon: false,
            transition: Zoom,
          }
        );
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Sign in to use Wishlist!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleCartClick = (data) => {
    if (isLoggedIn === true) {
      addToCart(data);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Sign in to use Cart!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="card product">
      <div className="discount">{discount}%</div>
      <div className="image">
        <img
          src={data.image}
          alt={lang === "AZ" ? data.title_az : data.title_en}
        />
        <div className="overlay"></div>
        <button
          onClick={() => {
            addToWishlist(data);
          }}
        >
          {inWishlist(data.id) ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
      </div>
      <div className="text">
        <span className="title">{lang === "AZ" ? data.title_az : data.title_en}</span>
        <span className="cat">
          {categories && categories.find((item) => item.id === data.category)
            ? lang === "AZ"
              ? categories.find((item) => item.id === data.category).title_az
              : categories.find((item) => item.id === data.category).title_en
            : ""}
        </span>
        <p className="desc">{lang === "AZ" ? data.description_az : data.description_en}</p>
      </div>
      <div className="info">
        <div className="top">
          <span className="price">
            ${newPrice}
            <b>${price.toFixed(2)}</b>
          </span>
          <div className="rating">
            <span className="stars">{getStars(data.rating)}</span>
            <span className="number">{data.rating}</span>
          </div>
        </div>
        <div className="bottom">
          <button className="more">
            {/* <Link to={`/products/${slugify(product.title, {lower:true})}`}>More details</Link> */}
            <Link to={`/shop/${slugify(data.title_en, { lower: true })}`}>
              <StaticLang az="Ətraflı məlumat" en="More details" />
            </Link>
          </button>
          <button
            className="cart"
            onClick={() => {
              handleCartClick(data);
            }}
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
