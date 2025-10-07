"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface CarListTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  searchParams?: Record<string, string>;
  showMoreCars?: boolean;
}

export default function CarListTitle({
  searchParams,
  showMoreCars,
  title,
  className,
  ...rest
}: CarListTitleProps) {
  const { push } = useRouter();

  return (
    <div
      {...rest}
      className={clsx("mb-5 flex place-content-between 2xl:mb-8", className)}
    >
      {title && (
        <span className="text-sm font-semibold text-secondary-300 sm:text-base">
          {title}
        </span>
      )}

      {searchParams && !showMoreCars && (
        <button
          className="text-end text-xs font-semibold text-primary-500 sm:text-base"
          onClick={() =>
            push(`/cars?${new URLSearchParams(searchParams).toString()}`)
          }
        >
          View All
        </button>
      )}
    </div>
  );
}
