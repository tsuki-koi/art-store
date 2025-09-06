import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { IoMdSettings } from "react-icons/io";
import { LuBoxes } from "react-icons/lu";
import { useSelector } from "react-redux";
import StaticLang from "../../utils/StaticLang";
import { v4 as uuidv4 } from "uuid";

const Form = ({ comingData, editData, saveEdit }) => {
  const categories = useSelector((state) => state.categories.items);
  const brands = useSelector((state) => state.brands.items);
  const productId = uuidv4();

  const imageRef = useRef();
  const titleEnRef = useRef();
  const titleAzRef = useRef();
  const descEnRef = useRef();
  const descAzRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const categoryRef = useRef();
  const brandRef = useRef();
  const shippingRef = useRef();
  const stockRef = useRef();
  const skuRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();

    comingData({
      id: productId,
      image: imageRef.current.value,
      title_en: titleEnRef.current.value,
      title_az: titleAzRef.current.value,
      description_en: descEnRef.current.value,
      description_az: descAzRef.current.value,
      price: priceRef.current.value,
      discountPercentage: discountRef.current.value,
      category: categoryRef.current.value,
      shippingInformation_en:
        "Ships in " + shippingRef.current.value + " day(s)",
      shippingInformation_az:
        shippingRef.current.value + " gün ərzində göndərilir",
      stock: stockRef.current.value,
      sku: skuRef.current.value,
    });

    if (editData) {
      saveEdit(null);
    }
  };

  return (
    <div className="product-form">
      <Col xs={12}>
        <form onSubmit={formSubmit}>
          <div className="inputs-con">
            <div className="input-con">
              <label className="form-label">
                <StaticLang en="Title (EN)" az="Başlıq (EN)" />
              </label>
              <input
                defaultValue={!editData ? "" : editData.title_en}
                ref={titleEnRef}
                type="text"
                className="form-control"
              />
            </div>
            <div className="input-con">
              <label className="form-label">
                <StaticLang en="Title (AZ)" az="Başlıq (AZ)" />
              </label>
              <input
                defaultValue={!editData ? "" : editData.title_az}
                ref={titleAzRef}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="input-con">
            <label className="form-label">
              <StaticLang en="Description (EN)" az="Təsvir (EN)" />
            </label>
            <textarea
              defaultValue={!editData ? "" : editData.description_en}
              ref={descEnRef}
              type="text"
              className="form-control"
            />
          </div>

          <div className="input-con">
            <label className="form-label">
              <StaticLang en="Description (AZ)" az="Təsvir (AZ)" />
            </label>
            <textarea
              defaultValue={!editData ? "" : editData.description_az}
              ref={descAzRef}
              type="text"
              className="form-control"
            />
          </div>

          <div className="inputs-con">
            <div className="input-con">
              <label>
                <StaticLang en="Price, $" az="Qiymət, $" />
              </label>
              <input
                defaultValue={!editData ? "" : editData.price}
                ref={priceRef}
                type="number"
                className="form-control"
              />
            </div>
            <div className="input-con">
              <label>
                <StaticLang en="Discount, %" az="Endirim, %" />
              </label>
              <input
                defaultValue={!editData ? "" : editData.discountPercentage}
                ref={discountRef}
                type="number"
                className="form-control"
                max={100}
              />
            </div>
          </div>

          <section>
            <h3>
              <LuBoxes /> <StaticLang en="Inventory" az="Stok" />
            </h3>
            <div className="inputs-con">
              <div className="input-con">
                <label className="form-label">
                  <StaticLang en="SKU" az="SKU" />
                </label>
                <input
                  defaultValue={!editData ? "" : editData.sku}
                  ref={skuRef}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="input-con">
                <label className="form-label">
                  <StaticLang en="Stock" az="Stok" />
                </label>
                <input
                  defaultValue={!editData ? "" : editData.stock}
                  ref={stockRef}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
          </section>

          <section>
            <h3>
              <IoMdSettings /> <StaticLang en="Other Options" az="Digər seçimlər" />
            </h3>
            <div className="input-con">
              <label className="form-label">
                <StaticLang en="Image URL" az="Şəkil bağlantısı" />
              </label>
              <input
                defaultValue={!editData ? "" : editData.image}
                ref={imageRef}
                type="text"
                className="form-control"
              />
            </div>
            <div className="inputs-con">
              <select
                name="category"
                id="category"
                ref={categoryRef}
                value={editData?.category || "0"}
              >
                <option value="0">
                  <StaticLang az="Kategoriya..." en="Category..." />
                </option>
                {categories?.map((item) => (
                  <option key={item.id} value={item.id}>
                    <StaticLang az={item.title_az} en={item.title_en} />
                  </option>
                ))}
              </select>
              <div className="input-con">
                <label className="form-label">
                  <StaticLang en="Shipping Information (days)" az="Çatdırılma müddəti (gün)" />
                </label>
                <input
                  defaultValue={!editData ? "" : editData.shippingInformation_az[0]}
                  ref={shippingRef}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
          </section>

          <button type="submit" className="green-btn">
            <StaticLang
              en={editData ? "Save Edits" : "Add Product"}
              az={editData ? "Dəyişiklikləri yadda saxla" : "Məhsul əlavə et"}
            />
          </button>
        </form>
      </Col>
    </div>
  );
};

export default Form;