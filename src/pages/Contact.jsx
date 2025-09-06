import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Breadcrumbs from "../components/others/Breadcrumbs";
import StaticLang from "../utils/StaticLang";
//assets
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { LangContext } from "../context/LangContext";

const Contact = () => {
  const [lang] = useContext(LangContext);

  return (
    <div className="contact-page">
      <Breadcrumbs currentPage={<StaticLang az="Əlaqə" en="Contact Us" />} />
      <Row>
        <Col className="col container" xs={12} lg={4}>
          <h2>
            <StaticLang az="Sualınız var?" en="Do You Have Questions?" />
          </h2>
          <p>
            <StaticLang
              az="Biz həftənin 7 günü sizin xidmətinizdəyik!"
              en="We are at your disposal 7 days a week!"
            />
          </p>
          <h3>(+12)-345-6789</h3>
          <p>
            <StaticLang
              az="Bazar ertəsi – Cümə: 9:00–20:00"
              en="Monday – Friday: 9:00–20:00"
            />
            <br />
            <StaticLang
              az="Şənbə: 11:00 – 15:00"
              en="Saturday: 11:00 – 15:00"
            />
          </p>
          <p>
            <StaticLang az="E-poçt göndərin: " en="Send email: " />
            <a href="mailto:contact@artstore.com">contact@artstore.com</a>
          </p>
          <div className="socials">
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

        <Col
          className="col container"
          xs={12}
          lg={7}
          style={{ borderRadius: "20px 0" }}
        >
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e0!3m2!1sru!2saz!4v1743085988433!5m2!1sru!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>

      <section className="message-form">
        <form className="d-flex flex-column">
          <h2>
            <StaticLang az="Bizə bir mesaj göndərin" en="Drop Us a Line" />
          </h2>
          <p>
            <StaticLang
              az="Sualınız və ya şərhiniz var? Aşağıdakı formu istifadə edərək bizə mesaj göndərin və ya poçtla əlaqə saxlayın."
              en="Have a question or comment? Use the form below to send us a message or contact us by mail at."
            />
          </p>
          <div className="d-flex gap-3">
            <input
              type="text"
              placeholder={lang === "AZ" ? "Adınız *" : "Your Name *"}
              required
            />
            <input
              type="email"
              placeholder={
                lang === "AZ" ? "E-poçt ünvanı *" : "Email Address *"
              }
              required
            />
          </div>

          <input
            type="text"
            placeholder={lang === "AZ" ? "Mövzu *" : "Subject *"}
            required
          />
          <textarea
            type="text"
            placeholder={lang === "AZ" ? "Mesajınız *" : "Your Message *"}
            id="message-input"
            required
          />
          <button className="green-btn">
            <StaticLang az="Şərhi göndərin" en="Post Comment" />{" "}
            <FaArrowRightLong />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
