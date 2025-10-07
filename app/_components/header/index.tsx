"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border border-navbar/40 bg-white px-6 py-8 2xl:py-10 2xl:pe-8 2xl:ps-16">
      <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-x-16 gap-y-6 lg:basis-2/4 lg:flex-row">
          <Link
            className="self-start text-2xl font-bold text-primary-500 sm:text-2base lg:self-center"
            href="/"
          >
            MORENT
          </Link>
        </div>
      </div>
    </header>
  );
}
