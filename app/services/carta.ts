import { Almuerzo, Bebidas, Cena, Desayuno } from "../db/data";

export const getBreakfast = async () => {
  return Desayuno;
};

export const getLunch = async () => {
  return Almuerzo;
};

export const getDinner = async () => {
  return Cena;
};

export const getJuices = async () => {
  return Bebidas;
};
