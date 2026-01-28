import { getData, getAll } from "@/api/lib/callApi";

// GET CONCRETE MIXER
export const apiConcrete = (locale: string) =>
  getData(
    `/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=concrete-mixers-truck&filters[sany_type][fuel][$eq]=sany&locale=${locale}`,
  );

// GET DIESE BY PAGINATED
export const apiDiesel = (page: number, pageSize: number, locale: string) =>
  getAll(
    page,
    pageSize,
    `/api/sanies?sort[0]=publishedAt:asc&filters[sany_type][uid][$eq]=diesel&locale=${locale}`,
  );

// GET HYBRID BY PAGINATED
export const apiHybrid = (page: number, pageSize: number, locale: string) =>
  getAll(
    page,
    pageSize,
    `/api/sanies?sort[0]=publishedAt:asc&filters[sany_type][uid][$eq]=hybrid&locale=${locale}`,
  );

// GET MINEING TRUCK
export const apiSanyMiningTruck = () =>
  getData(
    "/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=mining-truck-100",
  );

// GET CONCRETE EV
export const apiConcreteEvTruck = () =>
  getData(
    "/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=concrete-mixers-truck-ev",
  );

// GET HEAVY TRUCK
export const apiHeavyTruck = () =>
  getData(
    "/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=heavy-duty-dump-trucks",
  );

// GET SANY EV
export const apiSanyEv = () =>
  getData(
    "/api/sanies?sort[0]=number:asc&populate=*&filters[sany_type][uid][$eq]=sany-ev",
  );
