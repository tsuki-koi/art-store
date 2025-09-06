import React, { useEffect, useState } from "react";
import Form from "./Form";
import Loader from "../others/Loader";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../../tools/slice/productSlice";
import StaticLang from "../../utils/StaticLang";

const EditProduct = () => {
  const products = useSelector((state) => state.products.items);
  const [editItem, setEditItem] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products && editItem) {
      const data = products.find((item) => item.id === editItem.id);
      setFilteredData(data);
    } else {
      setFilteredData(null);
    }
  }, [products, editItem]);

  return (
    <div className="product-tab">
      <h2 className="text-center mb-3">
        <StaticLang en="Edit Product" az="Məhsulu redaktə et" />
      </h2>

      {filteredData ? (
        <Form
          editData={filteredData}
          comingData={(item) => {
            dispatch(editProduct(filteredData.id, item));
          }}
          saveEdit={setEditItem}
        />
      ) : products && !editItem ? (
        <ul className="products-list">
          <p className="text-center">
            <StaticLang
              en={`${products.length} products in total`}
              az={`Cəmi ${products.length} məhsul var`}
            />
          </p>
          {products.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title_en} />
              <h4>
                <StaticLang az={item.title_az} en={item.title_en} />
              </h4>
              <button
                className="green-btn"
                onClick={() => {
                  setEditItem(item);
                }}
              >
                <StaticLang en="Edit Product" az="Redaktə et" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EditProduct;
