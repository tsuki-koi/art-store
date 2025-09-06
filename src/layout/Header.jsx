import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
// tools n utils
import { fetchCategories } from "../tools/slice/categorySlice";
import { setCategory, setSearch } from "../tools/slice/filterSlice";
import StaticLang from "../utils/StaticLang";
// components
import AuthModal from "../components/account/AuthModal";
import SearchModal from "../components/shop/SearchModal";
// context
import { LoginContext } from "../context/LoginContext";
// import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
// assets (img, icons etc)
import logo from "../assets/images/logo.png";
import { FaAngleRight } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFire, BsSunFill } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import { IoList } from "react-icons/io5";
import { LuHeart, LuUser } from "react-icons/lu";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useMode } from "../context/ModeContext";

const Header = () => {
  const [lang, setLang] = useContext(LangContext);
  // const [theme, setTheme] = useContext(ThemeContext);
  const [mode, toggleMode] = useMode();
  const icon =
    mode === "light" ? (
      <BsFillMoonStarsFill className="icon moon" />
    ) : (
      <BsSunFill className="icon sun" />
    );
  const [modalShow, setModalShow] = useState(false);
  const [searchModalShow, setSearchModalShow] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useContext(LoginContext);
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(loginStatus);
  }, []);

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     setTheme("light");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  const changeLang = () => {
    if (lang === "AZ") {
      setLang("EN");
      localStorage.setItem("lang", "EN");
    } else {
      setLang("AZ");
      localStorage.setItem("lang", "AZ");
    }
  };

  const changeCurr = () => {
    if (curr === "AZN") {
      setCurr("USD");
      localStorage.setItem("curr", "USD");
    } else {
      setCurr("AZN");
      localStorage.setItem("curr", "AZN");
    }
  };

  const handleSearch = () => {
    if (location.pathname !== "/shop") {
      setSearchModalShow(true);
    }
  };

  return (
    <header className={mode}>
      <section className="promo">
        <span className="delivery-info">
          <FaTruck className="icon animate__animated animate__headShake animate__infinite animate__slower" />
          <StaticLang
            az="300$-dan çox sifariş et və pulsuz çatdırılma əldə et!"
            en="Get free home delivery (Order More then $300)"
          />
        </span>
        <div className="tools d-flex align-items-center gap-3">
          <select id="language" onChange={changeLang}>
            <option value="EN">Eng</option>
            <option value="AZ">Aze</option>
          </select>
          
          <select id="currency" onChange={changeCurr}>
            <option value="USD">USD</option>
            <option value="AZN">AZN</option>
          </select>
        
          <button onClick={toggleMode} className="dark-light">
            {icon}
          </button>
        </div>
      </section>

      <nav>
        <div className="top">
          <Link to="/">
            <img src={logo} alt="logo" width={200} className="logo" />
          </Link>

          <div className="search-con">
            <input
              id="search"
              type="text"
              placeholder={
                lang === "AZ"
                  ? "Məhsulları axtarın..."
                  : "Search for products..."
              }
              onChange={(e) => {
                dispatch(setSearch(e.target.value));
              }}
              onClick={handleSearch}
              readOnly={location.pathname !== "/shop"}
            />
            <RxMagnifyingGlass className="icon" />
            <SearchModal
              show={searchModalShow}
              handleClose={() => setSearchModalShow(false)}
            />
          </div>

          <div className="profile">
            <Link to="/wishlist">
              <div className="icon">
                <LuHeart />
              </div>
              <div className="badge">{totalWishlistItems}</div>
              <span>
                <StaticLang az="İstək Siyahısı" en="Wishlist" />
              </span>
            </Link>

            <Link to="/cart">
              <div className="icon">
                <FiShoppingCart />
              </div>
              <div className="badge">{totalItems}</div>
              <span>
                <StaticLang az="Səbət" en="Cart" />
              </span>
            </Link>

            <div
              className="link"
              onClick={() => {
                if (isLoggedIn === true) {
                  navigate("/account");
                } else {
                  setModalShow(true);
                }
              }}
            >
              <div className="icon">
                <LuUser />
              </div>
              {isLoggedIn === false && (
                <>
                  <div className="badge">!</div>
                  <div className="tooltip">
                    You are not logged in. Your actions won't be saved.
                  </div>
                </>
              )}
              <span>
                {activeUser ? (
                  activeUser.username ? (
                    activeUser.username
                  ) : (
                    // на случай если вдруг username не окажется
                    activeUser.email.split("@")[0]
                  )
                ) : (
                  <StaticLang az="Hesab" en="Account" />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="browse">
            <button>
              <IoList className="icon" />
              <StaticLang az="Kateqoriyalara bax" en="Browse Categories" />
            </button>

            {categories && (
              <ul className="dropdown">
                {categories.map((item) => (
                  <li
                    className="sub-dd-btn"
                    key={item.id}
                    onClick={() => dispatch(setCategory(item.id))}
                  >
                    <Link to="/shop">
                      {<StaticLang en={item.title_en} az={item.title_az} />}
                    </Link>
                    <FaAngleRight
                      style={{ fontSize: "12px" }}
                      className="arrow"
                    />
                    {/* <ul className="sub-dd">
                      <li>Subcategory Name</li>
                      <li>Subcategory Name</li>
                    </ul> */}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/">
                  <StaticLang az="Əsas səhifə" en="Home" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">
                  <StaticLang az="Mağaza" en="Shop" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us">
                  <StaticLang az="Haqqımızda" en="About Us" />
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/blog">
                  <StaticLang az="Bloq" en="Blog" />
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/contact-us">
                  <StaticLang az="Əlaqə" en="Contact Us" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sale">
            <BsFire className="icon" />
            <StaticLang az="Endirimlər " en="Clearance Up to " />
            <b>
              <StaticLang az="30%-dək!" en="30% Off" />
            </b>
          </div>
          <button className="menu-btn">
            <HiMiniBars3BottomRight />
          </button>
        </div>
      </nav>

      <AuthModal show={modalShow} handleClose={() => setModalShow(false)} />
    </header>
  );
};

export default Header;
