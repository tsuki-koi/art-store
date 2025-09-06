import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "",
  brand: "",
  sort: "newest",
  priceRange: [0, 1000]
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      // console.log(action.payload);
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setBrand: (state, action) => {
      state.brand = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;      
    }
  },
});

export const { setSearch, setCategory, setBrand, setSort, setPriceRange } =
  filtersSlice.actions;
export default filtersSlice.reducer;
// dobavit' v store !!!