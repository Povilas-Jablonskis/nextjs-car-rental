"use client";

import randomIndexOfArray from "@/app/_helpers/randomIndexOfArray";
import { useAds } from "@/app/_lib/hooks";
import clsx from "clsx";
import Image from "next/image";
import { memo } from "react";
import TransitionButton from "../buttons/transition";
import Ad from "./ad";
import AdSkeleton from "./skeleton";

interface Variation {
  background?: string;
  button?: string;
}

function Ads() {
  const { data, isLoading } = useAds();

  if (isLoading) return <AdSkeleton />;

  const variations: Variation[] = [
    {
      background: "bg-information-500 bg-informationImage",
    },
    {
      background: "bg-primary-500 bg-primaryImage",
      button: "!bg-information-500 active:!bg-information-700",
    },
  ];

  return (
    <div className="mb-8 grid gap-8 md:grid-cols-2">
      {data?.map(({ id, title, subTitle, car }) => {
        const variationIndex = randomIndexOfArray(variations);

        return (
          <Ad
            key={id}
            title={title}
            subTitle={subTitle}
            className={variations[variationIndex].background}
          >
            <TransitionButton
              url={`/cars/${car.id}`}
              className={clsx(variations[variationIndex].button, "self-start")}
            >
              Rent Now
            </TransitionButton>
            <div className="relative mt-auto h-28">
              <Image
                priority
                fill
                className="object-contain object-bottom"
                src={car.image}
                alt="Car"
              />
            </div>
          </Ad>
        );
      })}
    </div>
  );
}

export default memo(Ads);
