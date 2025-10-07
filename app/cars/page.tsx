import { use } from "react";
import CarList from "../_components/panels/CarList";
import ListOfSeats from "./components/sidebar/listOfSeats";
import ListOfTypes from "./components/sidebar/listOfTypes";
import SelectPrice from "./components/sidebar/selectPrice";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

export default function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = use(searchParams);

  return (
    <div className="flex">
      <div className="hidden flex-col gap-y-14 bg-white p-6 lg:flex">
        <ListOfTypes />
        <ListOfSeats />
        <SelectPrice />
      </div>
      <div className="flex-1 px-6 py-8 2xl:p-8">
        {/* <PickupDropoffPicker breakpoint="xl" /> */}
        <div className="grid gap-y-8">
          <CarList
            className="sm:grid-cols-2 xl:grid-cols-3"
            pageSize={9}
            searchParams={resolvedSearchParams}
          />
        </div>
      </div>
    </div>
  );
}
