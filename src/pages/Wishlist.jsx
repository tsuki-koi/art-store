import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
// components n utils
import Breadcrumbs from "../components/others/Breadcrumbs";
import { LangContext } from "../context/LangContext";
import StaticLang from "../utils/StaticLang";
import Swal from "sweetalert2";
// assets
import photo from "../assets/images/product-image-test2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";

const Cart = () => {
  const [lang] = useContext(LangContext);

  const { addItem, inCart } = useCart();

  const {
    isWishlistEmpty,
    items,
    removeWishlistItem,
    inWishlist,
    addWishlistItem,
  } = useWishlist();

  // const cartEmptyAlert = () => {
  //   Swal.fire({
  //     title:
  //       lang === "EN" ? "Empty the cart?" : "Səbəti boşaltmaq istəyirsiniz?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#489979",
  //     cancelButtonColor: "#888",
  //     confirmButtonText: lang === "EN" ? "Yes!" : "Bəli!",
  //     cancelButtonText: lang === "EN" ? "Cancel" : "Imtina",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       emptyCart();
  //       Swal.fire({
  //         title: lang === "EN" ? "Empty!" : "Boşaldıldı!",
  //         text:
  //           lang === "EN"
  //             ? "Go shopping for smth else"
  //             : "Başqa bir şey almağa davam edin",
  //         icon: "success",
  //         confirmButtonColor: "#489979",
  //       });
  //     }
  //   });
  // };

  const subtotal = (item) => {
    return (item.price - (item.price * item.discountPercentage) / 100).toFixed(
      2
    );
  };

  if (isWishlistEmpty)
    return (
      <div className="cart-wishlist">
        <Breadcrumbs currentPage={lang === "AZ" ? "İstək Siyahısı" : "Wishlist"} />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>
            <StaticLang
              en="Your wishlist is currently empty"
              az="İstək Siyahınız hazırda boşdur"
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
      <Breadcrumbs
        currentPage={lang === "AZ" ? "İstək Siyahısı" : "Wishlist"}
      />
      <h1>
        <StaticLang en="Wishlist" az="İstək Siyahısı" />
      </h1>
      <Row className="cart-inner d-flex align-items-start justify-content-between">
        <Col sm={12} md={12} lg={12} xl={12} className="mb-4 px-5">
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
                  <StaticLang en="Stock Status" az="Miqdar" />
                </th>
                <th scope="col" width={200}></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center">
                    <img
                      src={photo}
                      alt={item.title_az}
                      width={80}
                      height={80}
                    />
                    <div className="title mx-3">
                      <StaticLang en={item.title_en} az={item.title_az} />
                    </div>
                  </td>
                  <td>
                    ${subtotal(item)}
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                      className="mx-2"
                    >
                      ${item.price}
                    </span>
                  </td>
                  <td style={{fontWeight: '500'}}>
                    {{
                      1: <span style={{color: 'green'}}><StaticLang az='Mövcuddur' en="In Stock"/></span>,
                      2: <span style={{color: 'orange'}}><StaticLang az='Az sayda' en="Low Stock"/></span>,
                      3: <span style={{color: 'red'}}><StaticLang az='Tükənib' en="Out of Stock"/></span>,
                    }[item.availabilityStatus] || "Unknown Status"}
                  </td>
                  <td>
                    <button className="green-btn add-to-cart" onClick={()=>{if (!inCart(item.id)) {addItem(item)}}}>Add to Cart <FiShoppingCart /></button>
                  </td>
                  <td>
                    <button onClick={() => removeWishlistItem(item.id)}>
                      <IoTrashOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
