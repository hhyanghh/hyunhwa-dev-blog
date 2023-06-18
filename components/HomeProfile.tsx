import Image from "next/image";
import React from "react";
import profileImage from "../public/profile.png";

export default function HomeProfile() {
  return (
    <div className="mt-10">
      <section className="flex justify-center gap-8 items-center flex-wrap">
        <Image
          src={profileImage}
          alt="프로필 이미지"
          className="rounded-lg"
          width={300}
        />
        <div className="min-w-[250] max-w-[300px]">
          태양은 만인의 것, <br />
          바다는 즐기는 자의 것
        </div>
      </section>
    </div>
  );
}
