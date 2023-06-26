import { ReactNode } from "react";

interface IInputLabelProps {
  label: string;
  name: string;
  children: ReactNode;
}

export const InputLabel = (props: IInputLabelProps) => {
  const { label, name, children } = props;

  return (
    <label htmlFor={name}>
      {label}
      <br />
      {children}
    </label>
  );
};

export default InputLabel;
