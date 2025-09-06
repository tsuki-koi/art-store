import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StaticLang from "../utils/StaticLang";
// assets
import { BsEnvelopeHeart } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaRegEnvelope,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      {/* <section className="newsletter">
        <div className="input-box">
          <BsEnvelopeHeart
            style={{ fontSize: "80px" }}
            className="animate__animated animate__swing animate__infinite"
          />
          <div className="text">
            <h1>
              <StaticLang
                en="Sign Up To Our Newsletter"
                az="Xəbər bülletenimizə abunə olun"
              />
            </h1>
            <p>
              <StaticLang
                en="Subscribe to receive updates, access to exclusive deals..."
                az="Yeniliklər və eksklüziv təkliflər üçün abunə olun..."
              />
            </p>
          </div>

          <form className="d-flex gap-3">
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">
              <StaticLang en="Subscribe" az="Abunə ol" />
            </button>
          </form>
        </div>
      </section> */}

      <section className="links py-5 text-dark">
        <Row>
          <Col xs={12} md={6} lg={3}>
            <img src={logo} alt="logo" width={200} />
            <p className="mt-3">
              <StaticLang
                az="Sualınızı tez bir zamanda cavablandıracağıq – yaradıcı və iş ehtiyaclarınız bizə önəmlidir!"
                en="We promise we’ll get back to you promptly – your creative and work needs are always on our minds!"
              />
            </p>
            <div className="socials d-flex gap-2">
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a href="https://x.com/">
                <FaTwitter />
              </a>
              <a href="https://www.tiktok.com/">
                <FaTiktok />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/return-policy">Return Policy</Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h3>Customer Services</h3>
            <ul>
              <li>Track Order</li>
              <li>Shipping Info</li>
              <li>Recalls & Advisories</li>
              <li>
                <Link to="/contact-us">Store Location</Link>
              </li>
            </ul>
          </Col>

          <Col className="help" xs={12} md={6} lg={3}>
            <h3>Need Help?</h3>
            <div className="d-flex gap-2">
              <IoMdCall />
              <span>(+12)-345-6789</span>
            </div>
            <div className="d-flex gap-2">
              <FaRegClock />
              <p>
                Monday – Friday: 9:00-20:00 <br />
                Saturday: 11:00 – 15:00
              </p>
            </div>
            <div className="d-flex gap-2">
              <FaRegEnvelope />
              <p>artstore@example.com</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="bottom py-2 text-center">
        Copyright © 2025 Art Store Online. All rights reserved.
      </section>
    </footer>
  );
};

export default Footer;
