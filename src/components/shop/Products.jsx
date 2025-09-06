import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import SingleProduct from "../others/SingleProduct";
import Loader from "../others/Loader";
// utils
import supabase from "../../utils/supabase";
import { setProducts } from "../../tools/slice/productSlice";
import { LangContext } from "../../context/LangContext";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  const [lang] = useContext(LangContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const { search, category, brand, sort, priceRange } = useSelector(
    (state) => state.filters
  );
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(products?.length / itemsPerPage);

  const paginatedProducts = products?.slice(startIndex, endIndex);

  useEffect(() => {
    const getProducts = async () => {
      let request = supabase.from("products").select("*");

      if (category) {
        request = request.eq("category", category);
      }

      if (brand) {
        request = request.eq("brand", brand);
      }

      if (search) {
        let title = "title_en";
        if (lang === "AZ") {
          title = "title_az";
        }
        request = request.ilike(title, `%${search}%`);
        // TITLE-AZ
      }

      if (priceRange) {
        request = request
          .gte("price", priceRange[0])
          .lte("price", priceRange[1]);
      }

      if (sort) {
        switch (sort) {
          case "price_asc":
            request = request.order("price", { ascending: true });
            break;
          case "price_desc":
            request = request.order("price", { ascending: false });
            break;
          case "rating":
            request = request.order("rating", { ascending: false });
            break;
          case "newest":
            request = request.order("created_at", { ascending: false });
            break;
        }
      }

      const { data, error } = await request;

      if (error) {
        console.log(error);
      } else {
        dispatch(setProducts(data));
        setCurrentPage(1);
      }
    };

    getProducts();
  }, [category, brand, search, sort, priceRange, dispatch]);

  if (!products) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <div className="alt-results">
        <img
          src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-person-looking-through-magnifying-glass-on-question-mark-picture-image_8704894.png"
          alt="photo"
        />
        {lang === "AZ" ? "Heç nə tapılmadı" : "No products found"}
      </div>
    );
  }

  return (
    <div className="products">
      <div className="row">
        {paginatedProducts.map((item) => (
          <div
            key={item.id}
            className="col-md-4 my-3"
            data-aos="flip-right"
            data-aos-offset="50"
          >
            <SingleProduct
              data={item}
              price={item.price}
              rating={item.rating}
              discount={item.discountPercentage}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center w-100">
        <ul className="pagination m-0">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <FaArrowLeftLong />
            </button>
          </li>

          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo(0, 400);
                }}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => {
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
                window.scrollTo(0, 400);
              }}
            >
              <FaArrowRightLong />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
