import { getData } from "@/api/lib/callApi";

// POST CALCULATE
export const apiRequiredEnergyTruck = () =>
  getData(
    `/api/required-energy-consumptions?populate[formula][populate]=*&populate[travelling_time][populate]=*&populate[power_consumption][populate]=*&populate[img][populate]=*&populate[img_slider][populate]=*`,
  );
