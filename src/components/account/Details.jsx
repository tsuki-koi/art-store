import React, { useState } from "react";
import StaticLang from "../../utils/StaticLang";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import supabase from "../../utils/supabase";
import { useSelector } from "react-redux";
import { fetchUsers } from "../../tools/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const registeredUsers = useSelector((state) => state.users.items);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [infoWarning, setInfoWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const navigate = useNavigate();

  const [passwordValues, setPasswordValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [infoValues, setInfoValues] = useState({
    firstName: activeUser.first_name,
    lastName: activeUser.last_name,
    userName: activeUser.username,
  });

  const handlePasswordChange = (e) => {
    setPasswordValues({ ...passwordValues, [e.target.name]: e.target.value });
  };

  const handleInfoChange = (e) => {
    setInfoValues({ ...infoValues, [e.target.name]: e.target.value });
  };

  const passwordChangeSubmit = (e) => {
    e.preventDefault();
    console.log(passwordValues);
  };

  const infoChangeSubmit = async (e) => {
    e.preventDefault();

    async function updateUser(infoValues) {
      const { data, error } = await supabase
        .from("users")
        .update({
          first_name: infoValues.firstName,
          last_name: infoValues.lastName,
          username: infoValues.userName,
        })
        .eq("id", activeUser.id)
        .select();

      if (error) {
        setInfoWarning(
          (
            <StaticLang
              az="Məlumatları yeniləyərkən xəta baş verdi"
              en="Error updating data"
            />
          ) + error.message
        );
        return null;
      } else {
        setInfoWarning(<StaticLang az="Məlumatlar uğurla yeniləndi" en="Data updated successfully" />);
        navigate("/account");
        return data[0];
      }
    }

    const updatedUser = await updateUser(infoValues);

    if (updatedUser) {
      fetchUsers();
      const userUpdate = registeredUsers.find(
        (user) => user.id === activeUser.id
      );
      if (userUpdate) {
        localStorage.setItem("activeUser", JSON.stringify(updatedUser));
      }
    }
  };

  return (
    <div className="account-details">
      <form className="info">
        {infoWarning ? <div className="warning">{infoWarning}</div> : ""}

        {/* <div className="avatar">
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span>Нет фото</span>
          </div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            // onChange={uploadAvatar}
          />
        </div> */}

        <div className="name">
          <div className="input-con">
            <label htmlFor="first-name">
              <StaticLang az="Ad" en="First Name" />
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First Name"
              defaultValue={activeUser.first_name}
              onChange={handleInfoChange}
            />
          </div>

          <div className="input-con">
            <label htmlFor="last-name">
              <StaticLang az="Soyad" en="Last Name" />
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last Name"
              defaultValue={activeUser.last_name}
              onChange={handleInfoChange}
            />
          </div>
        </div>

        <div className="input-con">
          <label htmlFor="username">
            <StaticLang az="İstifadəçi Adı" en="Username" />
          </label>
          <input
            type="text"
            id="username"
            name="userName"
            placeholder="Username"
            defaultValue={activeUser.username}
            onChange={handleInfoChange}
            required
          />
        </div>

        <div className="input-con">
          <label htmlFor="email">
            <StaticLang az="E-poçt Ünvanı" en="Email Address" />
          </label>
          <input type="email" id="email" value={activeUser.email} disabled />
        </div>

        <button
          type="submit"
          className="green-btn"
          onClick={(e) => {
            infoChangeSubmit(e);
          }}
        >
          <StaticLang az="Yadda Saxla" en="Save Changes" />
        </button>
      </form>

      <form className="password-change">
        <h3>
          <StaticLang az="Şifrə Dəyişmə" en="Password Change" />
        </h3>

        {passwordWarning ? (
          <div className="warning">{passwordWarning}</div>
        ) : (
          ""
        )}

        <div className="input-con">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Current Password"
            name="currentPassword"
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            onClick={() => {
              setShowCurrentPassword(!showCurrentPassword);
            }}
          >
            {showCurrentPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>

        <div className="input-con">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            name="newPassword"
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            onMouseDown={() => setShowNewPassword(true)}
            onMouseUp={() => setShowNewPassword(false)}
          >
            {showNewPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>

        <div className="input-con">
          <input
            type={showConfirmNewPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            onMouseDown={() => setShowConfirmNewPassword(true)}
            onMouseUp={() => setShowConfirmNewPassword(false)}
          >
            {showConfirmNewPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>

        <button
          type="submit"
          className="green-btn"
          onClick={(e) => {
            passwordChangeSubmit(e);
          }}
        >
          <StaticLang az="Yadda Saxla" en="Save Changes" />
        </button>
      </form>
    </div>
  );
};

export default Details;
