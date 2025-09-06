// import { useEffect } from "react";
// import { useCart } from "react-use-cart";
// import { supabase } from "../../utils/supabase";

// const CartSync = () => {
//   const activeUser = JSON.parse(localStorage.getItem("activeUser"));
//   const userId = activeUser.id;

//   const {
//     items,
//     addItem,
//     emptyCart,
//     setItems,
//     isEmpty,
//   } = useCart();

//   // 1. Загрузка корзины из БД
//   useEffect(() => {
//     const fetchCart = async () => {
//       if (!activeUser) return;

//       const { data, error } = await supabase
//         .from("carts")
//         .select("items")
//         .eq("user_id", activeUser.id)
//         .single();

//       if (error) {
//         console.error("Ошибка загрузки корзины:", error.message);
//         return;
//       }

//       if (data?.items && Array.isArray(data.items)) {
//         setItems(data.items);
//       }
//     };

//     fetchCart();
//   }, [activeUser, setItems]);

//   // 2. Синхронизация с БД при изменении корзины
//   useEffect(() => {
//     const saveCart = async () => {
//       if (!activeUser) return;

//       const { error } = await supabase
//         .from("carts")
//         .upsert({
//           user_id: activeUser.id,
//           items: items,
//         });

//       if (error) {
//         console.error("Ошибка обновления корзины:", error.message);
//       }
//     };

//     if (!isEmpty) {
//       saveCart();
//     }
//   }, [items, activeUser]);
  
//   return null;
// };

// export default CartSync;
