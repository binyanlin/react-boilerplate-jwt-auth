import React from 'react';

const Button = (props) => {
  return <button onClick={props.handleClick} className={[props.class, "btn"].join(" ")}>{props.children}</button>
}

export default Button;