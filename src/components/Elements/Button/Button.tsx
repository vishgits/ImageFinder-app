import { ReactEventHandler } from "react";

interface ButtonProps {
  name: string;
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  errorMessage?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnClassName?:string
}
export default function Button({ name, type, label,  onClick = () => {},disabled, btnClassName}: ButtonProps) {
  return (
    <div className="sm:col-span-6 text-right">
      <button
        data-testid={name}
        name={name}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${btnClassName ? btnClassName :'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'} ${disabled && `disabled:opacity-75 bg-gray-600 hover:bg-gray-500`}`}
      >
        {label}
      </button>
    </div>
  );
}
