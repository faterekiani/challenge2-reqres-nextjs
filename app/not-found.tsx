import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center h-screen justify-center space-y-8 bg-primary-100">
      <h1 className="text-3xl font-bold">This page could not be found :(</h1>
      <Link
        href="/user"
        className="inline-block bg-primary-950 text-white px-6 py-3 text-lg "
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
