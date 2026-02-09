"use client";

import CarNotFound from "@/app/_components/carNotFound";
import { useGetCar } from "@/app/_lib/hooks";
import { use } from "react";
import RentalForm from "./components/form";
import RentalFormSkeleton from "./components/form/skeleton";
import RentalSummary from "./components/rentalSummary";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  const { data, isLoading } = useGetCar(id);

  if (isLoading) return <RentalFormSkeleton />;

  if (!data) return <CarNotFound />;

  return (
    <div className="grid gap-8 xl:grid-cols-[auto_36%]">
      <RentalForm />
      <RentalSummary data={data} />
    </div>
  );
}
