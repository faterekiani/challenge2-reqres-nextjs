import SingleUserDetailes from "./_components/SingleUserDetailes";

type UserPageParams = {
  userId: number;
};

// MetaData
export async function generateMetadata({ params }: { params: UserPageParams }) {
  return { title: `User ${params.userId}` };
}

export default function Page({ params }: { params: UserPageParams }) {
  const { userId } = params;

  return <SingleUserDetailes userId={userId} />;
}
