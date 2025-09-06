import React, { useContext, useEffect, useState } from "react";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import StaticLang from "../../utils/StaticLang";
import {
  setBrand,
  setCategory,
  setSearch,
  setSort,
} from "../../tools/slice/filterSlice";
import { ImCross } from "react-icons/im";
import { LangContext } from "../../context/LangContext";

const Toolbar = ({ sendLayout }) => {
  const [lang] = useContext(LangContext);
  const products = useSelector((state) => state.products.items);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.filters.sortBy);
  const category = useSelector((state) => state.filters.category);
  const brand = useSelector((state) => state.filters.brand);
  const search = useSelector((state) => state.filters.search);
  const categories = useSelector((state) => state.categories.items);
  const brands = useSelector((state) => state.brands.items);

  useEffect(() => {
    if (products) {
      setQuantity(products.length);
    }
  }, [products]);

  return (
    <>
      <div className="toolbar">
        <div className="quantity">
          {quantity} <StaticLang az="məhsul" en="item(s)" />
        </div>

        <div className="right">
          <div className="sort-con">
            <span>
              <StaticLang az="Sıralama:" en="Sort by:" />
            </span>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => dispatch(setSort(e.target.value))}
            >
              <option value="newest">
                <StaticLang az="Yenilər" en="Newest" />
              </option>
              <option value="rating">
                <StaticLang az="Reytinqə görə" en="Rating" />
              </option>
              <option value="price_asc">
                <StaticLang
                  az="Qiymət: aşağıdan yuxarı"
                  en="Price: low to high"
                />
              </option>
              <option value="price_desc">
                <StaticLang
                  az="Qiymət: yuxarıdan aşağı"
                  en="Price: high to low"
                />
              </option>
            </select>
          </div>

          {/* <div className="layout">
            <LuLayoutGrid onClick={() => sendLayout("grid")} />
            <LuLayoutList onClick={() => sendLayout("list")} />
          </div> */}
        </div>
      </div>

      <div className="current-filters">
        {category && (
          <div className="badge">
            <div className="text">
              {categories.find((item) => item.id === category)
                ? lang === "AZ"
                  ? categories.find((item) => item.id === category).title_az
                  : categories.find((item) => item.id === category).title_en
                : ""}
            </div>
            <ImCross
              onClick={() => {
                dispatch(setCategory(""));
              }}
            />
          </div>
        )}
        {brand && (
          <div className="badge">
            <div className="text">
              {brands.find((item) => item.id === brand)
                ? lang === "AZ"
                  ? brands.find((item) => item.id === brand).title_az
                  : brands.find((item) => item.id === brand).title_en
                : ""}
            </div>
            <ImCross
              onClick={() => {
                dispatch(setBrand(""));
              }}
            />
          </div>
        )}
        {search && (
          <div className="badge">
            <div className="text">"{search}"</div>
            <ImCross
              onClick={() => {
                dispatch(setSearch(""));
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbar;
