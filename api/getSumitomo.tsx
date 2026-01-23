import { getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiSumitomoByPaginated = (page: any, pageSize: any) =>
  getAll(page, pageSize, "/api/excavators?sort[0]=number:asc");
