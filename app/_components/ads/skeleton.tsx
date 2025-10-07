import GalleryIcon from "@/app/_components/icons/gallery";

export default function AdSkeleton() {
  const count = 2;

  return (
    <div className="mb-8 grid gap-8 md:grid-cols-2">
      {[...new Array(count).keys()].map((index) => (
        <div key={index} className="flex h-[360px] rounded-xl bg-white">
          <GalleryIcon className="m-auto h-[50px]" />
        </div>
      ))}
    </div>
  );
}
