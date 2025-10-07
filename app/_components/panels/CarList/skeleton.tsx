import CarListItemSkeleton from "./item/skeleton";

interface CarListSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  totalCars: number;
}

export default function CarListSkeleton({
  totalCars,
  ...rest
}: CarListSkeletonProps) {
  return (
    <div {...rest}>
      {[...new Array(totalCars).keys()].map((index) => (
        <CarListItemSkeleton key={index} />
      ))}
    </div>
  );
}
