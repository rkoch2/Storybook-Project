import React, { useState } from "react";

type TextFieldProps = {
  /**
   * What type of input should be rendered?
   */
  type?:
    | "text"
    | "email"
    | "password"
    | "date"
    | "datetime-local"
    | "search"
    | "tel"
    | "time"
    | "url"
    | "week";

  /**
   * What the label should be.
   * */
  label?: string;

  /**
   * What the placeholder text should be.
   * */
  placeholder?: string;

  /**
   * What the supporting text should be.
   * */
  supportingText?: string;
};

export const TextField = ({
  type = "text",
  label = "",
  placeholder = "Type here...",
  supportingText = "",
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState<string>("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="">
      <div>
        <label
          htmlFor="text-field-${label}"
          className="text-xs text-gray-700 bg-white top-2 left-4 relative px-1"
        >
          {label}
        </label>
      </div>
      <input
        type={type}
        onChange={handleChange}
        id="text-field-${label}"
        className="border border-gray-400 rounded-md px-3 py-4 text-gray-800 text-sm w-60"
        placeholder={placeholder}
        value={value}
        {...props}
      ></input>
      <p className="text-xs text-gray-500 relative left-5 top-1">
        {supportingText}
      </p>
    </div>
  );
};
