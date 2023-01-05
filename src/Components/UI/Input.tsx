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

const Input = function (props: InputProps) {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
