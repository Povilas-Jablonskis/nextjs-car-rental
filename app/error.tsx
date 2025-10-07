"use client";

import PrimaryButton from "./_components/buttons/primary";

export default function ErrorComponent({ reset }: { reset: () => void }) {
  return (
    <div className="m-auto flex flex-col">
      <h2 className="mb-4">Something went wrong!</h2>
      <PrimaryButton className="self-center" onClick={() => reset()}>
        Try again
      </PrimaryButton>
    </div>
  );
}
