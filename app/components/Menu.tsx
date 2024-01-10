import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Menu = () => {
  return (
    <div className="flex justify-between items-center p-5 text-white bg-gray-400">
      <div>
        <Image src="/img/logo.jpg" alt="logo" width={50} height={50} />
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <a href="#inicio" className="hover:underline">
          Inicio
        </a>
        <a href="#nosotros" className="hover:underline">
          Nosotros
        </a>
        <a href="#carta" className="hover:underline">
          Carta
        </a>
        <a href="#contacto" className="hover:underline">
          Contacto
        </a>
        <a href="#facebook" className="hover:underline">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
        </a>
        <a href="#twitter" className="hover:underline">
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
        </a>
        <a href="#instagram" className="hover:underline">
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};
