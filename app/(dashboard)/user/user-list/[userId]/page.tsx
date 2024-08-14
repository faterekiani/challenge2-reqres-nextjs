import SingleUserDetailes from "./_components/SingleUserDetailes";

type TUserPageParams = {
  userId: number;
};

// MetaData
export async function generateMetadata({
  params,
}: {
  params: TUserPageParams;
}) {
  return { title: `User ${params.userId}` };
}

export default function Page({ params }: { params: TUserPageParams }) {
  const { userId } = params;

  // if (!data || !data.data) return <div>No user data found</div>;

  return <SingleUserDetailes userId={userId} />;
}
