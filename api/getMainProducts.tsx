import { getData } from "@/api/lib/callApi";

// GET MAIN PRODUCTS
export const apiMainProducts = () =>
  getData("/api/main-products?sort[0]=number:asc&populate=*");
