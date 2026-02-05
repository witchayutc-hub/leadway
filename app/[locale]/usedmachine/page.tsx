"use client";
import { useState, useEffect } from "react";
import Icon from "@/components/icon";
import MoreButton from "@/components/button/moreboutton";
import { Link } from "@/navigation";
import Image from "next/image";
import { apiUsedMachinesByPaginated } from "@/api/getUsedmachine";
import { formatDate } from "@/helpers/formatDate";
import { getStarCount } from "@/helpers/rateing";
import { formatPrice } from "@/helpers/price";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("UsedMachine");
  const itemsPerPage = 6;

  const [usedMachines, setUsedMachines] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState(false);

  const fetchUsedMachines = async (pageNumber: number) => {
    try {
      const response = await apiUsedMachinesByPaginated(
        pageNumber,
        itemsPerPage,
      );

      setUsedMachines((prev) => {
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
    fetchUsedMachines(page);
  }, [page]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl text-red-600">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!usedMachines || usedMachines.length === 0) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl">
        Loading...
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
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto px-3 py-10">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#052465]">
              {t("used_machine")}
            </h1>
          </div>
        </section>
        <section>
          <div className="w-full max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap">
              {usedMachines.map((item) => {
                const image = item.attributes.main_img?.data?.attributes;
                const stars = getStarCount(item.attributes.Condition);
                const isCradActive =
                  item.attributes.product_status === "active";

                const Card = (
                  <div className="group relative overflow-hidden ">
                    {item.attributes.product_status !== "active" && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60">
                        <span className="text-2xl font-bold text-white">
                          {t("sold_out")}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute flex items-center top-2 px-2 py-1 h-7.5 z-10 font-semibold rounded-r-full
                      text-white bg-linear-to-t from-[#FF4249] to-[#FF8003]"
                    >
                      <span>{item.attributes.tags}</span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                        alt={image.formats.name}
                        className="w-full max-h-70 object-cover transition-transform duration-500 group-hover:scale-105
                          lg:aspect-video"
                      />
                    </div>
                    <div className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );

                return (
                  <div
                    key={item.id}
                    className="relative group w-full shrink-0 overflow-hidden px-3 mt-2
                    sm:w-1/2 
                    lg:w-1/3"
                  >
                    {isCradActive ? (
                      <Link href={`/usedmachine/${item.id}`}>{Card}</Link>
                    ) : (
                      <div className="cursor-not-allowed opacity-70">
                        {Card}
                      </div>
                    )}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-3.25 grid grid-cols-3 w-9/12 h-6 text-[11px] z-10
                    bg-white text-[#666666] divide-x divide-gray-300"
                    >
                      <div className="flex items-center justify-center w-full h-full">
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
                            className="flex items-center justify-center "
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
                    <div className="grid mx-auto h-auto py-10 px-5.5 gap-y-2 mb-7.5 bg-white">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-3xl font-bold text-shadow-lg/40 text-[#ECB51D]">
                          ฿{formatPrice(item.attributes.lastsale)}
                        </span>
                        <span className="flex items-end line-through text-[#A1A1A1]">
                          ฿{formatPrice(item.attributes.price)}
                        </span>
                      </div>
                      <Link
                        href={`/usedmachine/${item.id}`}
                        className="text-xl truncate hover:font-semibold text-[#337AB7]                      
                          sm:overflow-visible sm:whitespace-normal sm:text-clip sm:line-clamp-2 "
                      >
                        {item.attributes.name}
                      </Link>
                      <div className="flex justify-between items-center">
                        <span className="text-black mr-2">{t("score")}</span>
                        <div className="flex flex-wrap justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="star"
                              size={20}
                              fill={i < stars ? "#fbc634" : "#e5e7eb"}
                            />
                          ))}
                        </div>
                      </div>
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
