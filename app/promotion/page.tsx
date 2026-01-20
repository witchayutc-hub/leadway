"use client";
import React, { useEffect, useState } from "react";
import MoreButton from "@/components/moreboutton";
import Brand from "@/components/Section/brand";
import Modal from "@/components/modal";
import { apiPromotionsByPaginated } from "@/api/getPromotion";
import Link from "next/link";

export default function Page() {
  const itemsPerPage = 6;

  const [promotions, setPromotions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchNews = async (pageNumber: number) => {
    try {
      const response = await apiPromotionsByPaginated(pageNumber, itemsPerPage);

      setPromotions((prev) => {
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
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!promotions) {
    return <div className="text-black text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto px-3 py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#052465]">
              โปรโมชั่น
            </h1>
          </div>
        </section>
        <section className="py-1.25">
          <div className="mx-auto max-w-7xl px-4">
            <Brand />
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="flex flex-wrap">
              {promotions.map((item) => {
                const image = item.attributes.img?.data?.attributes;
                return (
                  <div
                    key={item.id}
                    className="group relative w-full sm:w-1/2 lg:w-1/3 shrink-0 overflow-hidden cursor-pointer px-3 pt-2 mt-12"
                  >
                    <div className="relative overflow-hidden">
                      <div
                        className="relative overflow-hidden"
                        onClick={() =>
                          setSelectedImage(
                            `${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`,
                          )
                        }
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                          alt={image.formats.name}
                          className="w-full h-130 object-fit transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="grid mx-auto h-auto p-2.5 gap-y-2 my-2 bg-white border-l-8 border-[#0048A1]">
                        <Link href={`${item.attributes.link_facebook}`}>
                          <span className="text-[#7E7E7E] hover:text-[#0D6EFD]">
                            {item.attributes.name}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Modal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            </div>
            <div className="flex justify-center pt-6">
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
