import ResourceDetails from "./_component/ResourceDetails";

type ResourcePageParams = {
	resourceId: number;
};

export async function generateMetadata({
	params,
}: {
	params: ResourcePageParams;
}) {
	return { title: `Resource ${params.resourceId}` };
}

export default function ResourceDetailsPage({
	params,
}: {
	params: ResourcePageParams;
}) {
	const { resourceId } = params;

	return (
		<div>
			<ResourceDetails resourceId={resourceId} />
		</div>
	);
}
