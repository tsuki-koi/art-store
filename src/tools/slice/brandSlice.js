import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../utils/supabase";

const initialState = {
  brands: [],
};

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const fetchBrands = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("brands").select("*");
    if (data) {
      dispatch(setBrands(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const { setBrands } = brandSlice.actions;
export default brandSlice.reducer;
