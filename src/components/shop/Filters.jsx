import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StaticLang from "../../utils/StaticLang";
import { LangContext } from "../../context/LangContext";
import { fetchCategories } from "../../tools/slice/categorySlice";
import { fetchBrands } from "../../tools/slice/brandSlice";
import {
  setCategory,
  setBrand,
  setPriceRange,
} from "../../tools/slice/filterSlice";
import Loader from "../others/Loader";

const Filters = () => {
  const [lang] = useContext(LangContext);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const brands = useSelector((state) => state.brands.items);
  const { priceRange } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    dispatch(setPriceRange([newMin, priceRange[1]]));
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    dispatch(setPriceRange([priceRange[0], newMax]));
  };

  return (
    <div className="filters">
      <div className="filter-con">
        <h3>
          <StaticLang en="Filter by Category" az="Kateqoriyaya görə filtrlə" />
        </h3>
        <div className="content">
          <ul>
            {categories ? (
              <>
                {categories.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => dispatch(setCategory(item.id))}
                  >
                    {lang === "AZ" ? item.title_az : item.title_en}
                  </li>
                ))}
              </>
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </div>

      <div className="filter-con">
        <h3>
          <StaticLang en="Filter by Brand" az="Brendə görə filtrlə" />
        </h3>
        <div className="content">
          <ul>
            {brands ? (
              brands.map((item) => (
                <li key={item.id} onClick={() => dispatch(setBrand(item.id))}>
                  {lang === "AZ" ? item.title_az : item.title_en}
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </div>

      <div className="filter-con">
        <h3>
          <StaticLang en="Filter by Price" az="Qiymətə görə filtrlə" />
        </h3>
        <div className="price-con">
          <input
            type="number"
            value={priceRange[0]}
            onChange={handleMinChange}
            className="form-control"
            min={0}
          />
          <span>–</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={handleMaxChange}
            className="form-control"
            min={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
