import react from "react";

export const Slider = ({
  initialPosition = 0,
  min = 0,
  max = 100,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={initialPosition}
        className="w-40 h-1 bg-gray-200 accent-purple-500 rounded-lg appearance-none cursor-pointer"
        {...props}
      ></input>
    </div>
  );
};
