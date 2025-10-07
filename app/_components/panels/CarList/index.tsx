"use client";

import { useGetCarList } from "@/app/_lib/hooks";
import clsx from "clsx";
import { Fragment } from "react";
import PrimaryButton from "../../buttons/primary";

import CarListItem from "./item";
import CarListSkeleton from "./skeleton";
import CarListTitle from "./title";

interface CarListProps extends React.HTMLAttributes<HTMLDivElement> {
  pageSize: number;
  showMoreCars?: boolean;
  searchParams: Record<string, string>;
}

export default function CarList({
  pageSize,
  showMoreCars,
  searchParams,
  className,
  title,
  ...rest
}: CarListProps) {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetCarList(pageSize, searchParams);

  if (isLoading)
    return (
      <div>
        {title && (
          <CarListTitle
            title={title}
            searchParams={searchParams}
            showMoreCars={showMoreCars}
          />
        )}
        <CarListSkeleton
          className={clsx("grid gap-8", className)}
          totalCars={pageSize}
        />
      </div>
    );

  const totalCars = data?.pages.flatMap((page) => page.data).length;

  if (!totalCars) return <></>;

  return (
    <div>
      {title && (
        <CarListTitle
          title={title}
          searchParams={searchParams}
          showMoreCars={showMoreCars}
        />
      )}
      <div {...rest} className={clsx("grid gap-5 2xl:gap-8", className)}>
        {data?.pages.map((group) => (
          <Fragment key={JSON.stringify(group)}>
            {group?.data.map((car) => <CarListItem key={car.id} car={car} />)}
          </Fragment>
        ))}
      </div>
      {hasNextPage && showMoreCars && (
        <div className="flex place-items-center pt-16">
          <PrimaryButton
            className="mx-auto"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Show more cars
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
