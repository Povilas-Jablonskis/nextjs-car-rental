"use client";

import CarList from "@/app/_components/panels/CarList";
import { withTransitionContext } from "@/app/_hoc/withTransitionContext";
import { CarCategory } from "@prisma/client";
import CarDetails from "./components/carDetails";

interface CarsProps {
  params: {
    id: string;
  };
}

function CarsWithId({ params }: CarsProps) {
  return (
    <div className="grid gap-y-8 px-6 py-8 2xl:p-8">
      <CarDetails params={params} />
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

export default withTransitionContext(CarsWithId);
