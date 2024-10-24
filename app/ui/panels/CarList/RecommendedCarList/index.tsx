"use client";

import { useGetRecommendedCarList } from "@/app/lib/hooks";
import PrimaryButton from "@/app/ui/buttons/primaryButton";
import CarList from "..";
import CarListSkeleton from "../skeleton";

export default function RecommendedCarList() {
  const pageSize = 8;
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetRecommendedCarList(pageSize);

  let totalCars = data?.pages.flatMap((x) => x.data).length;
  totalCars = totalCars != null ? totalCars : pageSize;

  if (isLoading)
    return (
      <CarListSkeleton
        className="grid grid-cols-4 gap-8"
        totalCars={totalCars}
      />
    );

  return (
    <>
      <CarList className="grid grid-cols-4 gap-8" data={data} />
      {hasNextPage && (
        <div className="flex place-items-center pt-16">
          <PrimaryButton
            size="lg"
            className="mx-auto"
            disabled={isLoading}
            onClick={() => fetchNextPage()}
          >
            Show more cars
          </PrimaryButton>
        </div>
      )}
    </>
  );
}
