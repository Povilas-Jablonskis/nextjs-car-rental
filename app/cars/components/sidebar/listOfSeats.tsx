"use client";

import { useCarTotalSeats } from "@/app/_lib/hooks";
import { CarSeat } from "@/app/api/cars/totalSeats/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import Checkbox from "./checkbox";

export default function ListOfSeats() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data } = useCarTotalSeats(searchParams.get("category"));

  const seatsRaw = searchParams.get("seats");
  let seats = seatsRaw ? seatsRaw.split(",") : [];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const checked = e.currentTarget.checked;

    if (checked) {
      seats.push(e.currentTarget.value);
    } else {
      seats = seats.filter((seat) => seat !== e.currentTarget.value);
    }

    if (seats.length) {
      params.set("seats", seats.join(","));
    } else {
      params.delete("seats");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid gap-y-8">
      <p className="text-xs font-semibold text-secondary-300">
        C A P A C I T Y
      </p>
      {Object.entries(data).map(([name, value]) => (
        <Checkbox
          key={name}
          id={name}
          value={name}
          defaultChecked={seats?.includes(name)}
          onChange={onChange}
          label={CarSeat[Number(name)]}
          subLabel={value}
        />
      ))}
    </div>
  );
}
