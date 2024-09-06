import { SearchParams } from "@/lib/types/types";
import ResourcesList from "./_components/ResourcesList";

export const metadata = {
	title: "Resource list",
};

export default function ResoursesListPage({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const pageCount = searchParams?.page || 1;
	const pageSize = searchParams?.size || 6;
	console.log(searchParams?.page);
	return (
		<>
			<h1 className="text-secondary text-2xl font-black tracking-tight uppercase pb-2">
				List of <span className="text-primary-950">resources</span>
			</h1>
			<ResourcesList page={pageCount} size={pageSize} />
		</>
	);
}
