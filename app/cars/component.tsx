"use client";

import CarList from "@/app/_components/panels/CarList";
import { withTransitionContext } from "@/app/_hoc/withTransitionContext";
import ListOfSeats from "./components/sidebar/listOfSeats";
import ListOfTypes from "./components/sidebar/listOfTypes";
import SelectPrice from "./components/sidebar/selectPrice";

interface CarsProps {
  params: Record<string, string>;
}

function Cars({ params }: CarsProps) {
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
            searchParams={params}
          />
        </div>
      </div>
    </div>
  );
}

export default withTransitionContext(Cars);
