"use client";

import { useGetReviews } from "@/app/_lib/hooks";

import PrimaryButton from "@/app/_components/buttons/primary";
import { Fragment } from "react";
import Review from "./review";
import ReviewsSkeleton from "./skeleton";

interface ReviewsProps extends React.HTMLAttributes<HTMLDivElement> {
  params: {
    id: string;
  };
  totalReviews: number;
}

export default function Reviews({ params, totalReviews }: ReviewsProps) {
  const pageSize = 2;

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetReviews(pageSize, params.id);

  if (isLoading) return <ReviewsSkeleton pageSize={pageSize} />;

  return (
    <div className="grid rounded-xl bg-white p-4 2xl:p-6">
      <div className="mb-6 flex gap-x-3 2xl:mb-8">
        <div className="text-xl font-semibold text-secondary-500">Reviews</div>
        <div className="rounded bg-primary-500 px-3 py-1.5 text-sm font-bold text-white">
          {totalReviews}
        </div>
      </div>
      <div className="grid gap-y-6">
        {data?.pages.map((group) => (
          <Fragment key={JSON.stringify(group)}>
            {group?.data.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <PrimaryButton
          className="mx-auto mt-6"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Show more reviews
        </PrimaryButton>
      )}
    </div>
  );
}
