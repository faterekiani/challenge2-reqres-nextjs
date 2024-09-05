"use client";

import useSingleResource from "@/_lib/hook/useSingleResource";
import Spinner from "@/app/components/Spinner";

type Props = {
	resourceId: number;
};

export default function SingleResourceDetailes({ resourceId }: Props) {
	const { isLoading, singleResourceData } = useSingleResource(resourceId);

	if (isLoading) return <Spinner size="medium" />;

	if (!singleResourceData) return null;

	const { name, year, color, pantone_value } = singleResourceData?.data;

	return (
		<div className="flex flex-col gap-3 px-6 py-6 text-secondary">
			<p className="text-lg capitalize ">
				name: <span className="font-semibold">{name}</span>
			</p>
			<p className="text-lg capitalize ">
				year: <span className="font-semibold">{year}</span>
			</p>
			<p className="text-lg capitalize ">
				color:
				<span className={`font-semibold text-[${color}]`}>{color}</span>
			</p>

			<p className="text-lg capitalize ">
				pantone value: <span className="font-semibold">{pantone_value}</span>
			</p>
		</div>
	);
}
