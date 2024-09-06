import ResourceDetailes from "./_component/ResourceDetailes";

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

export default function ResourceDetailesPage({
	params,
}: {
	params: ResourcePageParams;
}) {
	const { resourceId } = params;

	return (
		<div>
			<ResourceDetailes resourceId={resourceId} />
		</div>
	);
}
