import SingleResourceDetailes from "./_component/SIngleResourceDetailes";

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

export default function Page({ params }: { params: ResourcePageParams }) {
  const { resourceId } = params;

  return (
    <div>
      <SingleResourceDetailes resourceId={resourceId} />
    </div>
  );
}
