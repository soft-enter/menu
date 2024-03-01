import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Menu from "@/public/img/menu.png";
import Link from "next/link";
export function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" block md:hidden  w-10  h-10 "
      >
        <Image
          className="rounded h-full w-full "
          src={Menu}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      {isOpen && (
        <div className="block md:hidden z-20 absolute mt-10 w-auto bg-slate-100 text-zinc-700 top-4 right-8 rounded ">
          <div className=" flex flex-col content-center gap-3 px-3 py-3 ">
            <Link href="/" className="hover:underline font-bold text-xl ">
              Inicio
            </Link>
            <Link href="/we" className="hover:underline font-bold text-xl">
              Nosotros
            </Link>
            <div className="relative hover:underline font-bold">
              <button>
                <Link
                  href="/carta"
                  className="hover:underline font-bold text-xl"
                >
                  Carta
                </Link>
              </button>
            </div>
            <Link href="/contact" className="hover:underline font-bold text-xl">
              Contacto
            </Link>
            {/* <Link href="#facebook" className="hover:underline">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            </Link>
            <Link href="#twitter" className="hover:underline">
              <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
            </Link>
            <Link href="#instagram" className="hover:underline">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
}
