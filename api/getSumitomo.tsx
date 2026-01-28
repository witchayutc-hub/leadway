import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiSumitomoByPaginated = (
  page: number,
  pageSize: number,
  locale: string,
) =>
  getAll(page, pageSize, `/api/excavators?sort[0]=number:asc&locale=${locale}`);
