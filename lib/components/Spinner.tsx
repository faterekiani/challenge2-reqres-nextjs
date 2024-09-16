import { LoaderCircle } from "lucide-react";

type Props = {
	size: "small" | "medium";
};

const Spinner = ({ size }: Props) => {
	const style =
		size === "small"
			? "text-white w-[20px]"
			: "w-[60px] text-primary-950 mx-auto my-10 ";
	return <LoaderCircle size={size} className={`animate-spin ${style}`} />;
};

export default Spinner;
