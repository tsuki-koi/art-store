import React from "react";
import { Card } from "react-bootstrap";
import photo from "../../assets/images/offer3.jpg";
import { Link } from "react-router-dom";

const FromBlog = () => {
  return (
    <section className="from-blog text-center">
      <h1
        className="m-4 h2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        From Our Blog
      </h1>

      <div className="cards">
        <Card
          style={{ width: "400px", margin: "auto", border: "none" }}
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="image">
            <Card.Img
              variant="top"
              src={photo}
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Text style={{ color: "gray", fontWeight: "600" }}>
              POST DATE: JANUARY 12, 2025
            </Card.Text>
            <Card.Title style={{ fontWeight: "600" }}>
              How to Brighten Up Your Office or Home Office
            </Card.Title>
            <Link to={"/blog"}>
              <button className="mt-3">Read More +</button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "400px", margin: "auto", border: "none" }}
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="image">
            <Card.Img
              variant="top"
              src={photo}
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Text style={{ color: "gray", fontWeight: "600" }}>
              POST DATE: JANUARY 12, 2025
            </Card.Text>
            <Card.Title style={{ fontWeight: "600" }}>
              How to Brighten Up Your Office or Home Office
            </Card.Title>
            <Link to={"/blog"}>
              <button className="mt-3">Read More +</button>
            </Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "400px", margin: "auto", border: "none" }}
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="image">
            <Card.Img
              variant="top"
              src={photo}
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Text style={{ color: "gray", fontWeight: "600" }}>
              POST DATE: JANUARY 12, 2025
            </Card.Text>
            <Card.Title style={{ fontWeight: "600" }}>
              How to Brighten Up Your Office or Home Office
            </Card.Title>
            <Link to={"/blog"}>
              <button className="mt-3">Read More +</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default FromBlog;
