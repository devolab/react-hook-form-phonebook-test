import { ReactNode } from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { FormSchemaType } from "../../types/Form.types";

interface IPhoneBookFormHeadProps {
  handleSubmit: UseFormHandleSubmit<FormSchemaType>;
  handleFormOnSubmit: SubmitHandler<FormSchemaType>;
  children: ReactNode[];
}

const Form = (props: IPhoneBookFormHeadProps) => {
  const { handleSubmit, handleFormOnSubmit, children } = props;

  return <form onSubmit={handleSubmit(handleFormOnSubmit)}>{children}</form>;
};

export default Form;
