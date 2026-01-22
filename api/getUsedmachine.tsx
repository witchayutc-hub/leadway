import { getSlug, getAll } from "@/api/lib/callApi";

// GET BY Paginated
export const apiUsedMachinesByPaginated = (page: any, pageSize: any) =>
  getAll(page, pageSize, "/api/used-machines");

// GET BY ID
export const apiUsedMachinesById = (id: number) =>
  getSlug(`/api/used-machines/${id}?populate=*`);
