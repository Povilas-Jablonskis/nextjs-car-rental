import { use } from "react";
import Cars from "./component";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = use(searchParams);

  return <Cars params={resolvedSearchParams} />;
}
