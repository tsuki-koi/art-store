import { useEffect, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Admin məlumatları
  const adminData = {
    fullname: "Admin",
    email: "admin@gmail.com",
    password: "123",
    phone: "+000-111-22-33",
    role: "admin",
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    // Qeydiyyatdan keçmiş istifadəçiləri localStorage-dən al
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Admin kimi giriş edilib-edilmədiyini yoxla
    if (email === adminData.email && password === adminData.password) {
      localStorage.setItem("login", "true");
      localStorage.setItem("activeUser", JSON.stringify(adminData));
      navigate("/account");
      window.location.reload();
      return;
    }

    // Email və şifrə uyğun gələn istifadəçini tap
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("login", "true");
      localStorage.setItem("activeUser", JSON.stringify(user));
      navigate("/account");
      window.location.reload();
    } else if (!email || !password) {
      alert("Please enter both email and password");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 login-border my-5">
          <h1 className="text-center my-5">Login</h1>

          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                value={email}
              />
            </div>
            <div className="my-5">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer", height: "38px" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <LuEye />
                  ) : (
                    <LuEyeClosed />
                  )}
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </form>
          <h4 className="my-5">Don't have an account?</h4>
          <Link to="/register" className="btn btn-dark">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
