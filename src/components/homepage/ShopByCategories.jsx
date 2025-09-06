import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
// tools
import { fetchCategories } from "../../tools/slice/categorySlice";
import { setCategory } from "../../tools/slice/filterSlice";
// assets
import photo from "../../assets/images/offer1.jpeg";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import { LangContext } from "../../context/LangContext";
import StaticLang from "../../utils/StaticLang";

function ShopByCategories() {
  const lang = useContext(LangContext);
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1400 },
      items: 5,
      slidesToSlide: 1,
    },
    l: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    m: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1,
    },
    s: {
      breakpoint: { max: 800, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    xs: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  if (categories)
    return (
      <section className="categories-carousel pt-3 pb-5 text-center text-light">
        <h1 className="mt-5 mb-3 h2" data-aos="fade-down">
          <StaticLang
            en="Shop by Categories"
            az="Kateqoriyalar üzrə alış-veriş"
          />
        </h1>
        <p className="mb-5" data-aos="fade-down" data-aos-delay="300">
          <StaticLang
            en="Essential office supplies in our online stationery shop that keep your office operations smooth and efficient"
            az="Ofis işlərinin səmərəli və problemsiz davam etməsi üçün onlayn ləvazimat mağazamızda vacib ofis əşyaları"
          />
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          keyBoardControl={false}
          showDots={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          autoPlay={true}
          autoPlaySpeed={2500}
          removeArrowOnDeviceType={["xl", "l", "m", "s", "xs"]}
        >
          {categories.length !== 0 ? (
            categories.map((item) => (
              <Card
                key={item.id}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                onClick={() => {
                  dispatch(setCategory(item.id));
                  navigate("/shop");
                }}
              >
                <div className="image">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title_en}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">
                    <StaticLang az={item.title_az} en={item.title_en} />
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Loader />
          )}
        </Carousel>
      </section>
    );
}

export default ShopByCategories;
