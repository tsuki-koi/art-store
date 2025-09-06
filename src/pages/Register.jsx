import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // İstifadəçi məlumatlarını saxlamaq üçün state
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    againPassword: "",
  });

  // Input sahələrinə daxil edilən dəyərləri state-ə əlavə edir
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Şifrənin göstərilib-göstərilməməsini idarə edən state
  const [showPassword, setShowPassword] = useState(false);
  const [showAgainPassword, setShowAgainPassword] = useState(false);

  // Qeydiyyat formunun göndərilməsi
  const registerSubmit = (e) => {
    e.preventDefault();

    // Bütün sahələrin doldurulduğunu yoxlayır
    if (
      !user.fullname ||
      !user.email ||
      !user.password ||
      !user.againPassword
    ) {
      alert("Please fill in all fields");
    } else {
      // Şifrələrin uyğun olub-olmadığını yoxlayır
      if (user.password === user.againPassword) {
        // LocalStorage-dan mövcud istifadəçiləri gətirir
        const registeredUsers =
          JSON.parse(localStorage.getItem("registeredUsers")) || [];

        // Eyni email ilə qeydiyyatdan keçmiş istifadəçini yoxlayır
        const existingUser = registeredUsers.find(
          (u) => u.email === user.email
        );
        if (existingUser) {
          alert("Email already registered");
        } else {
          // Yeni istifadəçini siyahıya əlavə edir
          registeredUsers.push(user);
          localStorage.setItem(
            "registeredUsers",
            JSON.stringify(registeredUsers)
          );

          // 2 saniyə sonra istifadəçini login səhifəsinə yönləndirir
          setTimeout(() => {
            window.location.assign("/login");
          }, 2000);

          alert("Registration successful");
        }
      } else {
        alert("Passwords do not match");
      }
    }
  };

  // Şifrəni göstərmək və gizlətmək üçün funksiyalar
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowAgainPassword = () => {
    setShowAgainPassword(!showAgainPassword);
  };

  return (
    <div>
      <div className="register">
        <div className="container-fluid">
          <div className="reg-box">
            <p></p>
          </div>
        </div>

        {/* Qeydiyyat formu */}
        <div className="container d-flex align-items-center justify-content-center flex-column my-5">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 register-border">
            <h1 className="text-center my-5">Register</h1>

            <form onSubmit={registerSubmit}>
              {/* Ad və soyad sahəsi */}
              <div className="mb-3">
                <label className="form-label">Fullname</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  onChange={handleChange}
                />
              </div>

              {/* Email sahəsi */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              {/* Şifrə sahəsi */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                  />
                  {/* Göz ikonu ilə şifrəni göstər/gizlət */}
                  <span
                    className="input-group-text"
                    style={{ height: "38px" }}
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </span>
                </div>
              </div>

              {/* Şifrəni təkrar daxil etmə sahəsi */}
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showAgainPassword ? "text" : "password"}
                    className="form-control"
                    name="againPassword"
                    onChange={handleChange}
                  />
                  {/* Göz ikonu ilə şifrəni göstər/gizlət */}
                  <span
                    className="input-group-text"
                    style={{ height: "38px" }}
                    onClick={toggleShowAgainPassword}
                  >
                    {showAgainPassword ? (
                      <i className="fa-regular fa-eye"></i>
                    ) : (
                      <i className="fa-regular fa-eye-slash"></i>
                    )}
                  </span>
                </div>
              </div>

              {/* Qeydiyyatdan keç düyməsi */}
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
            </form>

            {/* Daxil olma səhifəsinə keçid */}
            <Link to="/login" className="my-3 btn btn-dark register-btn">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
