import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Aos from "aos";
import AppRoutes from "./routes/AppRoutes";
import ScrollButton from "./components/others/ScrollButton";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./tools/slice/productSlice";
import { fetchOrders } from "./tools/slice/ordersSlice";

function App() {
  Aos.init();

  const ScrollToTop = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
        <ScrollButton />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
