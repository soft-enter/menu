"use client";

import { useSearchParams } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { Menu } from "../components/Menu";
import {
  getBreakfast,
  getDinner,
  getJuices,
  getLunch,
} from "../services/carta";
import { Whatsapp } from "../components/Whatsapp";

type Item = {
  id: number;
  name: string;
  price: number;
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBreackfast, setIsBreackfast] = useState<Item[]>([]);
  const [isAlmuerzo, setIsAlmuerzo] = useState<Item[]>([]);
  const [isCena, setIsCena] = useState<Item[]>([]);
  const [isJuices, setIsJuices] = useState<Item[]>([]);

  const params = useSearchParams();
  const type = params.get("type");

  const element = {
    jugo: useRef<HTMLElement>(null),
    desayuno: useRef<HTMLElement>(null),
    almuerzo: useRef<HTMLElement>(null),
    cena: useRef<HTMLElement>(null),
  };

  const handleScroll = (selected) => {
    if (element[selected]) {
      element[selected].current.scrollIntoView();
    }
  };

  //TODO: Refactoring this code letter but now is working, fix the design
  const third = Math.ceil(isBreackfast.length / 3);
  const firstColumn = isBreackfast.slice(0, third);
  const secondColumn = isBreackfast.slice(third, 2 * third);
  const thirdColumn = isBreackfast.slice(2 * third);

  const firstColumnAlmuerzo = isAlmuerzo.slice(0, third);
  const secondColumnAlmuerzo = isAlmuerzo.slice(third, 2 * third);
  const thirdColumnAlmuerzo = isAlmuerzo.slice(2 * third);

  const firstColumnCena = isCena.slice(0, third);
  const secondColumnCena = isCena.slice(third, 2 * third);
  const thirdColumnCena = isCena.slice(2 * third);

  const firstColumnJuices = isJuices.slice(0, third);
  const secondColumnJuices = isJuices.slice(third, 2 * third);
  const thirdColumnJuices = isJuices.slice(2 * third);

  useEffect(() => {
    getBreakfast().then((data) => {
      setIsBreackfast(data);
    });
    getLunch().then((data) => {
      setIsAlmuerzo(data);
    });
    getDinner().then((data) => {
      setIsCena(data);
    });
    getJuices().then((data) => {
      setIsJuices(data);
    });
  }, []);

  useEffect(() => {
    if (type) {
      handleScroll(type);
    }
  }, [type]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBreakfast = isBreackfast.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );
  const filteredLunch = isAlmuerzo.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );

  const filteredDinner = isCena.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );

  const filteredJuices = isJuices.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );

  return (
    <div className="">
      <div className="bg-red-500">
        <Menu showBackGround={true} />
      </div>
      <div className="flex flex-col justify-center mt-10 px-10">
        <input
          type="search"
          className="mb-5 p-2 w-full"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(event) => handleSearchChange(event)}
        />
      </div>
      <div
        ref={element.jugo}
        className="flex flex-col justify-center mt-10 px-10"
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-5 text-center">Jugos</h1>
          <div className="flex justify-between">
            {[firstColumnJuices, secondColumnJuices, thirdColumnJuices].map(
              (colum, index) => (
                <table key={index} className="w-1/3 mt-10">
                  <thead>
                    <tr>
                      <th className="text-xl font-bold pr-10 text-left">
                        Nombre
                      </th>
                      <th className="text-xl font-bold text-left">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredJuices.map((item) => (
                      <tr key={item.id}>
                        <td className="text-md pr-10 font-bold py-4">
                          {item.name}
                        </td>
                        <td className="py-4 text-sm">{`RD$ ${item.price}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </div>
      </div>
      <div
        ref={element.desayuno}
        className="flex flex-col justify-center mt-10 px-10"
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-5 text-center">Desayunos</h1>
          <div className="flex justify-between">
            {[firstColumn, secondColumn, thirdColumn].map((column, index) => (
              <table key={index} className="w-1/3 mt-10">
                <thead>
                  <tr>
                    <th className="text-xl font-bold pr-10 text-left">
                      Nombre
                    </th>
                    <th className="text-xl font-bold text-left">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBreakfast.map((item) => (
                    <tr key={item.id}>
                      <td className="text-md pr-10 font-bold py-4">
                        {item.name}
                      </td>
                      <td className="py-4 text-sm">{`RD$ ${item.price}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={element.almuerzo}
        className="flex flex-col justify-center mt-10 px-10"
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-5 text-center">Almuerzo</h1>
          <div className="flex justify-between">
            {[
              firstColumnAlmuerzo,
              secondColumnAlmuerzo,
              thirdColumnAlmuerzo,
            ].map((column, index) => (
              <table key={index} className="w-1/3 mt-10">
                <thead>
                  <tr>
                    <th className="text-xl font-bold pr-10 text-left">
                      Nombre
                    </th>
                    <th className="text-xl font-bold text-left">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLunch.map((item) => (
                    <tr key={item.id}>
                      <td className="text-md pr-10 font-bold py-4">
                        {item.name}
                      </td>
                      <td className="py-4 text-sm">{`RD$ ${item.price}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={element.cena}
        className="flex flex-col justify-center mt-10 px-10"
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-5 text-center">Cena</h1>
          <div className="flex justify-between">
            {[firstColumnCena, secondColumnCena, thirdColumnCena].map(
              (column, index) => (
                <table key={index} className="w-1/3 mt-10">
                  <thead>
                    <tr>
                      <th className="text-xl font-bold pr-10 text-left">
                        Nombre
                      </th>
                      <th className="text-xl font-bold text-left">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDinner.map((item) => (
                      <tr key={item.id}>
                        <td className="text-md pr-10 font-bold py-4">
                          {item.name}
                        </td>
                        <td className="py-4 text-sm">{`RD$ ${item.price}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </div>
      </div>
      <Whatsapp />
    </div>
  );
}
