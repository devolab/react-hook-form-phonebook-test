import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  InputField,
  InputError,
  InputLabel
} from "../../components/form";
import { AddContactBtn } from "../../components/buttons/AddContactBtn";
import { handleAddContact } from "../../handlers/handleAddContact";

// ZOD
import { FormSchemaType } from "../../types/Form.types";
import { formSchema } from "../../helpers/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

// interface
interface IPhoneBookFormProps {
  phonebookDispatch: React.Dispatch<any>;
}

export const PhoneBookForm = (props: IPhoneBookFormProps): JSX.Element => {
  const { phonebookDispatch } = props;

  // React-hook-form init
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: ""
    }
  });

  // Form Submission
  const handleFormOnSubmit: SubmitHandler<FormSchemaType> = (data) => {
    handleAddContact(data, phonebookDispatch);
    reset();
  };

  return (
    <Form handleFormOnSubmit={handleFormOnSubmit} handleSubmit={handleSubmit}>
      {/** First Name */}
      <InputLabel name="firstName" label="First Name">
        <InputField name="firstName" register={register} required />
        <InputError name="firstName" errors={errors} />
      </InputLabel>

      {/** Last Name */}
      <InputLabel name="lastName" label="Last Name">
        <InputField name="lastName" register={register} required />
        <InputError name="lastName" errors={errors} />
      </InputLabel>

      {/** Contact Number */}
      <InputLabel name="phone" label="Contact number">
        <InputField type="number" name="phone" register={register} required />
        <InputError name="phone" errors={errors} />
      </InputLabel>

      <AddContactBtn label="Add Contact" />
    </Form>
  );
};
