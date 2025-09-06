import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import StaticLang from "../../utils/StaticLang";
import { LangContext } from "../../context/LangContext";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const LoginForm = ({ setForm }) => {
  const [lang] = useContext(LangContext);
  const registeredUsers = useSelector((state) => state.users.items);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();

    const user = registeredUsers.find(
      (u) => u.email === email && bcrypt.compare(password, u.password)
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      const activeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
      }
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
      if (user.role === "admin") {
        localStorage.setItem("isAdmin", true);
      }
      navigate("/account");
      window.location.reload();
    } else if (!email || !password) {
      setWarning(
        <StaticLang
          az="Zəhmət olmasa, həm e-poçt, həm də şifrəni daxil edin"
          en="Please enter both email and password"
        />
      );
    } else {
      setWarning(
        <StaticLang
          az="Yanlış e-poçt və ya şifrə"
          en="Invalid email or password"
        />
      );
    }
  };

  return (
    <form
      className="form d-flex flex-column align-items-center justify-content-center"
      onSubmit={loginSubmit}
    >
      {warning ? <div className="warning">{warning}</div> : ""}

      <input
        type="email"
        placeholder={lang === "AZ" ? "E-poçt ünvanı *" : "Email Address *"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="password-con">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={lang === "AZ" ? "Şifrə *" : "Password *"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <LuEye /> : <LuEyeClosed />}
        </button>
      </div>

      <div className="forgot-password">
        <Link to="account/forgot-password">
          <StaticLang az="Şifrənizi unutmusunuz?" en="Lost your password?" />
        </Link>
      </div>
      <button type="submit" className="submit">
        <StaticLang az="Daxil ol" en="Sign In" />
      </button>
      <button
        type="button"
        onClick={() => {
          setForm("register");
        }}
      >
        <StaticLang az="Hesab yarat" en="Create an Account" />
      </button>
    </form>
  );
};

export default LoginForm;
