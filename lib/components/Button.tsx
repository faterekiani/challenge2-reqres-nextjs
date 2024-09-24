import Spinner from "./Spinner";
import { cva } from "class-variance-authority";

type Props = {
	children: React.ReactNode;
	variant: "primary" | "secondary" | "tertiary";
	type?: "button" | "submit";
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	isLoading?: boolean;
};

const buttonVariants = cva(
	[
		"flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all font-semibold",
	],
	{
		variants: {
			variant: {
				primary: "bg-primary-950 text-white hover:bg-primary-800",
				secondary: "outline outline-1 text-primary-950 hover:bg-primary-100",
				tertiary:
					"bg-primary-950 hover:bg-primary-700 disabled:bg-slate-400 text-white w-full",
			},
			size: {
				sm: "w-36",
				md: "w-auto",
			},
			type: {
				submit: "bg-primary-950 text-white hover:bg-primary-800",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export default function Button({
	children,
	variant,
	type = "button",
	onClick,
	className,
	disabled,
	isLoading = false,
}: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={` ${buttonVariants({ variant })} ${className}`}
			disabled={disabled || isLoading}
		>
			{isLoading ? <Spinner size="small" /> : children}
		</button>
	);
}
