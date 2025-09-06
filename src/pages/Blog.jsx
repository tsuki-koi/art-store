import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import Breadcrumbs from "../components/others/Breadcrumbs";

const Blog = () => {
  const [lang] = useContext(LangContext);

  return (
    <div className="blog">
      <Breadcrumbs currentPage={lang === "AZ" ? "Bloq" : "Blog"} />
      <div className="posts">
        <div className="view-posts">
          <div className="post">

          </div>
        </div>

        <div className="side-con">

        </div>
      </div>
    </div>
  );
};

export default Blog;
