interface IDeleteContactBtnProps {
  label: string;
  onClick: () => void;
}

export const DeleteContactBtn = (props: IDeleteContactBtnProps) => {
  const { label, onClick } = props;

  return (
    <input
      className="buttons deleteContactBtn"
      type="button"
      value={label}
      onClick={onClick}
    />
  );
};
