import GalleryIcon from "@/app/_components/icons/gallery";
import HeartIcon from "@/app/_components/icons/heart";

export default function CarDetailsSkeleton() {
  return (
    <div className="grid animate-pulse gap-8 xl:grid-cols-[auto_1fr]">
      <div className="grid gap-y-6">
        <div className="flex h-80 rounded-xl bg-white xl:h-96 xl:w-[500px]">
          <GalleryIcon className="m-auto" width={60} height={60} />
        </div>
        <div className="mx-auto grid grid-cols-3 gap-x-5 xl:mx-0 xl:gap-x-6">
          {[...new Array(3).keys()].map((index) => (
            <div
              key={index}
              className="h-16 w-20 rounded-xl border-4 border-white p-1.5 xl:h-32 xl:w-full xl:p-4"
            >
              <div className="flex size-full bg-white">
                <GalleryIcon className="m-auto size-6 xl:size-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-white p-4 2xl:p-6">
        <div className="flex place-content-between">
          <div className="grid gap-y-3">
            <div className="h-4 w-28 rounded-lg bg-primary-300" />
            <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
          </div>
          <HeartIcon className="hidden lg:block" />
        </div>
        <div className="mb-auto mt-6 flex flex-col gap-y-4 2xl:my-auto">
          <div className="h-4 rounded-lg bg-primary-skeleton" />
          <div className="h-4 rounded-lg bg-primary-skeleton" />
          <div className="h-4 rounded-lg bg-primary-skeleton" />
        </div>
        <div className="mb-6 mt-8 grid gap-y-6">
          <div className="flex justify-between">
            <div className="flex gap-x-8 lg:flex-1">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:w-full" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:hidden" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-8 lg:flex-1">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:w-full" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
            <div className="flex gap-x-8">
              <div className="h-4 w-20 rounded-lg bg-primary-skeleton lg:hidden" />
              <div className="h-4 w-20 rounded-lg bg-primary-300 lg:hidden" />
            </div>
          </div>
        </div>
        <div className="mt-auto flex place-content-between">
          <div className="grid gap-y-2">
            <div className="h-4 w-28 rounded-lg bg-primary-300" />
            <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
          </div>
          <div className="w-28 rounded-lg bg-primary-500" />
        </div>
      </div>
    </div>
  );
}
