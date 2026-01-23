import { getSlug, getAll } from "@/api/lib/callApi";

// GET BY SLUG
export const apiNewsBySlug = (slug: string) =>
  getSlug(`/api/news-plural?filters[slug][$eq]=${slug}&populate=*`);

// GET BY Paginated
export const apiNewsByPaginated = (page: any, pageSize: any) =>
  getAll(page, pageSize, "/api/news-plural?sort[0]=id:desc");
