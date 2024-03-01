import React from "react";
import Section from "./Section";
import Image from "next/image";
import Start from "@/public/img/start.jpeg";

export function RestaurantCard() {
  return (
    <div className=" w-3/4 md:w-48 mt-2 ">
      <Section>
        <div className="h-full">
          <Image
            className="rounded h-full w-full "
            src={Start}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </Section>
      <p className="text-md font-bold text-center mt-3">Avenida espana 1995</p>
    </div>
  );
}
