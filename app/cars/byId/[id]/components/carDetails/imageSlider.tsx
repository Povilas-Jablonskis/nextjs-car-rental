"use client";

import view from "@/public/images/View.jpg";
import view2 from "@/public/images/View2.jpg";
import view3 from "@/public/images/View3.jpg";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider() {
  const [selected, setSelected] = useState(0);

  const images = [view, view2, view3];

  return (
    <div className="grid gap-y-6">
      <div className="relative h-80 xl:h-96 xl:w-[500px]">
        <Image
          priority
          fill
          className="rounded-xl object-contain xl:object-cover"
          src={images[selected]}
          sizes="100%"
          alt="Big picture"
        />
      </div>
      <div className="mx-auto grid grid-cols-3 gap-x-5 xl:mx-0 xl:gap-x-6">
        {images.map((image, index) => (
          <div
            key={`${index}${image.src}`}
            className="relative h-16 w-20 rounded-xl xl:h-32 xl:w-full"
          >
            <Image
              priority
              fill
              src={image}
              sizes="100%"
              className={clsx("cursor-pointer rounded-xl", {
                "border-2 border-primary-500 p-1 xl:p-2": selected === index,
              })}
              alt="Small picture"
              onClick={() => setSelected(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
