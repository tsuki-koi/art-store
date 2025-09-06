import { createSlice } from '@reduxjs/toolkit'
import supabase from '../../utils/supabase';

const initialState = {
  categories: []
}

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
  }
})

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("categories").select("*");
    if (data) {
      dispatch(setCategories(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;