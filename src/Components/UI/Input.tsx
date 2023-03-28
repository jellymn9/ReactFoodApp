import React from "react";
import {InputWrapper} from "./Input.styled";

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
    <InputWrapper>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputWrapper>
  );
});

export default Input;
