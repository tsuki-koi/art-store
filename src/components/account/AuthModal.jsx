import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import supabase from "../../utils/supabase";
import { setUsers } from "../../tools/slice/userSlice";
//assets
import bg from "../../assets/images/login-form-img.jpg";
import { RxCross1 } from "react-icons/rx";
import StaticLang from "../../utils/StaticLang";

const AuthModal = ({ show, handleClose }) => {
  const [form, setForm] = useState("login");
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.users.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: userData } = await supabase.from("users").select("*");

        if (userData) {
          dispatch(setUsers(userData));
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className="top">
          <button onClick={handleClose}>
            <RxCross1 />
          </button>
          <img src={bg} alt="login-image" height={200} />
          <h2 className={form === "login" ? "" : "hidden"}>
            <StaticLang az="Daxil ol" en="Sign In" />
          </h2>
          <h2 className={form === "register" ? "" : "hidden"}>
            <StaticLang az="Qeydiyyat" en="Register" />
          </h2>
        </div>

        <div className={`content ${form}`}>
          <LoginForm setForm={setForm} />
          <RegisterForm setForm={setForm} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
