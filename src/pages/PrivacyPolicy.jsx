import React from "react";
import Breadcrumbs from "../components/others/Breadcrumbs";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import StaticLang from "../utils/StaticLang";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy policy">
      <Breadcrumbs currentPage={<StaticLang en="Privacy Policy" az="Məxfilik Siyasəti" />} />
      <h1>
        <StaticLang en="Privacy Policy" az="Məxfilik Siyasəti" />
      </h1>

      <h2>
        <StaticLang en="Introduction" az="Giriş" />
      </h2>
      <p>
        <StaticLang
          en="Welcome to Art Store! We care about your privacy and want to make sure you feel safe while using our website. This Privacy Policy explains what data we collect, how we use it, and how we keep it secure."
          az="Art Store-a xoş gəlmisiniz! Biz sizin məxfilik məsələlərinizə diqqət yetiririk və veb saytımızdan istifadə edərkən təhlükəsiz hiss etməyinizi təmin etmək istəyirik. Bu Məxfilik Siyasəti, topladığımız məlumatları, necə istifadə etdiyimizi və necə qoruduğumuzu izah edir."
        />
      </p>

      <h2>
        <StaticLang en="Information We Collect" az="Topladığımız Məlumatlar" />
      </h2>
      <p>
        <StaticLang
          en="When you visit our website, we may collect some basic information, including:"
          az="Veb saytımıza ziyarət etdiyiniz zaman, biz bəzi əsas məlumatları toplaya bilərik, o cümlədən:"
        />
      </p>
      <ul>
        <li>
          <strong>
            <StaticLang en="Personal Information" az="Şəxsi Məlumatlar" />
          </strong>
          : <StaticLang en="If you contact us through a form, subscribe to our newsletter, or make a purchase, we may ask for your name, email address, or other contact details." az="Əgər bizimlə əlaqə saxlasanız, bülletenə abunə olsanız və ya alış-veriş etsəniz, adınızı, e-poçt ünvanınızı və ya digər əlaqə məlumatlarını soruşa bilərik." />
        </li>
        <li>
          <strong>
            <StaticLang en="Non-Personal Information" az="Şəxsi Olmayan Məlumatlar" />
          </strong>
          : <StaticLang en="We also collect non-personally identifiable information like your browser type, device type, and IP address for analytics purposes to improve our website." az="Həmçinin, saytımızı təkmilləşdirmək üçün analiz məqsədləri ilə brauzer növü, cihaz növü və IP ünvanı kimi şəxsi olmayan məlumatları toplayırıq." />
        </li>
      </ul>

      <h2>
        <StaticLang en="How We Use Your Information" az="Məlumatlarınızı Necə İstifadə Edirik" />
      </h2>
      <p>
        <StaticLang
          en="We use the information we collect for the following purposes:"
          az="Topladığımız məlumatları aşağıdakı məqsədlər üçün istifadə edirik:"
        />
      </p>
      <ul>
        <li>
          <StaticLang en="To respond to your inquiries and provide customer support" az="Sualınıza cavab vermək və müştəri dəstəyi göstərmək üçün" />
        </li>
        <li>
          <StaticLang en="To send you updates or newsletters if you subscribed" az="Əgər abunə olmusunuzsa, sizə yeniliklər və ya bülletenlər göndərmək üçün" />
        </li>
        <li>
          <StaticLang en="To improve our website and make your browsing experience better" az="Veb saytımızı təkmilləşdirmək və gəzmə təcrübənizi daha yaxşı etmək üçün" />
        </li>
      </ul>

      <h2>
        <StaticLang en="Cookies" az="Çərəzlər" />
      </h2>
      <p>
        <StaticLang
          en="Our website uses cookies, small text files stored on your device, to help us improve your experience. Cookies allow us to remember your preferences, analyze traffic, and offer personalized content. You can disable cookies through your browser settings if you prefer."
          az="Veb saytımız çərəzlərdən istifadə edir, bu kiçik mətn faylları cihazınızda saxlanılır və təcrübənizi yaxşılaşdırmağa kömək edir. Çərəzlər bizə seçimlərinizi yadda saxlamağa, trafik analiz etməyə və fərdiləşdirilmiş məzmun təklif etməyə imkan verir. Əgər istəyirsinizsə, çərəzləri brauzer parametrlərinizdən söndürə bilərsiniz."
        />
      </p>

      <h2>
        <StaticLang en="Data Security" az="Məlumatların Təhlükəsizliyi" />
      </h2>
      <p>
        <StaticLang
          en="We take reasonable measures to protect your personal information, but please keep in mind that no method of internet transmission is 100% secure."
          az="Şəxsi məlumatlarınızı qorumaq üçün məqbul tədbirlər görürük, amma xahiş edirik unutmayın ki, internet üzərindən məlumat ötürmənin heç bir üsulu 100% təhlükəsiz deyil."
        />
      </p>

      <h2>
        <StaticLang en="Third-Party Services" az="Üçüncü Tərəf Xidmətləri" />
      </h2>
      <p>
        <StaticLang
          en="Our website may include links to other websites or services. Please note that we are not responsible for the privacy practices of third-party sites. We encourage you to review their privacy policies before providing any personal information."
          az="Veb saytımız digər veb saytlar və ya xidmətlərə keçidlər daxildir. Xahiş edirik nəzərə alın ki, biz üçüncü tərəf saytlarının məxfilik siyasətinə görə məsuliyyət daşımırıq. Şəxsi məlumat verməzdən əvvəl onların məxfilik siyasətini nəzərdən keçirməyi tövsiyə edirik."
        />
      </p>

      <h2>
        <StaticLang en="Updates to This Privacy Policy" az="Bu Məxfilik Siyasətinə Yeniliklər" />
      </h2>
      <p>
        <StaticLang
          en="We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We recommend checking this page occasionally to stay informed about how we handle your information."
          az="Biz bu Məxfilik Siyasətini zaman-zaman yeniləyə bilərik. Hər hansı dəyişikliklər bu səhifədə yenilənmiş tarixlə birlikdə dərc olunacaq. Məlumatlarınızı necə idarə etdiyimiz barədə məlumatlı olmaq üçün bu səhifəni ara-sıra yoxlamağınızı tövsiyə edirik."
        />
      </p>

      <div className="help">
        <h2 className="text-center">
          <StaticLang
            en="If you have any questions or concerns about this Privacy Policy, feel free to contact us"
            az="Bu Məxfilik Siyasəti ilə bağlı hər hansı bir sualınız və ya narahatlığınız varsa, bizimlə əlaqə saxlamağınızdan çəkinməyin"
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

export default PrivacyPolicy;
