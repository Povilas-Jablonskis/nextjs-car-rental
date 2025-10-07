"use client";

import { useCarTotalTypes } from "@/app/_lib/hooks";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import Checkbox from "./checkbox";

export default function ListOfTypes() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data } = useCarTotalTypes(searchParams.get("category"));

  const typesRaw = searchParams.get("types");
  let types = typesRaw ? typesRaw.split(",") : [];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    const checked = e.currentTarget.checked;

    if (checked) {
      types.push(e.currentTarget.value);
    } else {
      types = types.filter((type) => type !== e.currentTarget.value);
    }

    if (types.length) {
      params.set("types", types.join(","));
    } else {
      params.delete("types");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="grid gap-y-8">
      <p className="text-xs font-semibold text-secondary-300">T Y P E</p>
      {Object.entries(data).map(([name, value]) => (
        <Checkbox
          key={name}
          id={name}
          value={name}
          defaultChecked={types?.some((type) => type === name)}
          onChange={onChange}
          label={name}
          subLabel={value}
        />
      ))}
    </div>
  );
}
