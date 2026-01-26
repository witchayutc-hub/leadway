import { getData, getAll } from "@/api/lib/callApi";

// GET CONCRETE MIXER
export const apiConcrete = () =>
  getData(
    "/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=concrete-mixers-truck&filters[sany_type][fuel][$eq]=sany",
  );

// GET DIESE BY PAGINATED
export const apiDiesel = (page: number, pageSize: number) =>
  getAll(
    page,
    pageSize,
    "/api/sanies?sort[0]=publishedAt:asc&filters[sany_type][uid][$eq]=diesel",
  );

// GET HYBRID BY PAGINATED
export const apiHybrid = (page: number, pageSize: number) =>
  getAll(
    page,
    pageSize,
    "/api/sanies?sort[0]=publishedAt:asc&filters[sany_type][uid][$eq]=hybrid",
  );
