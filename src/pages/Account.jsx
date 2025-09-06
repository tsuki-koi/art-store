import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "../components/others/Breadcrumbs";
import StaticLang from "../utils/StaticLang";
import { LangContext } from "../context/LangContext";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Details from "../components/account/Details";
import Dashboard from "../components/account/Dashboard";
import AddProduct from "../components/account/AddProduct";
import EditProduct from "../components/account/EditProduct";

const Account = () => {
  const [lang] = useContext(LangContext);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const [key, setKey] = useState(isAdmin ? "dashboard" : "details");

  const { emptyCart } = useCart();
  const { emptyWishlist } = useWishlist();

  const logOut = () => {
    localStorage.removeItem("activeUser");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");
    emptyCart();
    emptyWishlist();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  }, [isLoggedIn]);

  if (isLoggedIn === true) {
    return (
      <div className="account">
        <Breadcrumbs currentPage={lang === "AZ" ? "Hesab" : "Account"} />
        <h1>
          <StaticLang en="My Account" az="Mənim Hesabım" />
        </h1>

        <Row className="main-con">
          <Col xs={12} lg={4} className="side-con">
            <Nav
              variant="pills"
              defaultActiveKey={isAdmin ? "dashboard" : "details"}
              onSelect={(k) => setKey(k)}
              className="tabs container"
            >
              {isAdmin && (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="dashboard">
                      <StaticLang az="İdarə paneli" en="Dashboard" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="add-product">
                      <StaticLang az="Məhsul əlavə et" en="Add Product" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="edit-product">
                      <StaticLang az="Məhsul redaktə et" en="Edit Product" />
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
              <Nav.Item>
                <Nav.Link eventKey="details">
                  <StaticLang az="Hesab detalları" en="Account Details" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <button className="green-btn" onClick={logOut}>
              <StaticLang az="Hesabdan Çıxış" en="Log Out" />
            </button>
          </Col>

          <Col xs={12} lg={7} className="view-tab container">
            <Tabs activeKey={key}>
              <Tab eventKey="dashboard">
                <Dashboard />
              </Tab>
              <Tab eventKey="add-product">
                <AddProduct />
              </Tab>
              <Tab eventKey="edit-product">
                <EditProduct />
              </Tab>
              <Tab eventKey="details">
                <Details />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Account;
