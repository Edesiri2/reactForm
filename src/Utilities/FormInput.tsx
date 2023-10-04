import { FC, ChangeEvent } from "react";

interface FormInputProps {
  placeholder: string | number;
  name: String;
  label: String;
  pattern: String;
  onKeyDown: any
  errorMessage: any;
  type: "text" | "number" | "date" | "file" | "tel" ;
  required: boolean;
  disabled?: boolean;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = ({
  placeholder,
  name,
  disabled,
  type,
  pattern,
  errorMessage,
  required,
  onKeyDown,
  onBlur,
  onChange,
  onClick,
}) => {
  return (
    <div className="">
      <input
        required={required}
        className="w-80 lg:w-80 md:w-40 py-2 px-2 text-black border  border-gray-400 hover:border-red-600"
        type={type}
        name={String(name)}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        placeholder={String(placeholder)}
        pattern={String(pattern)}
      />
      <span className=" font-[12px] p-[3px] text-red-600 hidden">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
