import CarList from "@/app/_components/panels/CarList";
import { CarCategory } from "@prisma/client";
import { use } from "react";
import CarDetails from "./components/carDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);

  return (
    <div className="grid gap-y-8 px-6 py-8 2xl:p-8">
      <CarDetails params={resolvedParams} />
      <CarList
        className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        pageSize={4}
        searchParams={{ category: CarCategory.Recent }}
        title="Recent Cars"
      />
      <CarList
        className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        pageSize={4}
        searchParams={{ category: CarCategory.Recommended }}
        title="Recommended Cars"
      />
    </div>
  );
}
