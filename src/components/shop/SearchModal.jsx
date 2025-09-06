import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import StaticLang from "../../utils/StaticLang";
import { useDispatch, useSelector } from "react-redux";
import { LangContext } from "../../context/LangContext";
import { setSearch } from "../../tools/slice/filterSlice";
import { RxMagnifyingGlass } from "react-icons/rx";
import supabase from "../../utils/supabase";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { FaArrowRightLong } from "react-icons/fa6";

const SearchModal = ({ show, handleClose }) => {
  const [lang] = useContext(LangContext);
  const [results, setResults] = useState([]);
  const { search } = useSelector((state) => state.filters);
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      if (search) {
        let request = supabase.from("products").select("*");
        let title = "title_en";
        if (lang === "AZ") {
          title = "title_az";
        }
        request = request.ilike(title, `%${search}%`);
        // TITLE-AZ
        const { data, error } = await request;
        if (error) {
          console.log(error);
        } else {
          setResults(data);
        }
      } else {
        setResults([]);
      }
    };

    getProducts();
  }, [search]);

  const getItemCategory = (item) => {
    return categories.find((cat) => cat.id === item.category);
  };

  const closeModal = () => {
    dispatch(setSearch(""));
    setResults([]);
    handleClose();
  };

  return (
    <Modal className="search-modal" show={show} onHide={closeModal}>
      <Modal.Header>
        <div className="search-con">
          <input
            id="search"
            type="text"
            placeholder={
              lang === "AZ" ? "Məhsulları axtarın..." : "Search for products..."
            }
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
          <RxMagnifyingGlass className="icon" />
        </div>
      </Modal.Header>
      <Modal.Body>
        <h2>
          <StaticLang az="Axtarış Nəticələri" en="Search Results" />
          <span> ({results?.length})</span>
        </h2>
        <ul>
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item.id} className="m-4 animate__animated animate__lightSpeedInRight">
                <Link
                  to={`/shop/${slugify(item.title_en, { lower: true })}`}
                  onClick={closeModal}
                  className="d-flex align-items-center gap-3"
                >
                  <div className="image">
                    <img
                      src={item.image}
                      alt={lang === "AZ" ? item.title_az : item.title_en}
                    />
                  </div>
                  <div className="info">
                    <div className="category">
                      <StaticLang
                        az={getItemCategory(item).title_az}
                        en={getItemCategory(item).title_en}
                      />
                    </div>
                    <h3 className="title">
                      <StaticLang az={item.title_az} en={item.title_en} />
                    </h3>
                    <div className="price">
                      $
                      {(
                        (item.price * (100 - item.discountPercentage)) /
                        100
                      ).toFixed(2)}
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <div className="arrow">
                    <StaticLang az="Detalları gör" en="View details" />{" "}
                    <FaArrowRightLong />
                  </div>
                </Link>
              </li>
            ))
          ) : results.length === 0 && search ? (
            <div className="alt-results"><StaticLang az={`"${search}" üçün heç bir nəticə tapılmadı`} en={`No Results for "${search}"`}/></div>
          ) : (
            <div className="alt-results"><StaticLang az='Məhsulları axtarın...' en='Search products...'/></div>
          )}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
