import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import StaticLang from "../utils/StaticLang";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found d-flex flex-column align-items-center my-5">
      <h1>404</h1>
      <h2>
        <StaticLang az="Nəsə səhv baş verdi" en="Something went wrong" />
      </h2>
      <p className="mb-4">
        <StaticLang
          az="Üzr istəyirik! Bu səhifə mövcud deyil!"
          en="Sorry! This Page Is Not Available!"
        />
      </p>
      <Link to='/'>
        <button className="green-btn">
          <StaticLang az="Ana səhifəyə qayıt" en="Back to Homepage" />{" "}
          <FaArrowRightLong />
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
