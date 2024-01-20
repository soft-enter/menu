"use client";
import "tailwindcss/tailwind.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Whatsapp() {
  function navigateToWhappsapp() {
    window.open("https://web.whatsapp.com/send?phone=18299688068", "_blank");
  }
  return (
    <button
      className=" fixed text-center bottom-2 right-2  justify-center bg-green-400 border rounded p-3 hover:text-white "
      onClick={navigateToWhappsapp}
    >
      <div className="flex w-full justify-center items-center ">
        <FontAwesomeIcon icon={faWhatsapp} />
        <p className="ms-2"> Whatsapp</p>
      </div>
    </button>
  );
}
