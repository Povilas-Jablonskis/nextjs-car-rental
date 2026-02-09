import { use } from "react";
import CarsWithId from "./component";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);

  return <CarsWithId params={resolvedParams} />;
}
