import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../tools/slice/ordersSlice";
import { FiShoppingCart } from "react-icons/fi";
import StaticLang from "../../utils/StaticLang";

const Dashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const ordersByStatus = (orderStatus) => {
    const result = orders.filter((item) => item.status === orderStatus);
    return result.length;
  };

  return (
    <Row className="dashboard">
      <Col xs={12} xl={4}>
        <section className="sales">
          <table>
            <thead>
              <tr>
                <th>
                  <StaticLang en="Sales" az="Satışlar" />
                </th>
                <th>
                  <StaticLang en="Orders" az="Sifarişlər" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  $
                  {orders ? orders
                    .reduce((sum, order) => {
                      return sum + order.total_price;
                    }, 0)
                    .toFixed(2) : 0}
                </td>
                <td>{orders ? orders.length : 0}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>
            <StaticLang en="Promocodes" az="Promo kodlar" />
          </h2>
          <ul>
            <li>
              SPRING30: <span>30%</span>
            </li>
            <li>
              ARTSTORE: <span>15%</span>
            </li>
          </ul>
        </section>
      </Col>

      <Col xs={12} xl={4}>
        <section>
          <h2>
            <FiShoppingCart /> <StaticLang en="Orders" az="Sifarişlər" />
          </h2>
          {orders ? (
            <ul>
              <li>
                <StaticLang en="Total" az="Cəmi" />:{" "}
                <span>{orders.length}</span>
              </li>
              <li>
                <StaticLang en="Delivered" az="Çatdırılıb" />:{" "}
                <span>{ordersByStatus("Delivered")}</span>
              </li>
              <li>
                <StaticLang en="Pending" az="Gözləmədədir" />:{" "}
                <span>{ordersByStatus("Pending")}</span>
              </li>
              <li>
                <StaticLang en="Shipped" az="Göndərilib" />:{" "}
                <span>{ordersByStatus("Shipped")}</span>
              </li>
              <li>
                <StaticLang en="Cancelled" az="Ləğv edilib" />:{" "}
                <span>{ordersByStatus("Cancelled")}</span>
              </li>
              <li>
                <StaticLang en="Returned" az="Qaytarılıb" />:{" "}
                <span>{ordersByStatus("Returned")}</span>
              </li>
            </ul>
          ) : (
            <StaticLang en="Loading..." az="Yüklənir..." />
          )}
        </section>
      </Col>

      <Col xs={12} xl={4}>
        <section>
          <h2>
            <FiShoppingCart /> <StaticLang en="Products" az="Məhsullar" />
          </h2>
          {products ? (
            <ul>
              <li>
                <StaticLang en="Total" az="Cəmi" />:{" "}
                <span>{products.length}</span>
              </li>
              <li>
                <StaticLang en="Inactive" az="Aktiv deyil" />: <span>0</span>
              </li>
              <li>
                <StaticLang en="Low Stock" az="Az sayda stok" />:{" "}
                <span>
                  {
                    products.filter(
                      (item) => item.availabilityStatus === 2
                    ).length
                  }
                </span>
              </li>
              <li>
                <StaticLang en="Out of Stock" az="Stokda yoxdur" />:{" "}
                <span>
                  {
                    products.filter(
                      (item) => item.availabilityStatus === 3
                    ).length
                  }
                </span>
              </li>
            </ul>
          ) : (
            <StaticLang en="Loading..." az="Yüklənir..." />
          )}
        </section>
      </Col>
    </Row>
  );
};

export default Dashboard;
