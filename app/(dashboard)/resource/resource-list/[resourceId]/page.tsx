import SingleResourceDetailes from "../../_components/SingleResourceDetailes";

type TResourcePageParams = {
  resourceId: number;
};
export async function generateMetadata({
  params,
}: {
  params: TResourcePageParams;
}) {
  return { title: `Resource ${params.resourceId}` };
}

export default function Page({ params }: { params: TResourcePageParams }) {
  const { resourceId } = params;

  return (
    <div>
      <SingleResourceDetailes resourceId={resourceId} />
    </div>
  );
}
