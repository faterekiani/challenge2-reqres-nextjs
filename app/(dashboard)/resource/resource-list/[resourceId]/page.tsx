import SIngleResourceDetailes from "../../_components/SIngleResourceDetailes";

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
      <SIngleResourceDetailes resourceId={resourceId} />
    </div>
  );
}
