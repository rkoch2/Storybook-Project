import React, { useState, useEffect } from "react";

interface ICheckbox {
  /*
  Whether the checkbox is checked.
  */
  isChecked?: boolean;
  /*
  The text to display next to the checkbox.
  */
  text?: string;
}

// TODO: [Q for Eric] Clicking the checkbox is not updating the initial isChecked value -- can you update story values from the component?
// Since we don't have a setIsChecked function, I'm not sure how to update isChecked
export const Checkbox = ({
  isChecked = false,
  text = "",
  ...props
}: ICheckbox) => {
  const [checked, setChecked] = useState<boolean>(isChecked);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  // Update the value of isChecked to be the value of checked when checked changes
  // useEffect(() => {
  //   isChecked = checked;
  // }, [checked]);

  return (
    <div className="py-2">
      <input
        onChange={handleChange}
        id="check"
        type="checkbox"
        className="hidden peer"
        checked={checked || isChecked}
        defaultChecked={isChecked}
        {...props}
      ></input>
      <label
        htmlFor="check"
        className="flex items-center cursor-pointer w-5 h-5 
        border-2 border-gray-500 peer-checked:border-purple-500 peer-checked:bg-purple-500 
        rounded-sm text-white select-none text-center"
      >
        ✓
      </label>
      <label
        htmlFor="check"
        className="text-sm text-gray-700 bg-white bottom-6 left-6 relative px-1"
      >
        {text}
      </label>
    </div>
  );
};
