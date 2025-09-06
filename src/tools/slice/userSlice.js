import { createSlice } from "@reduxjs/toolkit"
import supabase from "../../utils/supabase";

const initialState = {
  users: []
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.items = action.payload;
    },
  }
})

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("users").select("*");
    if (data) {
      dispatch(setUsers(data));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;