import React, { useContext, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import bcrypt from "bcryptjs";
import supabase from "../../utils/supabase";
import Swal from "sweetalert2";
import StaticLang from "../../utils/StaticLang";
import { LangContext } from "../../context/LangContext";

const RegisterForm = ({ setForm }) => {
  const [lang] = useContext(LangContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const registeredUsers = useSelector((state) => state.users.items);
  const [warning, setWarning] = useState("");

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const setFormLogin = () => {
    setForm("login");
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setWarning("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const userId = uuidv4();

    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      setWarning(
        <StaticLang
          az="Zəhmət olmasa bütün sahələri doldurun"
          en="Please fill in all the fields"
        />
      );
    } else {
      if (user.password !== user.confirmPassword) {
        setWarning(
          <StaticLang az="Şifrələr uyğun gəlmir" en="Passwords do not match" />
        );
      } else {
        const existingUser = registeredUsers.find(
          (u) => u.email === user.email
        );

        if (existingUser) {
          setWarning(
            <StaticLang
              az="Bu e-poçt artıq qeydiyyatdan keçib"
              en="Email already registered"
            />
          );
        } else {
          try {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            const { error: insertError } = await supabase.from("users").insert([
              {
                id: userId,
                email: user.email,
                username: user.username,
                password: hashedPassword,
                role: "customer",
                registration_date: new Date().toISOString().split("T")[0],
              },
            ]);

            if (insertError) {
              setWarning(
                <StaticLang
                  az={`İstifadəçini verilənlər bazasına əlavə edərkən xəta: ${insertError.message}`}
                  en={`Error inserting user into database: ${insertError.message}`}
                />
              );
            } else {
              setTimeout(() => {
                setFormLogin;
              }, 2000);
              Swal.fire({
                icon: "success",
                title:
                  lang === "AZ"
                    ? "Qeydiyyat uğurla tamamlandı"
                    : "Registration successful",
                text:
                  lang === "AZ"
                    ? "Qeydiyyat uğurla tamamlandı"
                    : "Registration successful",
              });
            }
          } catch (error) {
            setWarning(
              <StaticLang
                az="Qeydiyyat zamanı xəta baş verdi"
                en="Error registering user"
              />
            );
          }
        }
      }
    }
  };

  return (
    <form
      className="form d-flex flex-column align-items-center justify-content-center"
      onSubmit={registerSubmit}
    >
      {warning ? <div className="warning">{warning}</div> : ""}

      <input
        type="text"
        placeholder={lang === "AZ" ? "İstifadəçi adı *" : "Username *"}
        name="username"
        onChange={handleChange}
        value={user.username}
      />

      <input
        type="email"
        placeholder={lang === "AZ" ? "E-poçt ünvanı *" : "Email Address *"}
        name="email"
        onChange={handleChange}
        value={user.email}
      />

      <div className="password-con">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={lang === "AZ" ? "Şifrə *" : "Password *"}
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <div className="password-con">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder={
            lang === "AZ" ? "Şifrəni təsdiqləyin *" : "Confirm password *"
          }
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <button type="submit" className="submit">
        <StaticLang az="Qeydiyyatdan keç" en="Register" />
      </button>

      <button
        type="button"
        onClick={() => {
          setForm("login");
          setUser({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setWarning("");
        }}
      >
        <StaticLang az="Artıq hesabınız var?" en="Already Have an Account" />
      </button>
    </form>
  );
};

export default RegisterForm;
