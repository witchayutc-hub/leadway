"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SpecTable from "@/components/specTable";
import SpecButton from "@/components/button/specButton";
import { apiSumitomoByPaginated } from "@/api/getSumitomo";
import MoreButton from "@/components/button/moreboutton";
import { apiPaversPluralByPaginated } from "@/api/getPaversPlural";

type SpecButton = {
  id: number;
  label: string;
  variant: "primary" | "outline";
  colorClass: string;
  href: string;
};

export default function Page() {
  const itemsPerPage = 6;
  const [sumitomo, setSumitomo] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState(false);

  let slides = [
    "/image/Banner_Excavator-02.jpg",
    "/image/Banner_pavers-01.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const fetchSumitomo = async (pageNumber: number) => {
    try {
      const response = await apiSumitomoByPaginated(pageNumber, itemsPerPage);

      setSumitomo((prev) => {
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

  const itemsPaversPerPage = 6;
  const [pavers, setPavers] = useState<any[]>([]);
  const [paversPage, setPaversPage] = useState(1);
  const [paversPageCount, setPaversPageCount] = useState(1);
  const [paversError, setPaversError] = useState(false);

  const fetchPaversPlural = async (pageNumber: number) => {
    try {
      const response = await apiPaversPluralByPaginated(
        pageNumber,
        itemsPaversPerPage,
      );

      setPavers((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
      setPaversPageCount(response.meta.pagination.pageCount);
    } catch (error) {
      console.error("Failed", error);
      setPaversError(true);
    }
  };

  useEffect(() => {
    fetchSumitomo(page);
    fetchPaversPlural(paversPage);
  }, [page, paversPage]);

  if (error || paversError) {
    return (
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!sumitomo || !pavers) {
    return <div className="text-black text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Banner"
                  className="w-full shrink-0"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-6 lg:px-10 text-white">
              <button
                onClick={prevSlide}
                className="px-3 py-1 text-xl rounded-full bg-black/50 hover:bg-black/70
                sm:px-4 sm:py-2 sm:text-2xl
                 lg:text-3xl"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="px-3 py-1 text-xl rounded-full bg-black/50 hover:bg-black/70 
                sm:px-4 sm:py-2 sm:text-2xl
                 lg:text-3xl"
              >
                ›
              </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
              {slides.map((s, i) => {
                return (
                  <div
                    onClick={() => {
                      setCurrent(i);
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-3 h-3 cursor-pointer  ${
                      i == current ? "bg-white" : "bg-gray-500"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="py-12">
            <div className="relative w-full aspect-video">
              <Image
                src="/image/Component1.png"
                alt="Banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-5xl text-[#052C65]">
              รถขุด SUMITOMO
            </h1>
          </div>
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
              {sumitomo.map((item) => {
                const image = item.attributes.img?.data?.attributes;

                return (
                  <div key={item.id}>
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                        className="w-full h-full object-cover"
                      />
                      <SpecTable
                        specs={Object.entries(item.attributes.detail).map(
                          ([label, value]) => ({
                            label,
                            value:
                              typeof value === "string" ? value : String(value),
                          }),
                        )}
                      />
                      <SpecButton
                        buttons={[
                          {
                            id: 1,
                            label: item?.attributes?.model ?? "-",
                            variant: "primary",
                            colorClass: "bg-[#0048A1]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file_download?.data?.attributes
                                ?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#0048A1]",
                            download: true,
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file_download?.data?.attributes
                                ?.url
                            }`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center p-3">
              <MoreButton
                onClick={() => setPage((prev) => prev + 1)}
                onDisabled={page >= pageCount}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-center max-w-7xl mx-auto px-6 py-12">
            <div
              className="grid grid-cols-1 gap-x-6 gap-y-8 max-w-7xl mx-auto
              lg:grid-cols-3"
            >
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-04.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-[#0b5dc1]">
                  <span className="text-xl text-white">
                    โครงสร้างตัวถังที่แข็งแกร่ง
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-05.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-[#0b5dc1]">
                  <span className="text-xl text-white">
                    ประสิทธิภาพสูงสุด ประหยัดสูงสุด
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-06.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-[#0b5dc1]">
                  <span className="text-xl text-white">
                    ออกแบบเพื่อความสะดวกสบาย
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-12">
            <div className="relative max-w-7xl mx-auto w-full aspect-video">
              <Image
                src="/image/main paver-07-2-07.png"
                alt="Banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-5xl text-[#052C65]">
              รถปูยางมะตอย SUMITOMO
            </h1>
          </div>
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
              {pavers.map((item) => {
                const image = item.attributes.img?.data?.attributes;

                return (
                  <div key={item.id}>
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.small.url}`}
                        className="w-full h-full object-cover"
                      />
                      <SpecTable
                        specs={Object.entries(
                          item?.attributes?.detail ?? {},
                        ).map(([label, value]) => ({
                          label,
                          value: value != null ? String(value) : "-",
                        }))}
                      />

                      <SpecButton
                        buttons={[
                          {
                            id: 1,
                            label: item?.attributes?.model ?? "-",
                            variant: "primary",
                            colorClass: "bg-[#0048A1]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file_download?.data?.attributes
                                ?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#0048A1]",
                            download: true,
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file_download?.data?.attributes
                                ?.url
                            }`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center p-3">
              <MoreButton
                onClick={() => setPage((prev) => prev + 1)}
                onDisabled={paversPage >= paversPageCount}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
