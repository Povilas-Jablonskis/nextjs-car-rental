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
            {group?.data.map((car) => (
              <CarListItem key={car.id} car={car} />
            ))}
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
            <svg
              className={clsx("-ml-1 mr-3 size-5 animate-spin text-white", {
                hidden: !isFetchingNextPage,
              })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Show more cars
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
