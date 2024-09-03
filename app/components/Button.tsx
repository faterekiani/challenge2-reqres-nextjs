import Spinner from "./Spinner";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
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
    "w-36 flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm transition-all font-semibold";

  const variantClasses = {
    primary: "bg-primary-950 text-white hover:bg-primary-800 ",

    secondary: "outline outline-1 text-primary-950 hover:bg-primary-100 ",

    tertiary:
      "bg-primary-950 hover:bg-primary-700 disabled:bg-slate-400 text-white w-full",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClassName} ${variantClasses[variant]}  ${className}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner size="small" /> : children}
    </button>
  );
}
