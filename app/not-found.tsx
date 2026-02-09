import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <div className="m-auto flex flex-col text-center">
      <h2>Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link
        className="flex place-items-center self-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-xs font-semibold text-white focus:border-primary-focused active:bg-primary-700 disabled:pointer-events-none disabled:opacity-40 sm:px-6 sm:py-3.5 sm:text-base"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
