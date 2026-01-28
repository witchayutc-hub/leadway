import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiPaversPluralByPaginated = (
  page: number,
  pageSize: number,
  locale: string,
) =>
  getAll(page, pageSize, `/api/pavers-plural?sort[0]=id:desc&locale=${locale}`);
