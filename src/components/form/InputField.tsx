import { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputFieldProps {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  options?: RegisterOptions;
  type?: string;
}

const InputField: FC<IInputFieldProps> = ({
  name,
  type,
  register,
  required = false,
  options = {}
}) => {
  return (
    <>
      <input
        id={name}
        type={!type ? "text" : type}
        {...register(name, { required, ...options })}
      />
    </>
  );
};

export default InputField;
