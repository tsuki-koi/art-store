import React, { useEffect, useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import StaticLang from "../utils/StaticLang";
// components
import Breadcrumbs from "../components/others/Breadcrumbs";
import Features from "../components/homepage/Features";
// assets
import photo1 from "../assets/images/offer1.jpeg";
import photo2 from "../assets/images/offer3.jpg";
import photo3 from "../assets/images/about-img.gif";
import photo4 from "../assets/images/about-client.jpg";
import { IoIosPeople, IoMdGlobe } from "react-icons/io";
import { MdWarehouse } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // создать функцию которая передает позицию прокрутки в состояние
    const handleScroll = () => {
      setScrollPosition(window.scrollY * -0.5);
    };

    window.addEventListener("scroll", handleScroll);
    // cleanup-функция чтобы не случилась утечка памяти
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      <section className="banner my-4">
        <h1>
          <StaticLang az="Haqqımızda" en="About Us" />
        </h1>
        <Breadcrumbs
          currentPage={<StaticLang az="Haqqımızda" en="About Us" />}
        />
      </section>

      <section className="row about-section">
        <Col className="images" xs={12} xl={6}>
          <div className="big-img">
            <img src={photo2} alt="photo" />
          </div>
          <div className="small-img">
            <img src={photo1} alt="photo" />
          </div>
        </Col>

        <Col className="info" xs={12} xl={6}>
          <p className="colored">Art Store Online</p>
          <h2>
            <StaticLang
              az="Biz inanırıq ki, hər kəs yaradıcıdır"
              en="We believe that everyone is creative"
            />
          </h2>
          <p>
            <StaticLang
              az="Bir çoxları yaradıcılığı ya var, ya da yoxdur kimi səhv başa düşür. İnsan olaraq, zehnimiz təsəvvürü tuta və abstrakt düşüncələri ideyalara çevirə bilir."
              en="Many mistake creativity as something you have or you don’t. As human beings, our minds are able to capture imagination and turn abstract thoughts into ideas."
            />
          </p>
          <p>
            <StaticLang
              az="Burada, Art Store-da, biz inanırıq ki, hər kəs yarada bilər və yaradıcılıq inkişaf etdirilə və dəstəklənə bilər, çünki hər bir uşaq sənətçi olaraq doğulur."
              en="Here at Art Store, we believe that everyone can create and that creativity is something we can nurture and encourage, since every child is born an artist."
            />
          </p>
        </Col>
      </section>

      <Features />

      <section className="carousel-container">
        <div className="text">
          <p className="colored">
            <StaticLang
              az="SƏFƏRİNİZƏ DƏSTƏK OLMAQ ÜÇÜN BURADAYIQ"
              en="WE ARE HERE TO SUPPORT YOUR JOURNEY"
            />
          </p>
          <h2>
            <StaticLang
              az="Düzgün alətlər, resurslar və ilham ilə"
              en="With the right tools, resources and inspiration"
            />
          </h2>
          <p>
            <StaticLang
              az="Stationero hər şeydə sizə dəstək olmağa və sizi maarifləndirməyə çalışır. Biz, sizin özünüzün ən yaxşı versiyasına çevrilmək yolunda ehtiyac duyduğunuz hər şeyi təqdim edərək, sizə dəstək olmağa çalışırıq."
              en="Stationero makes it so that in everything we do, the support we provide can help and educate you. We are driven to support you by delivering what you need on your journey to become the best version of yourself."
            />
          </p>
        </div>
        <div
          className="scroll-carousel my-3"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          <img src={photo1} alt="1" />
          <img src={photo2} alt="2" />
          <img src={photo1} alt="3" />
          <img src={photo2} alt="4" />
          <img src={photo1} alt="5" />
          <img src={photo2} alt="6" />
          <img src={photo1} alt="7" />
          <img src={photo2} alt="8" />
        </div>
      </section>

      <section className="stats-section my-5">
        <Col xs={12} lg={6} className="text">
          <p className="colored">
            <StaticLang
              az="HƏR KƏSİ YARATMAĞA İLHAMLANDIRAN MƏKAN"
              en="A SPACE TO INSPIRE EVERYONE TO CREATE"
            />
          </p>
          <h2>
            <StaticLang
              az="Qlobal yaradıcılıq icması ilə böyümək"
              en="Growing with a global creative community"
            />
          </h2>
          <p>
            <StaticLang
              az="Əgər siz dəyişiklikləri qiymətləndirən və inkişafa can atan birisinizsə, bilin ki, tək deyilsiniz. Özünü ifadə edənlərdən ibarət icmamız sizi açıq qollarla qarşılamağa şaddır."
              en="If you are someone who values change and seeks for improvement, you are not alone. Our community of self-expressionists are more than happy to welcome you with open arms."
            />
          </p>
          <div className="stat-icons">
            <div className="stat">
              <HiMiniUserGroup />
              <div className="content">
                <p>
                  <StaticLang az="İZLƏYİCİLƏR" en="FOLLOWERS" />
                </p>
                <p>165k+</p>
              </div>
            </div>

            <div className="stat">
              <IoMdGlobe />
              <div className="content">
                <p>
                  <StaticLang az="ÖLKƏLƏR" en="COUNTRIES" />
                </p>
                <p>90+</p>
              </div>
            </div>

            <div className="stat">
              <MdWarehouse />
              <div className="content">
                <p>
                  <StaticLang az="SATIŞ MƏNTƏQƏLƏRİ" en="STOCKISTS" />
                </p>
                <p>50+</p>
              </div>
            </div>

            <div className="stat">
              <IoIosPeople />
              <div className="content">
                <p>
                  <StaticLang az="KOMANDA ÜZVLƏRİ" en="TEAM MEMBERS" />
                </p>
                <p>20+</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6} className="image">
          <div className="photo">
            <img src={photo3} alt="about-img" />
          </div>
        </Col>
      </section>

      <section className="explore my-5">
        <p className="colored">
          <StaticLang
            az="100% Dəftərxana məhsulu"
            en="100% Stationery product"
          />
        </p>
        <h2>
          <StaticLang
            az="Yeni təcrübəyə açıq olun"
            en="Open up to a new experience"
          />
        </h2>
        <Link to="/shop">
          <button className="green-btn">
            <StaticLang
              az="Kolleksiyalarımızı kəşf edin"
              en="Explore Our Collections"
            />
            <FaArrowRightLong />
          </button>
        </Link>
      </section>

      <section className="client-stories">
        <Col xs={12} lg={6} className="mx-3">
          <div className="photo">
            <img src={photo4} alt="" />
          </div>
        </Col>
        <Col xs={12} lg={6} className="text">
          <h2>
            <StaticLang
              az="Müştərilərimizin uğur hekayələri"
              en="Success Stories From Clients"
            />
          </h2>
          <p>
            <StaticLang
              az="30,000+ rəyə nəzər salın."
              en="Check out over 30,000+ reviews."
            />
          </p>
          <Carousel interval={3000} controls={false} variant="dark">
            <Carousel.Item>
              <div className="carousel-item-inner">
                <div className="quote">
                  <RiDoubleQuotesL />
                </div>
                <div className="content">
                  <p>
                    “ Sedac risus phasellus lacinia, magna a ullamcorper
                    laoreet, lectusarcu pulvinar risus, vitae facilisis purus. ”
                  </p>
                  <div className="name">
                    <h2>Sekina Stout</h2>
                    <p>
                      <StaticLang az="Dizayner" en="Designer" />
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-inner">
                <div className="quote">
                  <RiDoubleQuotesL />
                </div>
                <div className="content">
                  <p>
                    “ Sedac risus phasellus lacinia, magna a ullamcorper
                    laoreet, lectusarcu pulvinar risus, vitae facilisis purus. ”
                  </p>
                  <div className="name">
                    <h2>Sekina Stout</h2>
                    <p>
                      <StaticLang az="Dizayner" en="Designer" />
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-inner">
                <div className="quote">
                  <RiDoubleQuotesL />
                </div>
                <div className="content">
                  <p>
                    “ Sedac risus phasellus lacinia, magna a ullamcorper
                    laoreet, lectusarcu pulvinar risus, vitae facilisis purus. ”
                  </p>
                  <div className="name">
                    <h2>Sekina Stout</h2>
                    <p>
                      <StaticLang az="Dizayner" en="Designer" />
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </section>
    </div>
  );
};

export default About;
