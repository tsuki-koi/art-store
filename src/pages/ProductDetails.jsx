import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { PuffLoader } from "react-spinners";
// components n context
import { LangContext } from "../context/LangContext";
import Breadcrumbs from "../components/others/Breadcrumbs";
// tools n utils
import slugify from "slugify";
import StaticLang from "../utils/StaticLang";
// assets
import photo from "../assets/images/product-image-test2.jpg";
import photo2 from "../assets/images/product-image-test.jpg";
import photo3 from "../assets/images/offer1.jpeg";
import {
  FaInstagram,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { slug } = useParams();
  const [findDataByTitle, setProduct] = useState(null);
  const products = useSelector((state) => state.products.items);
  const categories = useSelector((state) => state.categories.items);
  const brands = useSelector((state) => state.brands.items);
  const [lang] = useContext(LangContext);
  const [isLoggedIn] = useContext(LoginContext);
  const [quantity] = useState(1);
  const { addItem, updateItemQuantity, removeItem, getItem } = useCart();
  const { getWishlistItem, addWishlistItem, removeWishlistItem } =
    useWishlist();

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find(
        (p) => slugify(p.title_en, { lower: true }) === slug
      );
      setProduct(foundProduct);
    }
  }, [products]);

  if (!findDataByTitle) {
    return (
      <div className="d-flex justify-content-center p-5">
        <PuffLoader color="#38cb72" />
      </div>
    );
  } else {
    let newPrice = (
      findDataByTitle.price -
      (findDataByTitle.price * findDataByTitle.discountPercentage) / 100
    ).toFixed(2);

    const cartItem = getItem(findDataByTitle.id);
    const wishlistItem = getWishlistItem(findDataByTitle.id);

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

    const handleCartClick = (data, quantity) => {
      if (isLoggedIn === true) {
        addItem(data, quantity);
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
      <div className="product-details">
        {/* <Breadcrumbs currentPage={lang === "AZ" ? "Mağaza / "+findDataByTitle.title_az : "Shop / "+findDataByTitle.title_en} /> */}
        <Breadcrumbs
          currentPage={
            lang === "AZ" ? findDataByTitle.title_az : findDataByTitle.title_en
          }
        />
        <div className="main-con align-items-start">
          <div className="images">
            <img
              src={findDataByTitle.image}
              alt={
                <StaticLang
                  az={findDataByTitle.title_az}
                  en={findDataByTitle.title_en}
                />
              }
              data-aos="fade-right"
            />
            <img
              src={photo2}
              alt={
                <StaticLang
                  az={findDataByTitle.title_az}
                  en={findDataByTitle.title_en}
                />
              }
              data-aos="fade-left"
            />
            <img
              src={photo3}
              alt={
                <StaticLang
                  az={findDataByTitle.title_az}
                  en={findDataByTitle.title_en}
                />
              }
              data-aos="fade-right"
            />
          </div>

          <div className="info">
            <div className="top">
              <h1>
                <StaticLang
                  az={findDataByTitle.title_az}
                  en={findDataByTitle.title_en}
                />
              </h1>
              <div className="rating">
                <span className="stars">
                  {getStars(findDataByTitle.rating)}
                </span>
                <span className="number">({findDataByTitle.rating})</span>
              </div>
              <p className="price">
                ${newPrice} <span>${findDataByTitle.price}</span>
              </p>
            </div>

            <div className="center">
              <p className="desc">
                <StaticLang
                  az={findDataByTitle.description_az}
                  en={findDataByTitle.description_en}
                />
              </p>
              <div className="add-to-cart-con">
                <div>
                  {!cartItem ? (
                    <button
                      className="green-btn"
                      onClick={() => {
                        handleCartClick(findDataByTitle, quantity);
                      }}
                    >
                      <StaticLang az="Səbətə Əlavə Et" en="Add to Cart" />
                    </button>
                  ) : (
                    <div className="counter">
                      <button
                        onClick={() => {
                          if (cartItem.quantity > 1) {
                            updateItemQuantity(
                              findDataByTitle.id,
                              cartItem.quantity - 1
                            );
                          } else {
                            removeItem(findDataByTitle.id);
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>{" "}
                      {/* Показываем текущее количество */}
                      <button
                        onClick={() => {
                          updateItemQuantity(
                            findDataByTitle.id,
                            cartItem.quantity + 1
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="btns">
                {wishlistItem ? (
                  <button
                    className="wishlist"
                    onClick={() => {
                      removeWishlistItem(findDataByTitle.id);
                    }}
                  >
                    <IoMdHeart className="animate__animated animate__heartBeat" />
                    <StaticLang
                      az="İstək Siyahısından sil"
                      en="Remove from Wishlist"
                    />
                  </button>
                ) : (
                  <button
                    className="wishlist"
                    onClick={() => {
                      if (isLoggedIn === true) {
                        addWishlistItem(findDataByTitle);
                      } else {
                        Swal.fire({
                          icon: "warning",
                          title: "Sign in to use Wishlist!",
                          showConfirmButton: false,
                          timer: 2000,
                        });
                      }
                    }}
                  >
                    <IoMdHeartEmpty className="animate__animated animate__heartBeat" />
                    <StaticLang
                      az="İstək Siyahısına əlavə et"
                      en="Add to Wishlist"
                    />
                  </button>
                )}
                <div className="share">
                  <StaticLang az="Paylaş:" en="Share:" />
                  <LuFacebook />
                  <FaInstagram />
                  <FaTelegramPlane />
                  <FaWhatsapp />
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="add-info">
                <span>
                  <StaticLang az="Kateqoriya: " en="Category: " />
                </span>
                {categories ? (
                  lang === "AZ" ? (
                    categories.find(
                      (item) => item.id === findDataByTitle.category
                    ).title_az
                  ) : (
                    categories.find(
                      (item) => item.id === findDataByTitle.category
                    ).title_en
                  )
                ) : (
                  <span>Loading...</span>
                )}
              </div>

              <div className="add-info">
                <span>
                  <StaticLang az="Brend: " en="Brand: " />
                </span>
                {brands ? (
                  lang === "AZ" ? (
                    brands.find((item) => item.id === findDataByTitle.brand)
                      .title_az
                  ) : (
                    brands.find((item) => item.id === findDataByTitle.brand)
                      .title_en
                  )
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </div>

            <div className="bottom">
              <div className="add-info">
                <span>SKU:</span> {findDataByTitle.sku}
              </div>
              <div className="add-info">
                <span>
                  <StaticLang az="Göndərilmə:" en="Shipping:" />
                </span>{" "}
                <StaticLang
                  az={findDataByTitle.shippingInformation_az}
                  en={findDataByTitle.shippingInformation_en}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
