import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";
import StaticLang from "../utils/StaticLang";
import Breadcrumbs from "../components/others/Breadcrumbs";
import Swal from "sweetalert2";
// assets
import photo from "../assets/images/product-image-test2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { LoginContext } from "../context/LoginContext";
import supabase from "../utils/supabase";
import { useSelector } from "react-redux";

const Cart = () => {
  const [lang] = useContext(LangContext);
  const [isLoggedIn] = useContext(LoginContext);
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const [cartContent, setCartContent] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const products = useSelector((state) => state.products.items);

  const {
    isEmpty,
    cartTotal,
    emptyCart,
    items,
    updateItemQuantity,
    removeItem,
    addItem
  } = useCart();

  const handlePromocode = () => {
    
  }

  const subtotal = (item) => {
    return (item.price - (item.price * item.discountPercentage) / 100).toFixed(
      2
    );
  };

  const cartEmptyAlert = () => {
    Swal.fire({
      title:
        lang === "EN" ? "Empty the cart?" : "Səbəti boşaltmaq istəyirsiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#489979",
      cancelButtonColor: "#888",
      confirmButtonText: lang === "EN" ? "Yes!" : "Bəli!",
      cancelButtonText: lang === "EN" ? "Cancel" : "Imtina",
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
        Swal.fire({
          title: lang === "EN" ? "The cart is now empty!" : "Səbət boşaldıldı!",
          icon: "success",
          confirmButtonColor: "#489979",
        });
      }
    });
  };

  if (isEmpty)
    return (
      <div className="cart-wishlist">
        <Breadcrumbs currentPage={lang === "AZ" ? "Səbət" : "Cart"} />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>
            <StaticLang
              en="Your cart is currently empty"
              az="Səbətiniz hazırda boşdur"
            />
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDdhc2JldHQ1b3h4YnloMTFiNWUzMjBzdTJ3amg3eTJzZTBnc2k2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rrrGptmGDT4aHeFbGR/giphy.gif"
              alt="empty cart"
              width={200}
            />
          </h1>
          <Link to="/shop">
            <button className="green-btn">
              <StaticLang en="Go Shopping" az="Alış-verişə davam et" />{" "}
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="cart-wishlist">
      <Breadcrumbs currentPage={lang === "AZ" ? "Səbət" : "Cart"} />
      <h1>
        <StaticLang en="Cart" az="Səbət" />
      </h1>

      <Row className="cart-inner d-flex align-items-start justify-content-between">
        <Col sm={12} md={12} lg={12} xl={8} className="mb-4 px-5">
          <div className="bottom">
            <form onSubmit={handlePromocode}>
              <input
                type="text"
                placeholder={lang === "AZ" ? "Kupon Kodu" : "Coupon Code"}
              />
              <button type="submit" className="green-btn">
                <StaticLang en="Apply Coupon" az="Kuponu tətbiq et" />
              </button>
            </form>
            <button
              className="green-btn delete-btn btn"
              onClick={cartEmptyAlert}
            >
              <StaticLang en="Empty cart" az="Səbəti boşalt" />
              <IoTrashOutline />
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th scope="col">
                  <StaticLang en="Product" az="Məhsul" />
                </th>
                <th scope="col" width={150}>
                  <StaticLang en="Price" az="Qiymət" />
                </th>
                <th scope="col" width={150}>
                  <StaticLang en="Quantity" az="Miqdar" />
                </th>
                <th scope="col" width={150}>
                  <StaticLang en="Subtotal" az="Ara Cəm" />
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center">
                    <img src={photo} alt={item.title_az} width={80} />
                    <div className="title mx-3">
                      <StaticLang en={item.title_en} az={item.title_az} />
                    </div>
                  </td>
                  <td>
                    ${subtotal(item)}
                    <div
                      style={{ textDecoration: "line-through", color: "gray" }}
                      className="mx-2"
                    >
                      ${item.price}
                    </div>
                  </td>
                  <td>
                    <span className="counter">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                        }
                      >
                        -
                      </button>
                      <div className="number">{item.quantity}</div>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                        }
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td>
                    ${(subtotal(item) * item.quantity).toFixed(2)}
                    <div
                      style={{ textDecoration: "line-through", color: "gray" }}
                      className="mx-2"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>
                      <IoTrashOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>

        <Col
          sm={12}
          md={12}
          lg={12}
          xl={4}
          className="cart-totals d-flex flex-column"
        >
          <div className="top">
            <h3>
              <StaticLang en="Cart Totals" az="Səbət cəmi" />
            </h3>
          </div>
          <div className="content d-flex flex-column">
            <div className="con-row d-flex align-items-start">
              <h4>
                <StaticLang en="Subtotal" az="Ara Cəm" />
              </h4>
              <p>{cartTotal}$</p>
            </div>
            <div className="con-row total d-flex align-items-start">
              <h4>
                <StaticLang en="Total" az="Cəmi" />
              </h4>
              <p>{cartTotal}$</p>
            </div>
            <Link to="/cart/checkout">
              <button className="green-btn">
                <StaticLang en="Proceed to Checkout" az="Ödənişə keçin" />
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
