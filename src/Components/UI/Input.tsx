import React from "react";

interface InputProps {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    defaultValue: string;
  };
}

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
