"use client";
import { useEffect, useState } from "react";
import MoreButton from "@/components/moreboutton";
import Link from "next/link";
import { getNews } from "@/api/getNews";

interface NewsItem {
  id: number;
  attributes: {
    name: string;
    description: string;
    views: number;
    slug: string;
  };
}

export default function Page() {
  const itemsPerPage = 6;
  const [news, setNews] = useState<NewsItem[]>([]);

  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const visibleNews = news.slice(0, visibleCount);
  const [error, setError] = useState(false);

  useEffect(() => {
    getNews()
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.error("Failed to load news:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!news) {
    return <div className="text-black text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex justify-center items-center w-full h-30 px-3 pt-12 pb-4 max-w-7xl mx-auto">
            <h1
              className="text-3xl font-semibold text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              ข่าวและกิจกรรม
            </h1>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="w-full max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap">
              {news.slice(0, visibleCount).map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full shrink-0 overflow-hidden px-3 mt-2
                    sm:w-1/2 
                    lg:w-1/3"
                >
                  <Link href={`/news/${item.id}`}>
                    <div className="group relative overflow-hidden cursor-pointer">
                      <div className="absolute flex items-center top-2 right-2  px-2 py-1 h-7.5 z-10 text-[11px] bg-[#E90505] text-white">
                        <span>NEWS</span>
                      </div>

                      <img
                        src="https://app.leadway.co.th/uploads/large_stone_crusher_f252178712.png"
                        alt="product"
                        className="w-full h-auto object-cover"
                      />

                      <div className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 opacity-0" />
                    </div>
                  </Link>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-3.25 grid grid-cols-3 w-9/12 h-6 text-[11px] z-10
                     bg-white text-[#666666] divide-x divide-gray-300
                    "
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      13-2026 14:48 PM
                    </div>
                    <div className="flex items-center justify-center w-full h-full">
                      {item.attributes.views}
                    </div>
                    <div className="flex items-center justify-center w-full h-full">
                      ICONS
                    </div>
                  </div>
                  <div className="grid mx-auto h-auto py-10 px-5.5 gap-y-2 mb-7.5 text-center bg-white">
                    <Link
                      href={`/news/${item.id}`}
                      className="truncate hover:font-semibold text-[#337AB7]"
                    >
                      {item.attributes.name}
                    </Link>
                    <p className="line-clamp-4 text-black">
                      {item.attributes.description}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="hover:font-semibold text-[#337AB7] "
                    >
                      Continue Reading...
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {visibleCount < news.length && (
                <MoreButton
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
