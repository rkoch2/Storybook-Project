import React, { useMemo } from "react";

const BASE_SWITCH_CLASSES = "w-11 h-6 bg-gray-200";

export const Switch = ({ ...props }) => {
  return (
    <input
      type="checkbox"
      className={`${BASE_SWITCH_CLASSES}`}
      {...props}
    ></input>
  );
};
