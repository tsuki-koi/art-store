import React, { useState } from "react";
import { useCart } from "react-use-cart";
import StaticLang from "../utils/StaticLang";
import supabase from "../utils/supabase";
import { v4 as uuidv4 } from "uuid";

const CheckoutPage = () => {
  const { items, cartTotal, isEmpty, emptyCart } = useCart();

  const [form, setForm] = useState({
    address: "",
    phone: "",
    notes: "",
    paymentMethod: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaymentSelect = (method) => {
    setForm({ ...form, paymentMethod: method });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const orderData = {
      id: uuidv4(),
      shipping_address: form.address,
      phone: form.phone,
      notes: form.notes,
      payment_method: form.paymentMethod,
      total_price: cartTotal,
      order_date: new Date().toISOString(),
      status: 'Pending'
    };

    const { error } = await supabase.from("orders").insert([orderData]);

    if (error) {
      console.error(error);
      setError("Ошибка при оформлении заказа. Попробуйте позже.");
    } else {
      setSuccess(true);
      emptyCart();
    }

    setLoading(false);
  };

  return (
    <div className="checkout py-5">
      <div className="container product-form" style={{ maxWidth: "700px" }}>
        <h2 className="mb-3 text-center">
          <StaticLang en="Checkout" az="Sifarişi təsdiqlə" />
        </h2>

        {isEmpty && !success && (
          <div className="alert alert-warning">
            <StaticLang en="Cart is empty" az="Səbət boşdur" />
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            <StaticLang
              en="Your order has been placed successfully!"
              az="Sifarişiniz uğurla göndərildi!"
            />
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!isEmpty && !success && (
          <>
            <div className="mb-4">
              <h5>
                <StaticLang az="Sizin sifariş" en="Your Order" />:
              </h5>
              <ul className="list-group mb-2">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <StaticLang az={item.title_az} en={item.title_en} /> x {item.quantity}
                    <span>
                      {(
                        ((item.price * (100 - item.discountPercentage)) / 100) *
                        item.quantity
                      ).toFixed(2)}
                      $
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-end fw-bold">
                <StaticLang az="Cəm" en="Total" />: {cartTotal.toFixed(2)} $
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-con mb-3">
                <label htmlFor="address" className="form-label">
                  <StaticLang az="Çatdırılma ünvanı" en="Shipping Address" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-con mb-3">
                <label htmlFor="phone" className="form-label">
                  <StaticLang az="Telefon nömrəsi" en="Phone Number" />
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-con mb-3">
                <label htmlFor="notes" className="form-label">
                  <StaticLang az="Qeyd" en="Order Notes" />
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  name="notes"
                  rows="3"
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>

              <div className="payment-con mb-3">
                <label className="form-label d-block">
                  <StaticLang az="Ödəniş üsulu" en="Payment Method" />
                </label>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn ${
                      form.paymentMethod === "cash" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentSelect("cash")}
                  >
                    <StaticLang az="Nağd" en="Cash" />
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      form.paymentMethod === "card" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentSelect("card")}
                  >
                    <StaticLang az="Kart" en="Card" />
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      form.paymentMethod === "paypal" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentSelect("paypal")}
                  >
                    PayPal
                  </button>
                </div>
              </div>
              <div className="bottom">
                <button type="submit" className="green-btn" disabled={loading}>
                  {loading ? (
                    <StaticLang en="Sending..." az="Göndərilir..." />
                  ) : (
                    <StaticLang en="Place Order" az="Sifarişi göndər" />
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
