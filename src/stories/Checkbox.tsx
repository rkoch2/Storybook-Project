import React, { useState } from "react";

interface ICheckbox {
  /*
  Whether the checkbox is checked.
  */
  isChecked?: boolean;
  /*
  The text to display next to the checkbox.
  */
  text?: string;
  /*
  (Required) the id of the checkbox.
  */
  elementId: string;
}

// Clicking the checkbox is not updating the initial isChecked value;
// Can you update storybook controls by only interacting with the component?
export const Checkbox = ({
  isChecked = false,
  text = "",
  elementId,
  ...props
}: ICheckbox) => {
  const [checked, setChecked] = useState<boolean>(isChecked);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  return (
    <div className="py-2">
      <input
        onChange={handleChange}
        id={elementId}
        type="checkbox"
        className="hidden peer"
        checked={checked || isChecked}
        defaultChecked={isChecked}
        {...props}
      ></input>
      <label
        htmlFor={elementId}
        className="flex items-center cursor-pointer w-5 h-5 
        border-2 border-gray-500 peer-checked:border-purple-500 peer-checked:bg-purple-500 
        rounded-sm text-white select-none text-center"
      >
        ✓
      </label>
      <label
        htmlFor={elementId}
        className="text-sm text-gray-700 bg-white bottom-6 left-6 relative px-1"
      >
        {text}
      </label>
    </div>
  );
};
