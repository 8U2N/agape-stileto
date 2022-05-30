import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function NoMatch() {
  return (
    <div className="no-match-page-container">
      <div className="text-box">
        <div className="text-wrapper">
          <h2>You took a wrong turn somewhere...</h2>
          <h2>This page doesn't exist.</h2>
        </div>
        <div className="link-wrapper">
          <Link to="/">
            <div className="home-page-icon-wrapper">
              <FontAwesomeIcon icon={faHeartBroken} beat />
            </div>
            <div className="home-page-text-wrapper">Return to Home Page</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
