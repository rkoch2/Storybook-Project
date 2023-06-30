import React, { useState } from "react";

export const TextField = ({
  label = "",
  placeholder = "Type here...",
  supportingText = "",
  ...props
}) => {
  const [value, setValue] = useState<string>("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="">
      <div>
        <label
          htmlFor="text-field"
          className="text-xs text-gray-700 bg-white top-2 left-4 relative px-1"
        >
          {label}
        </label>
      </div>
      <input
        onChange={handleChange}
        id="text-field"
        type="text"
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

/*
<div>
      <label
        htmlFor="text-field"
        className="text-xs text-gray-700 bg-white bottom-7 left-12 relative px-1"
      >
        {label}
      </label>
      <input
        onChange={handleChange}
        id="text-field"
        type="text"
        className="border border-gray-400 rounded-md px-3 py-4 text-gray-800 text-sm"
        placeholder={placeholder}
        value={value}
        {...props}
      ></input>
      <p className="text-xs text-gray-500 relative left-12 top-1">
        {supportingText}
      </p>
    </div>
*/
