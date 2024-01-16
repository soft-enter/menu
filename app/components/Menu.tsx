import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Menu = ({ showBackGround }: { showBackGround: boolean }) => {
  return (
    <div
      className={
        showBackGround
          ? "flex justify-between items-center p-5 text-white fixed w-full bg-red-600 z-30"
          : "flex justify-between items-center p-5 text-white  fixed w-full  z-30"
      }
    >
      <div className="flex gap-4 ">
        <Image
          className="rounded  "
          src="/img/logo.jpg"
          alt="logo"
          width={50}
          height={50}
        />
        <p className="font-bold text-white ">Adrian Tropical</p>
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <Link href="/" className="hover:underline font-bold">
          Inicio
        </Link>
        <Link href="/we" className="hover:underline font-bold">
          Nosotros
        </Link>
        <Link href="/card" className="hover:underline font-bold">
          Carta
        </Link>
        <Link href="/contact" className="hover:underline font-bold">
          Contacto
        </Link>
        <Link href="#facebook" className="hover:underline">
          <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
        </Link>
        <Link href="#twitter" className="hover:underline">
          <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
        </Link>
        <Link href="#instagram" className="hover:underline">
          <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};
