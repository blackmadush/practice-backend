import { DataItem } from "../types/interfaces/dataInterface";

export const dataItems: DataItem[] = [
  { id: 1, name: "Item One", value: 100 },
  { id: 2, name: "Item Two", value: 200 },
  { id: 3, name: "Item Three", value: 300 },
  { id: 4, name: "Item Four", value: 400 },
  { id: 5, name: "Item Five", value: 500 },
  { id: 6, name: "Item Six", value: 600 },
  { id: 7, name: "Item Seven", value: 700 },
  { id: 8, name: "Item Eight", value: 800 },
  { id: 9, name: "Item Nine", value: 900 },
  { id: 10, name: "Item Ten", value: 1000 },
  { id: 11, name: "Item Eleven", value: 1100 },
  { id: 12, name: "Item Twelve", value: 1200 },
  { id: 13, name: "Item Thirteen", value: 1300 },
  { id: 14, name: "Item Fourteen", value: 1400 },
  { id: 15, name: "Item Fifteen", value: 1500 },
  { id: 16, name: "Item Sixteen", value: 1600 },
];

export const getDataItems = (): DataItem[] => {
  return dataItems;
};
