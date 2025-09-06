import React from "react";
import StaticLang from "../../utils/StaticLang";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  // const category = useSelector((state) => state.filters.category);

  return (
    <Row className="banners-con">
      <Col className="title-banner" xs={12}>
        <h1>
          <StaticLang az="Mağaza" en="Shop" />
        </h1>
        <p>
          <StaticLang
            en="Super prices on art supplies!"
            az="Yaradıcılıq üçün məhsullara super qiymətlər!"
          />
        </p>
      </Col>

      <Col className="text-banner" xs={12}>
        {/* <div className="text">
          <StaticLang
            en="From idea to masterpiece – everything at your fingertips!"
            az="Fikirdən şahəsərə – hər şey əlinizin altında!"
          />
        </div> */}
      </Col>
    </Row>
  );
};

export default Banner;
