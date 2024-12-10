import { dataItems } from "../repositories/dataRepository";
import { DataItem } from "../types/interfaces/dataInterface";

export const getPaginatedData = (
  page: number,
  limit: number
): { data: DataItem[]; total: number } => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const data = dataItems.slice(startIndex, endIndex);
  return { data, total: dataItems.length };
};

//redux -> slices & store
//hoc higher order components
//security
//react hooks
//bootstrap classes
//interceptors
//flexobox classes (justify-content, align-items, flex-direction)
//reactstrap components
