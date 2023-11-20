import React from "react";
import { Link } from "react-router-dom";

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

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <span className="logo">
        {" "}
        Blog<span className="logo-sub">Text</span>
      </span>
      <ul>
        {pageLinks.map((val, index) => (
          <Link to={val.path}>
            <li key={index}>{val.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
