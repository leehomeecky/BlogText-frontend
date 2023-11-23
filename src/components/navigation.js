import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const pageLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

// const authLinks = [
//   {
//     title: "Login",
//     path: "/login",
//   },
//   {
//     title: "Sign Up",
//     path: "/sign-up",
//   },
//   {
//     title: "Logout",
//     path: "/logout",
//   },
// ];

const Navigation = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav
      className={`site-navigation ${menuActive && "active"}`}
      role="navigation"
    >
      <span className="logo">
        Blog<span className="logo-sub">Text</span>
      </span>
      <div className="menu-content-container">
        <ul>
          {pageLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-avatar-container">
          <Avatar
            size={50}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span className="menu-avatar-name">{user.firstName}</span>
        </div>
      </div>
      <i
        className="icon ionicons ion-ios-menu"
        onClick={(ev) => setMenuActive(!menuActive)}
      />
    </nav>
  );
};

export default Navigation;
