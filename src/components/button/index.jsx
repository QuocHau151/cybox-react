import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./styles.scss";

function Button({ title, path, onClick }) {
  return (
    <Link className="tf-button btn-effect" to={path} onClick={onClick}>
      <span className="boder-fade"></span>
      <span className="effect">{title}</span>
    </Link>
  );
}

export default Button;
