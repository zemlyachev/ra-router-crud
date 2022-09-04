import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ClosableHeader(props) {
  return (
    <nav className="navbar navbar-light px-2 pb-0">
      <span className="navbar-brand ms-1 mb-0 h1">{props.children}</span>
      <Link to={props.to} onClick={props.onClick} className="btn-close"></Link>
    </nav>
  );
}

ClosableHeader.defaultProps = {
  to: "/",
};

ClosableHeader.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};
