import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1
        className="text-4xl   
 font-bold text-gray-800"
      >
        404   - Not Found
      </h1>
      <p className="text-gray-500">
        The page you are looking for could not be found.
      </p>
      <Link href="/" className="mt-4 text-blue-500">
        Return to Homepage
      </Link>
    </div>
  );
}
