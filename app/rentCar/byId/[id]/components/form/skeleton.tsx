import GalleryIcon from "@/app/_components/icons/gallery";

function FormInputWithTitle() {
  return (
    <div className="grid gap-y-3">
      <div className="h-4 w-28 rounded-lg bg-primary-300" />
      <div className="h-14 w-full rounded-lg bg-primary-skeleton" />
    </div>
  );
}

export default function RentalFormSkeleton() {
  return (
    <div className="grid animate-pulse gap-8 xl:grid-cols-[auto_36%]">
      <div className="grid gap-y-8 *:rounded-xl *:bg-white *:px-4 *:py-5 2xl:*:p-6">
        <div>
          <div className="flex justify-between pb-6 2xl:pb-9">
            <div className="grid gap-y-2">
              <div className="h-4 w-28 rounded-lg bg-primary-300" />
              <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
            </div>
            <p className="self-center font-medium text-primary-300 sm:self-end">
              Step 1 of 4
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 2xl:gap-y-9">
            <FormInputWithTitle />
            <FormInputWithTitle />
            <FormInputWithTitle />
            <FormInputWithTitle />
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-6 2xl:pb-9">
            <div className="grid gap-y-2">
              <div className="h-4 w-28 rounded-lg bg-primary-300" />
              <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
            </div>
            <p className="self-center font-medium text-primary-300 sm:self-end">
              Step 2 of 4
            </p>
          </div>
          <div className="mb-5 h-4 w-28 rounded-lg bg-primary-300 2xl:mb-6" />
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 2xl:gap-y-9">
            <FormInputWithTitle />
            <FormInputWithTitle />
            <FormInputWithTitle />
          </div>
          <div className="mb-5 mt-8 h-4 w-28 rounded-lg bg-primary-300 2xl:mb-6" />
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 2xl:gap-y-9">
            <FormInputWithTitle />
            <FormInputWithTitle />
            <FormInputWithTitle />
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-6 2xl:pb-9">
            <div className="grid gap-y-2">
              <div className="h-4 w-28 rounded-lg bg-primary-300" />
              <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
            </div>
            <p className="self-center font-medium text-primary-300 sm:self-end">
              Step 3 of 4
            </p>
          </div>
          <div className=":sm*:p-6 grid gap-y-5 *:px-4 *:py-5 2xl:gap-y-6 2xl:*:p-6">
            <div className="rounded-xl bg-background">
              <div className="flex place-items-end justify-between pb-6 2xl:pb-9">
                <div className="flex place-items-center gap-x-4">
                  <div className="size-6 rounded-full border border-primary-300 bg-white" />
                  <div className="h-4 w-20 rounded-lg bg-primary-300 sm:w-28" />
                </div>
                <div className="h-4 w-20 rounded-lg bg-white sm:w-28" />
              </div>
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 2xl:gap-y-9">
                <FormInputWithTitle />
                <FormInputWithTitle />
                <FormInputWithTitle />
                <FormInputWithTitle />
              </div>
            </div>
            <div className="rounded-xl bg-background">
              <div className="flex place-items-end justify-between">
                <div className="flex place-items-center gap-x-4">
                  <div className="size-6 rounded-full border border-primary-300 bg-white" />
                  <div className="h-4 w-20 rounded-lg bg-primary-300 sm:w-28" />
                </div>
                <div className="h-4 w-20 rounded-lg bg-white sm:w-28" />
              </div>
            </div>
            <div className="rounded-xl bg-background">
              <div className="flex place-items-end justify-between">
                <div className="flex place-items-center gap-x-4">
                  <div className="size-6 rounded-full border border-primary-300 bg-white" />
                  <div className="h-4 w-20 rounded-lg bg-primary-300 sm:w-28" />
                </div>
                <div className="h-4 w-20 rounded-lg bg-white sm:w-28" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-6 2xl:pb-9">
            <div className="grid gap-y-2">
              <div className="h-4 w-28 rounded-lg bg-primary-300" />
              <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
            </div>
            <p className="self-center font-medium text-primary-300 sm:self-end">
              Step 4 of 4
            </p>
          </div>
          <div className="grid gap-y-6 *:px-4 *:py-5 2xl:*:p-6">
            <div className="rounded-xl bg-background">
              <div className="flex place-items-center gap-x-4">
                <div className="size-6 border-2 border-primary-300 bg-white" />
                <div className="h-4 w-28 rounded-lg bg-primary-300" />
              </div>
            </div>
            <div className="rounded-xl bg-background">
              <div className="flex place-items-center gap-x-4">
                <div className="size-6 border-2 border-primary-300 bg-white" />
                <div className="h-4 w-28 rounded-lg bg-primary-300" />
              </div>
            </div>
          </div>
          <div className="mt-6 h-14 w-28 rounded-lg bg-primary-500 2xl:mt-8" />
          <div className="mb-2 mt-6 h-4 w-28 rounded-lg bg-primary-300 2xl:mt-14" />
          <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
        </div>
      </div>
      <div className="row-start-1 rounded-xl bg-white p-4 xl:row-auto xl:self-start 2xl:px-6 2xl:pb-9 2xl:pt-6">
        <div className="grid gap-y-2 pb-6 2xl:pb-10">
          <div className="h-4 w-28 rounded-lg bg-primary-300" />
          <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
        </div>
        <div className="flex place-items-center gap-x-4 border border-transparent border-b-navbar/40 pb-6 2xl:pb-10">
          <div className="rounded-xl border-4 border-primary-skeleton p-4">
            <div className="rounded-xl bg-primary-skeleton px-9 py-7">
              <GalleryIcon width={40} height={40} />
            </div>
          </div>
          <div className="grid gap-y-2">
            <div className="h-4 w-28 rounded-lg bg-primary-300" />
            <div className="h-4 w-28 rounded-lg bg-primary-skeleton" />
          </div>
        </div>
        <div className="flex justify-between gap-y-2 pt-6 2xl:pt-8">
          <div className="h-4 w-24 rounded-lg bg-primary-skeleton" />
          <div className="h-4 w-24 rounded-lg bg-primary-300" />
        </div>
        <div className="flex justify-between gap-y-2 pt-4 2xl:pt-6">
          <div className="h-4 w-24 rounded-lg bg-primary-skeleton" />
          <div className="h-4 w-24 rounded-lg bg-primary-300" />
        </div>
        <div className="mt-6 h-14 rounded-2xl bg-primary-skeleton 2xl:mt-8" />
        <div className="mt-6 flex justify-between 2xl:mt-9">
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
