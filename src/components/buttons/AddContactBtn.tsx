interface IAddContactBtnProps {
  label: string;
}

export const AddContactBtn = (props: IAddContactBtnProps) => {
  const { label } = props;

  return (
    <input className="buttons addContactBtn" type="submit" value={label} />
  );
};
