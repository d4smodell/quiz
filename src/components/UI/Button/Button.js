import React from "react";
import s from "./Button.module.scss";

const Button = (props) => {
    const cls = [
        s.Button,
        s[props.type]
    ]
  return (
    <button
        className={cls.join(' ')}
        disabled={props.disabled}
        onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
