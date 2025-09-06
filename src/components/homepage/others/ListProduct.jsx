import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import photo from "../../assets/images/product-image-test2.jpg";
import StaticLang from "../../utils/StaticLang";
import slugify from "slugify";
import { IoMdHeartEmpty } from "react-icons/io";

const ListProduct = ({ img, title, desc, price, rating, discount }) => {
  const newPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className="card product">
      <div className="discount">{discount}%</div>
      {/* <div className="image">{img}</div> */}
      <div className="image">
        <img src={photo} alt="photo" />
        <div className="overlay"></div>
        <button>
          <IoMdHeartEmpty />
        </button>
      </div>
      <div className="text">
        <span className="title">{title}</span>
        <p className="desc">{desc}</p>
      </div>
      <div className="info">
        <div className="top">
          <span className="price">
            ${newPrice} <b>${price.toFixed(2)}</b>
          </span>
          <div className="rating">
            <span className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </span>
            <span className="number">{rating}</span>
          </div>
        </div>
        <div className="bottom">
          <button className="more">
            {/* <Link to={`/products/${slugify(product.title, {lower:true})}`}>More details</Link> */}
            <Link to={`/products/${slugify(title, { lower: true })}`}>
              <StaticLang az="Ətraflı məlumat" en="More details" />
            </Link>
          </button>
          <button className="cart">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
