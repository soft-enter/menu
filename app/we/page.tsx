import Image from "next/image";
import { Menu } from "../components/Menu";
import Section from "../components/Section";
import Logo from "@/public/img/logo.jpg";

import { Footer } from "../components/Footer";

import { RestaurantCard } from "../components/RestaurantCard";
import { Whatsapp } from "../components/Whatsapp";

export default function Page() {
  return (
    <div className=" flex-col ">
      <Menu showBackGround={true} />
      <div className=" mt-8 w-full px-11 h-44 ">
        <Section>
          <div className="flex flex-row-reverse gap-6 ">
            <div className="">
              <h2 className=" text-2xl ">Loren </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, nulla adipisci quo minima sunt aliquid ullam autem?
                Facilis quas animi mollitia aliquid corporis illum, est
                necessitatibus eius cupiditate harum quos.
              </p>
            </div>
            <div className="h-full">
              <Image
                className="rounded h-full w-full "
                src={Logo}
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </Section>
      </div>
      <div className=" mt-8 w-full px-11 h-44 ">
        <Section>
          <div className="flex flex-row-reverse gap-6 ">
            <div className="">
              <h2 className=" text-2xl ">Loren </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, nulla adipisci quo minima sunt aliquid ullam autem?
                Facilis quas animi mollitia aliquid corporis illum, est
                necessitatibus eius cupiditate harum quos.
              </p>
            </div>
            <div className="h-full">
              <Image
                className="rounded h-full w-full "
                src={Logo}
                alt="logo"
                width={200}
                height={200}
              />
            </div>
          </div>
        </Section>
      </div>
      <div className="mt-6 w-full px-11 mb-11 ">
        <h2 className="text-4xl text-center ">Restaurantes</h2>
        <div className="flex items-center justify-center gap-9 ">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
      <Footer />
      <Whatsapp />
    </div>
  );
}
