import cx from "classnames";

type ButtonProps = {
  /**
  What styles should be applied to the element?
  */
  variant?: "filled" | "outlined" | "text" | "tonal" | "elevated";

  /**
  What the button label should be.
  */
  label?: string;

  /**
  What custom classes should be applied to the element?
  */
  className?: string;

  /**
  When present, specifies that the button should be disabled.
  */
  disabled?: boolean;

  /**
  What the inner content of the button is.
  */
  children?: React.ReactNode;

  /**
  Optional click handler.
  */
  onClick?: () => void;
};

function setButtonStyles(variant: string) {
  return cx(
    // base styles
    "cursor-pointer rounded-full px-4 py-2",
    {
      // handle variants
      // filled
      "text-white bg-purple-800 border-purple-800 border-2":
        variant === "filled",
      // outlined
      "text-purple-800 bg-transparent border-slate-400 border-2":
        variant === "outlined",
      // text
      "text-purple-800 bg-transparent border-transparent border-2":
        variant === "text",
      // tonal
      "text-slate-800 bg-purple-200 border-transparent border-2":
        variant === "tonal",
      // elevated
      "text-purple-800 bg-slate-100 border-grey-200 border-2 shadow-md":
        variant === "elevated",
    }
  );
}

export const Button = ({
  variant = "filled",
  label = "Button",
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`${setButtonStyles(variant)}`} {...props}>
      {label}
    </button>
  );
};
