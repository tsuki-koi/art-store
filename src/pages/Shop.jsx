import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "../components/others/Breadcrumbs";
import Banner from "../components/shop/Banner";
import Filters from "../components/shop/Filters";
import Toolbar from "../components/shop/Toolbar";
import Products from "../components/shop/Products";
import { LangContext } from "../context/LangContext";

const Shop = () => {
  const [layout, setLayout] = useState("grid");
  const [lang] = useContext(LangContext);

  useEffect(()=>{
    setLayout(layout)
  }, [layout])

  return (
    <div className="shop">
      <Breadcrumbs currentPage={lang==='AZ'?'Mağaza':'Shop'} />
      <Banner />
      <div className="catalog d-flex my-4 w-100">
        <Filters />
        <div className="view-products">
          <Toolbar sendLayout={setLayout}/>
          <Products getLayout={layout}/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
