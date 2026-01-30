import { postData } from "@/api/lib/callApi";

// POST CALCULATE
export const apiCalculate = (body: any) =>
  postData(`/api/required-energy-consumption/calculate_v3.php`, {
    body,
  });
