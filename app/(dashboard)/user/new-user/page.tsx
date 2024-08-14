import CreateNewUser from "./_components/CreateNewUser";

export const metadata = {
  title: "New user",
};

export default async function Page() {
  return (
    <div>
      <CreateNewUser />;
    </div>
  );
}
