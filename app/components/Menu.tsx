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

export const Menu = () => {
  return (
    <div className="flex justify-between items-center p-5 text-white">
      <div className="flex gap-4">
        <Image
          className="rounded"
          src="/img/logo.jpg"
          alt="logo"
          width={50}
          height={50}
        />
        <p className="font-bold">Adrian Tropical</p>
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <Link href="/we" className="hover:underline">
          Nosotros
        </Link>
        <Link href="/card" className="hover:underline">
          Carta
        </Link>
        <Link href="/contact" className="hover:underline">
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
