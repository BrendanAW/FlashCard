import React from "react";
import "../../node_modules/@fortawesome/react-fontawesome/index";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";

const Navbar = ({ refreshCards }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button className="btn btn-secondary" onClick={() => refreshCards()}>
        Refresh Cards
      </button>
      <span className="badge badge-pill badge-secondary"></span>
    </nav>
  );
};

export default Navbar;
