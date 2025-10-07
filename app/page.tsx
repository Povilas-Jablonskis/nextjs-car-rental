import { CarCategory } from "@prisma/client";
import Ads from "./_components/ads";
import CarList from "./_components/panels/CarList";

export default function Home() {
  return (
    <div className="px-6 py-8 pb-16 2xl:px-16">
      <Ads />
      {/* <PickupDropoffPicker breakpoint="lg" /> */}
      <div className="grid gap-y-8">
        <CarList
          className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          pageSize={4}
          searchParams={{ category: CarCategory.Ropular }}
          title="Popular Cars"
        />
        <CarList
          className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          pageSize={8}
          searchParams={{ category: CarCategory.Recommended }}
          title="Recommended Cars"
          showMoreCars
        />
      </div>
    </div>
  );
}
