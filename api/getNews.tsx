import { apiClient } from "@/api/lib/apiClient";

// GET ALL
export const getNews = () => apiClient("/news-plural");

// GET BY ID
export const getNewsById = (id: number | string) =>
  apiClient(`/news-plural/${id}`);
