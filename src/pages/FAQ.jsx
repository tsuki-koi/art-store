import React from "react";
import { Accordion } from "react-bootstrap";
import Breadcrumbs from "../components/others/Breadcrumbs";
import StaticLang from "../utils/StaticLang";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineQuestion } from "react-icons/ai";

const FAQ = () => {
  return (
    <div className="faq">
      <Breadcrumbs currentPage="FAQ" />

      <h1>
        <StaticLang
          en="Freguently Asked Questions"
          az="Tez-tez Verilən Suallar"
        />
      </h1>

      <>
        <Accordion defaultActiveKey="0">
          <h3>
            1. <StaticLang en="Orders & Payment" az="Sifariş və Ödəniş" />
          </h3>

          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <StaticLang
                en="How do I place an order?"
                az="Necə sifariş verə bilərəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Just add the products you like to your cart and proceed to
              checkout. You’ll need to fill in your shipping details and select
              a payment method. Once your order is confirmed, you’ll receive an
              email with the details."
                az="İstədiyiniz məhsulları səbətə əlavə edin və ödənişə keçin. Çatdırılma məlumatlarını daxil edin və ödəniş üsulunu seçin. Sifariş təsdiqləndikdən sonra sizə təsdiq e-poçtu göndəriləcək."
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <StaticLang
                en="Can I order without creating an account?"
                az="Hesab yaratmadan sifariş verə bilərəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="No, you need to create an account to place an order. This allows us to provide better order tracking and customer support."
                az="Xeyr, sifariş vermək üçün hesab yaratmalısınız. Bu, sifariş izləməsini və müştəri dəstəyini daha yaxşı təmin etməyə imkan verir."
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <StaticLang
                en="What payment methods do you accept?"
                az="Hansı ödəniş üsulları qəbul edilir?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="We accept major credit/debit cards, PayPal, and other secure
              payment options. The available methods will be shown at checkout."
                az="Biz kredit/debet kartları, PayPal və digər təhlükəsiz ödəniş üsullarını qəbul edirik. Mövcud seçimləri ödəniş zamanı görəcəksiniz."
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <StaticLang
                en="Is my payment information secure?"
                az="Ödəniş məlumatlarım təhlükəsizdirmi?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Absolutely! All payments are processed through a secure and encrypted system to protect your data."
                az="Bəli! Bütün ödənişlər məlumatlarınızın qorunması üçün şifrələnmiş sistem vasitəsilə emal edilir."
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <h3>
            2.{" "}
            <StaticLang en="Shipping & Delivery" az="Çatdırılma və Göndərmə" />
          </h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <StaticLang
                en="How long will it take to receive my order?"
                az="Sifarişim nə qədər müddətə çatacaq?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Delivery times depend on your location and the shipping method you
              choose. Standard shipping usually takes 5-10 business days, while
              express options are faster. You’ll see the estimated delivery time
              at checkout."
                az="Çatdırılma müddəti yerləşdiyiniz ölkədən və seçdiyiniz çatdırılma metodundan asılıdır. Standart çatdırılma adətən 5-10 iş günü çəkir. Daha sürətli seçimlər mövcuddur."
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <StaticLang
                en="Do you offer free shipping?"
                az="Pulsuz çatdırılma mümkündür?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Yes! Free shipping is available for orders over a certain amount.
              Check our website for current promotions."
                az="Bəli! Müəyyən məbləği keçən sifarişlər üçün pulsuz çatdırılma təklif edirik. Ətraflı məlumat üçün vebsaytımıza baxın."
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <StaticLang
                en="Can I change my shipping address after placing an order?"
                az="Sifarişim üçün çatdırılma ünvanını dəyişə bilərəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="If your order hasn’t been processed yet, we can update the
              address. Please contact our support team as soon as possible."
                az="Əgər sifarişiniz hələ emal edilməyibsə, ünvanı dəyişmək mümkündür. Lütfən, bizimlə tez bir zamanda əlaqə saxlayın."
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <h3>
            3.{" "}
            <StaticLang
              en="Returns & Refunds"
              az="Qaytarma və Geri Ödənişlər"
            />
          </h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <StaticLang
                en="What if I receive a damaged or incorrect item?"
                az="Əgər zədələnmiş və ya səhv məhsul alsam, nə etməliyəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="We’re sorry for the inconvenience! Please contact us within 48
              hours of receiving your order, and we’ll arrange a replacement or
              refund."
                az="Üzr istəyirik! Lütfən, sifarişinizi aldıqdan sonra 48 saat ərzində bizimlə əlaqə saxlayın. Biz məhsulu dəyişdirməyi və ya geri qaytarmağı təşkil edəcəyik."
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <StaticLang
                en="How do I return an item?"
                az="Məhsulu necə qaytara bilərəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="If you’re not satisfied with your purchase, you can return it
              within 14 days. The item must be unused and in its original
              packaging. Contact us for return instructions."
                az="Əgər aldığınız məhsul sizi qane etmirsə, 14 gün ərzində qaytara bilərsiniz. Məhsul istifadə olunmamalı və orijinal qablaşdırmada olmalıdır. Ətraflı məlumat üçün bizimlə əlaqə saxlayın."
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <StaticLang
                en="How long does it take to process a refund?"
                az="Geri ödəniş nə qədər müddətə edilir?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Once we receive your returned item, refunds are processed within
              5-7 business days. The amount will be credited back to your
              original payment method."
                az="Qaytarılan məhsul qəbul edildikdən sonra geri ödənişlər 5-7 iş günü ərzində həyata keçirilir. Məbləğ ilkin ödəniş metodunuza qaytarılacaq."
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <h3>
            4. <StaticLang en="Other Questions" az="Digər Suallar" />
          </h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <StaticLang
                en="Do you have a physical store?"
                az="Fiziki mağazanız varmı?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="No, we operate exclusively online to bring you the best prices and
              widest selection."
                az="Xeyr, biz yalnız onlayn fəaliyyət göstəririk. Bu, sizə ən geniş məhsul çeşidini və ən yaxşı qiymətləri təqdim etməyə imkan verir."
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <StaticLang
                en="How can I contact customer service?"
                az="Müştəri xidmətləri ilə necə əlaqə saxlaya bilərəm?"
              />
            </Accordion.Header>
            <Accordion.Body>
              <StaticLang
                en="Our team is happy to help! You can reach us via email at
              support@email.com or through our website’s contact form."
                az="Biz həmişə kömək etməyə hazırıq! Bizə support@email.com e-poçtu və ya vebsaytımızdakı əlaqə forması vasitəsilə müraciət edə bilərsiniz."
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>

      <div className="help">
        {/* <AiOutlineQuestion /> */}
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJmMXducm81OXRmejJhZG5weTdyZWRrNDA3ODZ4aHhjOHN6ajFmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7buirYcmV5nSwIRW/giphy.gif"
          alt="question"
        />
        <div className="text">
          <h1>
            <StaticLang
              en="Still need help?"
              az="Hələ də köməyə ehtiyacınız var?"
            />
          </h1>
          <p>
            <StaticLang
              en="We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry."
              az="Hər bir müştəriyə sənayenin ön sıralarında olan ən yaxşı həlləri təklif etmək üçün strategiyalarımızı uyğunlaşdırmaqdan zövq alırıq."
            />
          </p>
        </div>

        {/* <div className="features">
          <div className="card">
            <div className="icon"><BiSupport /></div>
            <div className="desc">
              <h4>Forum</h4>
              <p>We conduct the marketing of products & services using latest technologies.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><BiSupport /></div>
            <div className="desc">
              <h4>Forum</h4>
              <p>We conduct the marketing of products & services using latest technologies.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><BiSupport /></div>
            <div className="desc">
              <h4>Forum</h4>
              <p>We conduct the marketing of products & services using latest technologies.</p>
            </div>
          </div>
        </div> */}

        <Link to="/contact-us">
          <button>
            <StaticLang en="Contact Us" az="Bizimlə əlaqə saxlayın" />{" "}
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
