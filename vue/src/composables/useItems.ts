import pokemon from "../data/pokemon.json";
import move from "../data/move.json";
import item from "../data/item.json";
import location from "../data/location.json";

export type Item = {
  id: number;
  en: string;
  ja: string;
};

const sortById = (arr: (readonly [string, Item])[]): (readonly [string, Item])[] => arr.sort((a, b) => a[1].id - b[1].id);

export const itemMap = new Map<string, Item>([
  ...sortById(Object.values(pokemon).map((pokemon) => [`p${pokemon.id}`, pokemon])),
  ...sortById(Object.values(move).map((move) => [`m${move.id}`, move])),
  ...sortById(Object.values(item).map((item) => [`i${item.id}`, item])),
  ...sortById(Object.values(location).map((item) => [`l${item.id}`, item])),
]);

export const itemIds = Array.from(itemMap.keys());
