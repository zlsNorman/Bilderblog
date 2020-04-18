import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import btnStyles from "./button.module.scss";

const Button = ({ handleClick, name, ClassName }) => <button type="text" className={ClassName} onClick={handleClick}>{name}</button>
export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
  ClassName: PropTypes.string,
}

Button.defaultProps = {
  handleClick: () => {},
  name: 'Button',
  ClassName: "btn",
}

