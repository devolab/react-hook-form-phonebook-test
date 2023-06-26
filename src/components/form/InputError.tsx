import { FC } from "react";
import { DeepMap, FieldError } from "react-hook-form";

interface IInputErrorProps {
  errors: DeepMap<any, FieldError>;
  name: string;
}

const InputError: FC<IInputErrorProps> = (props: IInputErrorProps) => {
  const { errors, name } = props;

  return (
    <>
      {errors[name] && (
        <span className="inputError">{errors[name]?.message}</span>
      )}
    </>
  );
};

export default InputError;
