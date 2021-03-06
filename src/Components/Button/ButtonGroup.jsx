import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ButtonGroup = ({ children, className, vertical, ...attrs }) => {
  const classes = classNames("btm-group", className, { vertical });
  return (
    <div>
      <div className={classes} {...attrs}>
        {children}
      </div>
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool
};

ButtonGroup.defaultProps = {
  children: null,
  className: "",
  vertical: false
};

export default ButtonGroup;
