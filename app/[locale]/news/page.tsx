"use client";
import { useEffect, useState } from "react";
import MoreButton from "@/components/button/moreboutton";
import { Link } from "@/navigation";
import Image from "next/image";
import { apiNewsByPaginated } from "@/api/getNews";
import { formatDate } from "@/helpers/formatDate";
import Icon from "@/components/icon";
import { useLocale, useTranslations } from "next-intl";
import Loading from "@/components/loading";

export default function Page() {
  const t = useTranslations("News");
  const locale = useLocale();
  const itemsPerPage = 6;

  const [news, setNews] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState(false);

  const fetchNews = async (pageNumber: number) => {
    try {
      const response = await apiNewsByPaginated(
        pageNumber,
        itemsPerPage,
        locale,
      );

      setNews((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
      setPageCount(response.meta.pagination.pageCount);
    } catch (error) {
      console.error("Failed", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl text-red-600">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="min-h-screen animate-pulse">
        <div className="flex flex-col items-center justify-center w-full min-h-[calc(25vh-80px)]">
          <div className="h-5 w-45 rounded-full bg-gray-100" />
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center px-3 gap-x-6 gap-y-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center justify-center h-50 sm:w-100 w-1/1 bg-gray-100 text-gray-200">
                  <i className="bi bi-images text-8xl" />
                </div>
                <div className="h-4 w-70 rounded-lg bg-gray-100" />
                <div className="h-3 w-80 rounded-lg bg-gray-100" />
                <div className="h-3 w-50 rounded-lg bg-gray-100" />
                <div className="h-3 w-60 rounded-lg bg-gray-100" />
                <div className="h-3 w-30 rounded-lg bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Image
          src="/image/bg.png"
          fill
          alt="background"
          className="object-cover"
          priority
        />
      </div>
      <main className="relative z-10">
        <section className="bg-white">
          <div className="flex items-center justify-center w-full h-30 px-3 max-w-7xl mx-auto ">
            <h1
              className="text-3xl font-semibold text-[#052465] 
            sm:text-4xl
            lg:text-[40px]"
            >
              {t("news_and_events")}
            </h1>
          </div>
        </section>
        <section>
          <div className="w-full max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap">
              {news.map((item) => {
                const image = item.attributes.image?.data?.attributes;
                return (
                  <div
                    key={item.id}
                    className="relative group w-full shrink-0 overflow-hidden px-3 mt-2
                    sm:w-1/2 
                    lg:w-1/3"
                  >
                    <Link href={`/news/${item.attributes.slug}`}>
                      <div className="group relative overflow-hidden cursor-pointer">
                        <div
                          className={`absolute flex items-center top-2 right-2  px-2 py-1 h-7.5 z-10 text-[11px] text-white
                            ${item.attributes.content_type === "news" ? "bg-[#E90505]" : "bg-[#0553D2]"}`}
                        >
                          <span>
                            {item.attributes.content_type === "news"
                              ? "NEWS"
                              : "EVENT"}
                          </span>
                        </div>
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                          alt={image.formats.name}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 opacity-0" />
                      </div>
                    </Link>
                    <div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-3.25 grid grid-cols-3 w-9/12 h-6 text-[11px] z-10
                     bg-white text-[#666666] divide-x divide-gray-300"
                    >
                      <div className="flex items-center justify-center text-center w-full h-full">
                        {formatDate(item.attributes.updatedAt)}
                      </div>
                      <div className="flex items-center justify-center w-full h-full">
                        {item.attributes.views}
                      </div>
                      <div className="flex items-center justify-center w-full h-full overflow-hidden">
                        <div className="flex items-center justify-center w-full gap-1">
                          <Link
                            href={item.attributes.link_youtube || ""}
                            className="flex items-center justify-center hover:text-red-600"
                          >
                            <Icon name="youtube" size={16} />
                          </Link>

                          <Link
                            href={item.attributes.link_facebook || ""}
                            className="flex items-center justify-center"
                          >
                            <Icon
                              name="facebook"
                              size={12}
                              className="rounded-full bg-[#666] hover:bg-blue-600"
                              fill="#FFFFFF"
                            />
                          </Link>

                          <Link
                            href={item.attributes.link_facebook || ""}
                            className="flex items-center justify-center hover:text-purple-600"
                          >
                            <Icon name="tiktok" size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="grid mx-auto h-auto py-10 px-5.5 gap-y-2 mb-7.5 text-center bg-white">
                      <Link
                        href={`/news/${item.attributes.slug}`}
                        className="truncate hover:font-semibold text-[#337AB7]"
                      >
                        {item.attributes.name}
                      </Link>
                      <p className="line-clamp-4 text-black">
                        {item.attributes.description}
                      </p>
                      <Link
                        href={`/news/${item.attributes.slug}`}
                        className="hover:font-semibold text-[#337AB7]"
                      >
                        Continue Reading...
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <MoreButton
                onClick={() => setPage((prev) => prev + 1)}
                onDisabled={page >= pageCount}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
