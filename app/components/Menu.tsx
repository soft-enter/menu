"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-5 text-white">
      <div className="flex gap-4 ">
        <Image
          className="rounded  "
          src="/img/logo.jpg"
          alt="logo"
          width={50}
          height={50}
        />
        <p className="font-bold text-white text-xl">Adrian Tropical</p>
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <Link href="/" className="hover:underline font-bold text-xl">
          Inicio
        </Link>
        <Link href="/we" className="hover:underline font-bold text-xl">
          Nosotros
        </Link>
        <div className="relative hover:underline font-bold">
          <button onMouseEnter={() => setIsOpen(true)}>
            <Link href="/carta" className="hover:underline font-bold text-xl">
              Carta
            </Link>
          </button>
          {isOpen && (
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/desayuno">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Desayuno
                  </p>
                </Link>
                <Link href="/almuerzo">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Almuerzo
                  </p>
                </Link>
                <Link href="/cena">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Cena
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link href="/contact" className="hover:underline font-bold text-xl">
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
