"use client";

import TransitionButton from "@/app/_components/buttons/transition";
import Favourite from "@/app/_components/favourite";
import Rating from "@/app/_components/rating";
import formatNumber from "@/app/_helpers/formatNumber";

import { Prisma } from "@prisma/client";

function DescriptionItem({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-xs text-secondary-300 sm:text-sm 2xl:text-xl">
        {name}
      </span>
      <span className="text-xs font-semibold text-secondary-500 sm:text-sm sm:text-secondary-400 2xl:text-xl">
        {value}
      </span>
    </div>
  );
}

function DescriptionLine({ record }: { record: Record<string, string> }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 2xl:gap-x-11">
      {Object.entries(record).map(([key, value]) => (
        <DescriptionItem key={key} name={key} value={value} />
      ))}
    </div>
  );
}

interface CarInformationProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Prisma.CarsGetPayload<{
    include: {
      reviews: true;
    };
  }>;
}
export default function CarInformation({ car, ...rest }: CarInformationProps) {
  const score = Math.round(
    car.reviews.reduce((prev, curr) => prev + curr.score, 0) /
      car.reviews.length,
  );

  return (
    <div
      {...rest}
      className="flex flex-col rounded-xl bg-white p-4 2xl:p-6 2xl:pb-8"
    >
      <div className="mb-2 flex place-content-between">
        <span className="text-xl font-bold text-secondary-500 sm:text-2base">
          {car.name}
        </span>
        <Favourite defaultFavourite={car.favourite} />
      </div>
      <div className="flex place-items-center gap-x-2">
        <Rating rating={score} reviewCount={car.reviews.length} />
      </div>
      <div className="mt-4 text-xs text-secondary-300 sm:text-sm sm:text-secondary-400 2xl:mt-8 2xl:text-xl">
        {car.description}
      </div>
      <div className="my-8 grid gap-y-4">
        <DescriptionLine
          record={{
            "Type Car": car.type,
            Capacity: `${car.seats} ${car.seats > 1 ? "Persons" : "Person"}`,
          }}
        />
        <DescriptionLine
          record={{
            Steering: car.gear,
            Gasoline: `${car.fuelTank}L`,
          }}
        />
      </div>

      <div className="mt-auto flex place-content-between">
        <div className="grid place-content-center font-bold">
          <span className="text-xl text-secondary-500 sm:text-2sm">
            {formatNumber(car.price)}/
            <span className="text-xs text-secondary-300 sm:text-base">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="text-xs text-secondary-300 sm:text-base">
              {formatNumber(car.oldPrice)}
            </s>
          )}
        </div>
        <TransitionButton
          url={`/rentCar/byId/${car.id}`}
          className="!px-8 !py-4 !font-bold"
        >
          Rent Now
        </TransitionButton>
      </div>
    </div>
  );
}
