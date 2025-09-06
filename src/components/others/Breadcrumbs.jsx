import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import StaticLang from "../../utils/StaticLang";

const Breadcrumbs = ({ currentPage }) => {
  return (
    <div className="breadcrumbs">
      <span>
        <Link to="/"><StaticLang az="Əsas səhifə" en="Home"/></Link> /
      </span>
      {/* {pages.map((item, index) => (
        <span key={index}>
          <Link to={`/${slugify(item, {lower:true})}`}> {item}</Link> /
        </span>
      ))} */}
      <span className="current"> {currentPage}</span>
    </div>
  );
};

export default Breadcrumbs;
