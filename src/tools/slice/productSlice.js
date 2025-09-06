import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../utils/supabase";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("products").select("*");
    if (data) {
      dispatch(setProducts(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = async (product) => {
  const { data, error } = await supabase.from("products").insert(product);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/account");
  }
};

export const editProduct = async (id, product) => {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/account");
  }
};

export const deleteProduct = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/account");
  }
};

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
