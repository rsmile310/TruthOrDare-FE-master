import "./style.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import navConfig from "./navConfig";

export default function Navbar({ openModal }) {
  const [navMenu, setNavMenu] = useState(false);

  const handleOpenMenu = () => setNavMenu(true);
  const handleCloseMenu = () => setNavMenu(false);
  return (
    <nav className="navbar">
      <div
        className="nav-icon-open"
        onClick={handleOpenMenu}
        style={{ zIndex: `${openModal ? 0 : 99}` }}
      >
        <img src="/images/other/menu_btn.png" alt="" />
      </div>
      <div
        className={navMenu ? "nav-container active" : "nav-container"}
        style={{
          backgroundImage:
            "url(/images/other/FRA-All-Players-Menu-BACKGROUND.jpg)",
        }}
      >
        <div className="nav-icon-close" onClick={handleCloseMenu}>
          <img
            src="/images/other/close_btn.png"
            width="34px"
            height="34px"
            alt=""
          />
        </div>
        <div className="navTextBox">
          <h1>
            WANT TO
            <br /> KNOW MORE?
          </h1>
        </div>
        <ul className="nav-menu">
          {navConfig.map((e, index) => (
            <li key={index} className="nav-item">
              <NavLink className="nav-links" to={e.path}>
                <p>{e.title}</p>
                <img src={e.iconPath} alt="" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
