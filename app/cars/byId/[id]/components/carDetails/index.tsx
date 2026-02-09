"use client";

import CarNotFound from "@/app/_components/carNotFound";
import { useGetCar } from "@/app/_lib/hooks";
import Reviews from "../reviews";
import CarInformation from "./carInformation";
import ImageSlider from "./imageSlider";
import CarDetailsSkeleton from "./skeleton";

interface CarDetailsProps {
  params: {
    id: string;
  };
}

export default function CarDetails({ params }: CarDetailsProps) {
  const { data, isLoading } = useGetCar(params.id);

  if (isLoading) return <CarDetailsSkeleton />;

  if (!data) return <CarNotFound />;

  return (
    <>
      <div className="grid gap-8 xl:grid-cols-[auto_1fr]">
        <ImageSlider />
        <CarInformation car={data} />
      </div>
      <Reviews params={params} totalReviews={data.reviews.length} />
    </>
  );
}
