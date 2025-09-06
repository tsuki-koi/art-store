import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";
import StaticLang from "../../utils/StaticLang";

const MainScreen = () => {
  const [mode] = useContext(ModeContext);

  return (
    <section className={`home ${mode}`}>
      <Row className="my-5 d-flex justify-content-center">
        <Col xs={12} s={12} md={12} lg={6} xl={7}>
          <div
            id="banner1"
            className="align-content-center p-5 animate__animated animate__fadeInLeft"
          >
            <p>
              <StaticLang az="Seç və Birləşdir" en="Mix & Match" />
            </p>
            <h1>
              <StaticLang az="Bizim 3-ü 2-yə" en="With Our 3 For 2" /> <br />
              <StaticLang az="Ofis Ləvazimatları" en="Stationery" />
            </h1>
            <Link to={"/shop"}>
              <button className="mt-3 btn btn-dark">
                <StaticLang az="İNDİ AL" en="SHOP NOW" />
              </button>
            </Link>
          </div>
        </Col>
        <Col xs={12} s={12} md={12} lg={5} xl={4} className="text-light">
          <Row className="m-4">
            <div
              id="banner2"
              className="align-content-center p-4"
              data-aos="flip-up"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <p>
                <StaticLang az="Ofis / Ev" en="Office / Home" />
              </p>
              <h3>
                <StaticLang az="Premium Qələmlər" en="Premium Pens" />{" "}
              </h3>
              <p>
                <StaticLang az="15% Endirim" en="15% Off" />
              </p>
              <Link to={"/shop"}>
                <button className="mt-3 btn btn-none btn-outline-light">
                  <StaticLang az="İNDİ AL" en="SHOP NOW" />
                </button>
              </Link>
            </div>
          </Row>
          <Row className="m-2">
            <div
              id="banner3"
              className="align-content-center p-4"
              data-aos="flip-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <p>
                <StaticLang az="Ofis Yapışdırıcısı" en="Office Adhesive" />
              </p>
              <h3>
                <StaticLang az="Skotç" en="Tape" />
              </h3>
              <p>
                <StaticLang az="12.99 $-dan" en="From $12.99" />
              </p>
              <Link to={"/shop"}>
                <button className="mt-3 btn btn-none btn-outline-light">
                  <StaticLang az="İNDİ AL" en="SHOP NOW" />
                </button>
              </Link>
            </div>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default MainScreen;
