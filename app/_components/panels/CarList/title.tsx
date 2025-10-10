"use client";

import { TransitionContext } from "@/app/_contexts/transitionContext";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useContext } from "react";

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

  const { isPending, startTransition } = useContext(TransitionContext);

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
          disabled={isPending}
          className="text-end text-xs font-semibold text-primary-500 disabled:pointer-events-none disabled:opacity-40 sm:text-base"
          onClick={() =>
            startTransition?.(() =>
              push(`/cars?${new URLSearchParams(searchParams).toString()}`),
            )
          }
        >
          View All
        </button>
      )}
    </div>
  );
}
