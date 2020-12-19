import React from "react";
import "./Button.scss";

const Button = ({
  buttonType = "button",
  buttonOnClick,
  buttonTitle,
  buttonWidth,
  buttonHeight,
  buttonFontSize,
}) => (
  <button
    type={buttonType}
    onClick={buttonOnClick}
    className="button"
    style={{
      width: buttonWidth,
      height: buttonHeight,
      fontSize: buttonFontSize,
    }}
  >
    {buttonTitle}
  </button>
);

export default Button;
