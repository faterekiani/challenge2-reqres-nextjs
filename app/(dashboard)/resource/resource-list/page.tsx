import { SearchParams } from "@/_lib/types/types";
import { Suspense } from "react";
import Spinner from "../../../../_lib/_components/Spinner";
import ResourceTable from "./_components/ResourceTable";

export const metadata = {
	title: "Resource list",
};

export default function page({ searchParams }: { searchParams: SearchParams }) {
	const pageCount = searchParams?.page || 1;
	const pageSize = searchParams?.size || 6;
	console.log(searchParams?.page);
	return (
		<div className="w-[900px] mx-auto">
			<h1 className="text-secondary text-2xl font-black tracking-tight uppercase pb-2">
				List of <span className="text-primary-950">resources</span>
			</h1>
			<Suspense fallback={<Spinner size="medium" />}>
				<ResourceTable page={pageCount} size={pageSize} />
			</Suspense>
		</div>
	);
}
