import Image from "next/image";
import React from "react";

export default function HomeProfile() {
  return (
    <div className="h-80 relative mt-10">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Image
          src="/bg_sea.JPG"
          alt="Background Image"
          width="500"
          height="100"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 hover:brightness-90"
        />
      </div>
      <div className="text-white absolute top-20 left-10 font-semibold text-xl">
        태양은 만인의 것 <br />
        바다는 즐기는 자의 것
      </div>
    </div>
  );
}
