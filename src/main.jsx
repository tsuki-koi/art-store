import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/scss/style.scss";
import App from "./App.jsx";
// import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./tools/store";
import { LangProvider } from "./context/LangContext.jsx";
import { CurrencyProvider } from "./context/CurrencyContext.jsx";
import { CartProvider } from "react-use-cart";
import { LoginProvider } from "./context/LoginContext.jsx";
import { WishlistProvider } from "react-use-wishlist";
import { ModeProvider } from "./context/ModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <Provider store={store}>
      <WishlistProvider>
        <CartProvider>
          <LangProvider>
            <CurrencyProvider>
              <LoginProvider>
                <App />
              </LoginProvider>
            </CurrencyProvider>
          </LangProvider>
        </CartProvider>
      </WishlistProvider>
    </Provider>
  </ModeProvider>
);
