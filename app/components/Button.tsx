import Spinner from "./Spinner";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function Button({
  children,
  variant,
  type = "button",
  onClick,
  className,
  disabled,
  isLoading = false,
}: Props) {
  const baseClassName =
    "w-36 flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm";

  const variantClasses = {
    primary: "bg-primary-950 text-white hover:bg-primary-800 transition-all",

    secondary:
      "outline outline-1 text-primary-950 hover:bg-primary-100 transition-all ",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${baseClassName} ${variantClasses[variant]}  ${className}`}
      onClick={onClick}
    >
      {isLoading ? <Spinner size="small" /> : children}
    </button>
  );
}
