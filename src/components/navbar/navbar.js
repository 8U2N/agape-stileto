import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const NavComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="navbar">
        <div className="nav-link">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink exact to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink exact to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="name" style={{ fontSize: "2em", paddingRight: "30px" }}>
          <FontAwesomeIcon icon={faPaintBrush} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavComponent);
