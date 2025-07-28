import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <ul className="menu-list">
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/upload")}>Upload</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
        <li onClick={() => navigate("/list")}>List</li>
        <li onClick={() => navigate("/detail")}>Detail</li>
        <li onClick={() => navigate("/yourlist")}>Your List</li>
      </ul>
      <ul className="login-list">
        <li>회원가입</li>
        <li>로그인</li>
      </ul>
    </div>
  );
};

export default Header;
