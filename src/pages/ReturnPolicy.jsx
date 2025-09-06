import React from "react";
import Breadcrumbs from "../components/others/Breadcrumbs";
import StaticLang from "../utils/StaticLang";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
  return (
    <div className="return-policy policy">
      <Breadcrumbs
        currentPage={
          <StaticLang en="Return Policy" az="Geri qaytarma siyasəti" />
        }
      />

      <h1>
        <StaticLang en="Return Policy" az="Geri qaytarma siyasəti" />
      </h1>

      <h2>
        <StaticLang en="Introduction" az="Giriş" />
      </h2>
      <p>
        <StaticLang
          en="At the Art Store, we want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we offer a simple return process. Please read the details of our return policy below."
          az="Art Store-da biz istəyirik ki, alışınızdan tam razı qalasınız. Hər hansı bir səbəbdən sifarişinizdən məmnun deyilsinizsə, sadə bir geri qaytarma prosesi təklif edirik. Aşağıda geri qaytarma siyasətimizin detalları ilə tanış olun."
        />
      </p>

      <h2>
        <StaticLang en="Return Eligibility" az="Geri qaytarma şərtləri" />
      </h2>
      <p>
        <StaticLang
          en="You may return an item if:"
          az="Əgər bu şərtlər varsa, məhsulu geri qaytara bilərsiniz:"
        />
      </p>
      <ul>
        <li>
          <StaticLang
            en="The item is in its original condition (unused, unworn, and undamaged)."
            az="Məhsul orijinal vəziyyətdədir (istifadə olunmamış, geyilməmiş və zədələnməmiş)."
          />
        </li>
        <li>
          <StaticLang
            en="The return request is made within 14 days from the date of delivery."
            az="Geri qaytarma tələbi çatdırılma tarixindən 14 gün ərzində edilməlidir."
          />
        </li>
        <li>
          <StaticLang
            en="You provide proof of purchase (receipt or order confirmation)."
            az="Alışın sübutunu təqdim edirsiniz (qəbz və ya sifariş təsdiqi)."
          />
        </li>
      </ul>

      <h2>
        <StaticLang
          en="Non-Returnable Items"
          az="Geri qaytarıla bilməyən məhsullar"
        />
      </h2>
      <p>
        <StaticLang
          en="Certain items cannot be returned, including:"
          az="Bəzi məhsullar geri qaytarıla bilməz, bunlara daxildir:"
        />
      </p>
      <ul>
        <li>
          <StaticLang en="Gift cards" az="Hədiyyə kartları" />
        </li>
        <li>
          <StaticLang
            en="Sale or clearance items"
            az="Endirimli və ya satışda olan məhsullar"
          />
        </li>
        <li>
          <StaticLang
            en="Items that have been opened or used (e.g., cosmetics, hygiene products, etc.)"
            az="Açılmış və ya istifadə edilmiş məhsullar (məsələn, kosmetika, gigiyena məhsulları və s.)"
          />
        </li>
      </ul>

      <h2>
        <StaticLang
          en="How to Return an Item"
          az="Məhsulu necə geri qaytarmaq olar"
        />
      </h2>
      <p>
        <StaticLang
          en="To return an item, please follow these steps:"
          az="Məhsulu geri qaytarmaq üçün bu addımları izləyin:"
        />
      </p>
      <ul>
        <li>
          <StaticLang
            en="Contact our customer support team at artstore@example.com to initiate the return process."
            az="Geri qaytarma prosesini başlatmaq üçün artstore@example.com ünvanına müştəri xidmətləri ilə əlaqə saxlayın."
          />
        </li>
        <li>
          <StaticLang
            en="Provide your order number and a brief description of the reason for the return."
            az="Sifariş nömrənizi və geri qaytarma səbəbini qısa şəkildə təqdim edin."
          />
        </li>
        <li>
          <StaticLang
            en="Once your return is approved, we will send you instructions on how to send the item back to us."
            az="Geri qaytarma təsdiqləndikdən sonra, məhsulu bizə necə geri göndərməyiniz barədə təlimatları sizə göndərəcəyik."
          />
        </li>
      </ul>

      <h2>
        <StaticLang en="Refund Process" az="Ödənişin qaytarılması prosesi" />
      </h2>
      <p>
        <StaticLang
          en="Once we receive the returned item and verify its condition, we will process your refund. Please note:"
          az="Məhsul geri qaytarıldıqdan və vəziyyəti yoxlandıqdan sonra ödənişinizi geri qaytaracağıq. Xahiş edirik nəzərə alın:"
        />
      </p>
      <ul>
        <li>
          <StaticLang
            en="Refunds will be issued to the original payment method."
            az="Ödənişlər orijinal ödəmə metoduna geri qaytarılacaq."
          />
        </li>
        <li>
          <StaticLang
            en="It may take 3-5 business days for the refund to appear on your account."
            az="Ödənişin hesabınızda görünməsi üçün 3-5 iş günü çəkə bilər."
          />
        </li>
        <li>
          <StaticLang
            en="If the return is not eligible (e.g., the item is damaged, missing parts, etc.), we may refuse the return or issue a partial refund."
            az="Əgər geri qaytarma uyğun deyilsə (məsələn, məhsul zədələnmişsə, hissələr itirilibsə və s.), biz geri qaytarma tələbini rədd edə bilərik və ya qismən ödəniş qaytara bilərik."
          />
        </li>
      </ul>

      <h2>
        <StaticLang en="Exchanges" az="Məhsul dəyişdirilməsi" />
      </h2>
      <p>
        <StaticLang
          en="If you wish to exchange an item for a different size or color, please follow the same return process, and we will assist you in making the exchange, subject to availability."
          az="Əgər məhsulu fərqli ölçü və ya rənglə dəyişdirmək istəyirsinizsə, eyni geri qaytarma prosesini izləyin və biz mövcudluğa əsasən dəyişdirməyə kömək edəcəyik."
        />
      </p>

      <h2>
        <StaticLang en="Shipping Costs" az="Göndərmə xərcləri" />
      </h2>
      <p>
        <StaticLang
          en="Return shipping costs are the responsibility of the customer, unless the return is due to a mistake on our part (e.g., wrong item sent, damaged goods)."
          az="Geri qaytarma göndərmə xərcləri müştərinin məsuliyyətidir, əgər geri qaytarma səhv bizim tərəfimizdən olubsa (məsələn, yanlış məhsul göndərilməsi, zədələnmiş mal)."
        />
      </p>

      <h2>
        <StaticLang
          en="Damaged or Defective Items"
          az="Zədələnmiş və ya qüsurlu məhsullar"
        />
      </h2>
      <p>
        <StaticLang
          en="If you receive a damaged or defective item, please contact us within 3 days of receiving your order. We will arrange a return or exchange at no cost to you."
          az="Əgər zədələnmiş və ya qüsurlu məhsul almışsınızsa, sifarişinizi aldığınız tarixdən 3 gün ərzində bizimlə əlaqə saxlayın. Biz sizin üçün heç bir xərc olmadan geri qaytarma və ya dəyişdirmə təşkil edəcəyik."
        />
      </p>

      <div className="help">
        <h2 className="text-center">
          <StaticLang
            en="If you have any questions or concerns about our Return Policy, please don’t hesitate to contact us"
            az="Geri qaytarma siyasətimizlə bağlı hər hansı bir sualınız və ya narahatlığınız varsa, bizimlə əlaqə saxlamağınızdan çəkinməyin"
          />
        </h2>
        <Link to="/contact-us" className="text-decoration-none">
          <button className="green-btn">
            <StaticLang en="Contact Us" az="Bizimlə əlaqə saxlayın" />{" "}
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReturnPolicy;
