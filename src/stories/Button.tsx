import React, { useMemo } from "react";

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "filled": {
      return "text-white bg-purple-800 border-purple-800 border-2";
    }
    case "outlined": {
      return "text-purple-800 bg-transparent border-slate-400 border-2";
    }
    case "text": {
      return "text-purple-800 bg-transparent border-transparent border-2";
    }
    case "tonal": {
      return "text-slate-800 bg-purple-200 border-transparent border-2";
    }
    case "elevated": {
      return "text-purple-800 bg-slate-100 border-grey-200 border-2 shadow-md";
    }
    default: {
      return "text-white bg-purple-800 border-purple-800 border-2";
    }
  }
};

const BASE_BUTTON_CLASSES = "cursor-pointer rounded-full px-4 py-2";

export const Button = ({
  variant = "filled",
  label = "Button",
  // showIcon = false,
  // icon = null,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const styleClass = getVariantClasses(variant);

    return [styleClass];
  }, [variant]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
