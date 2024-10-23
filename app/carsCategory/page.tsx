import PrimaryButton from "../ui/buttons/primaryButton";
import SwapIcon from "../ui/icons/swap";
import DateTimeLocationPicker from "../ui/panels/dateTimeLocationPicker";
import CarFilterList from "./ui/carFilterList";

interface PageProps {
  searchParams: Record<string, string>;
}

export default function Page({ searchParams }: PageProps) {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-[1fr_max-content_1fr] gap-11 mb-9">
        <DateTimeLocationPicker label="Pick - Up" />
        <PrimaryButton className="!p-[17px] self-center shadow-[0_0_50px_11px_rgba(16,50,147,0.28)]">
          <SwapIcon />
        </PrimaryButton>
        <DateTimeLocationPicker label="Drop - Off" />
      </div>
      <div className="grid gap-y-8">
        <CarFilterList searchParams={searchParams} />
      </div>
    </>
  );
}