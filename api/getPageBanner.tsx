import { getData } from "@/api/lib/callApi";

// GET MAIN PRODUCTS
export const apiPageBanner = () => getData("/api/page-index?populate=*");
