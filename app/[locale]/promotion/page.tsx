"use client";
import React, { useEffect, useState } from "react";
import MoreButton from "@/components/button/moreboutton";
import Brand from "@/components/Section/brand";
import Modal from "@/components/modal";
import { apiPromotionsByPaginated } from "@/api/getPromotion";
import { Link } from "@/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("Promotion");

  const itemsPerPage = 6;

  const [promotions, setPromotions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchPromotions = async (pageNumber: number) => {
    try {
      const response = await apiPromotionsByPaginated(
        pageNumber,
        itemsPerPage,
        locale,
      );
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
    fetchPromotions(page);
  }, [page]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl text-red-600">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (promotions.length === 0) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/image/bg.png"
          fill
          alt="background"
          className="object-cover"
          priority
        />
      </div>
      <main>
        <section>
          <div className="relative z-10 bg-white">
            <div className="flex w-full justify-center items-center max-w-7xl mx-auto px-3 py-10">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#052465]">
                {t("promotions")}
              </h1>
            </div>
          </div>
        </section>
        <section className="pb-3 relative z-10 bg-white ">
          <div className="mx-auto max-w-7xl px-4 ">
            <Brand />
          </div>
        </section>
        <section>
          <div className="w-full max-w-7xl mx-auto">
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
                          className="w-full h-full object-cover aspect-4/5 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="grid mx-auto min-h-20 p-2.5 gap-y-2 my-2 bg-white border-l-8 border-[#0048A1]">
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
            </div>
          </div>
        </section>
        <section>
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="flex py-10 z-10">
                <MoreButton
                  onClick={() => setPage((prev) => prev + 1)}
                  onDisabled={page >= pageCount}
                />
              </div>
              <Modal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
