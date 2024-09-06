import UserDetails from "./_components/UserDetails";

type UserPageParams = {
	userId: number;
};

// MetaData
export async function generateMetadata({ params }: { params: UserPageParams }) {
	return { title: `User ${params.userId}` };
}

export default function UserDetailesPage({
	params,
}: {
	params: UserPageParams;
}) {
	const { userId } = params;

	return <UserDetails userId={userId} />;
}
