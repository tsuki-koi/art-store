import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import categoryReducer from "../slice/categorySlice";
import brandReducer from "../slice/brandSlice";
import filterReducer from "../slice/filterSlice";
import usersReducer from "../slice/userSlice";
import orderSlice from "../slice/ordersSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    brands: brandReducer,
    filters: filterReducer,
    users: usersReducer,
    orders: orderSlice,
  },
});

export default store;