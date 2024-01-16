"use client";

import { useEffect, useState } from "react";
import { Menu } from "../components/Menu";
import { getBreakfast } from "../services/carta";

type BreakfastItem = {
  id: number;
  name: string;
  price: number;
};

export default function Page() {
  const [isBreackfast, setIsBreackfast] = useState<BreakfastItem[]>([]);
  const third = Math.ceil(isBreackfast.length / 3);
  const firstColumn = isBreackfast.slice(0, third);
  const secondColumn = isBreackfast.slice(third, 2 * third);
  const thirdColumn = isBreackfast.slice(2 * third);

  useEffect(() => {
    getBreakfast().then((data) => {
      setIsBreackfast(data);
    });
  }, []);
  return (
    <div className="">
      <div className="bg-red-500">
        <Menu />
      </div>
      <div className="flex flex-col justify-center mt-10 px-10">
        <h1 className="text-3xl font-bold mb-5 text-center">Desayunos</h1>
        <div className="flex justify-between">
          {[firstColumn, secondColumn, thirdColumn].map((column, index) => (
            <table key={index} className="w-1/3 mt-10">
              <thead>
                <tr>
                  <th className="text-xl font-bold pr-10 text-left">Nombre</th>
                  <th className="text-xl font-bold text-left">Precio</th>
                </tr>
              </thead>
              <tbody>
                {column.map((item) => (
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
  );
}
