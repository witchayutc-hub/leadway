import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiPromotionsByPaginated = (
  page: number,
  pageSize: number,
  locale: string,
) => getAll(page, pageSize, `/api/promotions?sort[0]=id:desc&locale=${locale}`);
