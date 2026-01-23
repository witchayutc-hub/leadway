import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiPaversPluralByPaginated = (page: any, pageSize: any) =>
  getAll(page, pageSize, "/api/pavers-plural?sort[0]=id:desc");
