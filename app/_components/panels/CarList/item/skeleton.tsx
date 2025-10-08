import GalleryIcon from "@/app/_components/icons/gallery";
import HeartIcon from "@/app/_components/icons/heart";

export default function CarListItemSkeleton() {
  return (
    <div className="flex animate-pulse flex-col rounded-xl bg-white p-4 2xl:p-6">
      <div className="mb-2 flex place-content-between">
        <div className="h-7 w-28 rounded-lg bg-primary-300" />
        <HeartIcon />
      </div>
      <div className="h-5 w-28 rounded-lg bg-primary-skeleton" />
      <div className="mb-11 mt-8 flex gap-x-4 sm:m-0 sm:flex-1 sm:flex-col sm:place-items-stretch">
        <GalleryIcon className="m-auto h-28 *:fill-secondary-300 sm:mb-11 sm:mt-8 sm:*:fill-primary-300" />
        <div className="flex flex-col justify-center gap-y-4 sm:mb-6 sm:flex-row sm:place-content-between">
          <div className="h-6 w-14 rounded-lg bg-primary-skeleton" />
          <div className="h-6 w-14 rounded-lg bg-primary-skeleton/50 sm:bg-primary-skeleton" />
          <div className="h-6 w-14 rounded-lg bg-primary-skeleton" />
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="grid place-content-center gap-y-2">
          <div className="h-7 w-28 rounded-lg bg-primary-300" />
          <div className="h-5 w-28 rounded-lg bg-primary-skeleton" />
        </div>
        <div className="w-28 rounded-lg bg-primary-500" />
      </div>
    </div>
  );
}
