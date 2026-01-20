import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiPromotionsByPaginated = (page: any, pageSize: any) =>
  getAll(page, pageSize, "/api/promotions");
