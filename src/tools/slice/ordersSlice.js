import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../utils/supabase";

const initialState = {
  orders: [],
  orderItems: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrderItems: (state, action) => {
      state.orderItems = action.payload;
    },
  },
});

export const fetchOrders = () => async (dispatch) => {
  try {
    const { data } = await supabase.from("orders").select("*");
    dispatch(setOrders(data));
  } catch (error) {
    console.error("Ошибка загрузки заказов:", error.message);
  }
};

export const fetchOrderItems = () => async (dispatch) => {
  try {
    const { data, error } = await supabase.from("order_items").select("*");
    if (error) throw error;
    dispatch(setOrderItems(data));
  } catch (error) {
    console.error("Ошибка загрузки товаров заказа:", error.message);
  }
};

export const { setOrders, setOrderItems } = orderSlice.actions;
export default orderSlice.reducer;
