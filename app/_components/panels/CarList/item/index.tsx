"use client";

import TransitionButton from "@/app/_components/buttons/transition";
import Favourite from "@/app/_components/favourite";
import GearTypeIcon from "@/app/_components/icons/gearType";
import SeatsIcon from "@/app/_components/icons/seats";
import TankSizeIcon from "@/app/_components/icons/tankSize";
import formatNumber from "@/app/_helpers/formatNumber";
import { Cars } from "@prisma/client";
import Image from "next/image";
import CarProperty from "./carProperty";

interface CarListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  car: Cars;
}

export default function CarListItem({ car, ...rest }: CarListItemProps) {
  return (
    <div {...rest} className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
      <div className="flex place-content-between">
        <span className="text-base font-bold text-secondary-500 sm:text-xl">
          {car.name}
        </span>
        <Favourite defaultFavourite={car.favourite} />
      </div>
      <span className="font-bold text-secondary-300">{car.type}</span>
      <div className="mb-11 mt-8 flex gap-x-4 sm:m-0 sm:flex-1 sm:flex-col sm:place-items-stretch">
        <div className="relative h-28 flex-1 sm:mb-11 sm:mt-8 sm:flex-auto">
          <Image
            priority
            fill
            className="object-contain"
            src={car.image}
            alt="Car"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-4 sm:mb-6 sm:flex-row sm:place-content-between">
          <CarProperty icon={TankSizeIcon} label={`${car.fuelTank}L`} />
          <CarProperty icon={GearTypeIcon} label={car.gear} />
          <CarProperty
            icon={SeatsIcon}
            label={`${car.seats} ${car.seats > 1 ? "Persons" : "Person"}`}
          />
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center">
          <span className="text-base font-bold text-secondary-500 sm:text-xl">
            {formatNumber(car.price)}/
            <span className="font-bold text-secondary-300">day</span>
          </span>
          {car.oldPrice != null && (
            <s className="font-bold text-secondary-300">
              {formatNumber(car.oldPrice)}
            </s>
          )}
        </div>
        <TransitionButton url={`/cars/${car.id}`}>Rent Now</TransitionButton>
      </div>
    </div>
  );
}
