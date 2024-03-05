import { ChangeEventHandler } from "react";

interface TextInputFieldProps {
  name: string;
  label: string;
  type: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  errorMessage?: string | false | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

export default function TextInputField({
  name,
  label,
  type,
  placeholder,
  onChange = () => {},
  onBlur = () => {},
  value,
  errorMessage,
}: TextInputFieldProps) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          data-testid={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={errorMessage ? true : false}
          aria-describedby={errorMessage ? errorMessage : 'name'}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
           {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
