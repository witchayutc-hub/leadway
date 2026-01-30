"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SpecTable from "@/components/specTable";
import SpecButton from "@/components/button/specButton";
import { apiSumitomoByPaginated } from "@/api/getSumitomo";
import MoreButton from "@/components/button/moreboutton";
import { apiPaversPluralByPaginated } from "@/api/getPaversPlural";
import { useLocale, useTranslations } from "next-intl";
import AnimatedTooltip from "@/components/ui/animated-tooltip";
import { motion } from "motion/react";

type SpecButton = {
  id: number;
  label: string;
  variant: "primary" | "outline";
  colorClass: string;
  href: string;
};

export default function Page() {
  const t = useTranslations("Sumitomo");
  const locale = useLocale();
  const itemsPerPage = 6;

  const [activeId, setActiveId] = useState<number | null>(null);

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
      const response = await apiSumitomoByPaginated(
        pageNumber,
        itemsPerPage,
        locale,
      );

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
        locale,
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

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const timer = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  if (error || paversError) {
    return (
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!sumitomo && !pavers) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const excavators = [
    {
      id: 1,
      className: "left-[55%] top-[25%]",
      item: {
        id: 1,
        title: "จุดเชื่อมต่อที่มีความแข็งแรงสูง",
        description: "โครงสร้างของบูมและอาร์มมีความแข็งแรงและทนทาน",
        image: "/image/H1_0.jpg",
      },
    },
    {
      id: 2,
      className: "left-[67%] top-[45%]",
      item: {
        id: 2,
        title: "บุ้งกี๋",
        description:
          "แผ่นโลหะทนทานหนึ่งชิ้นปกปิดตรงส่วนเชื่อมเพื่อเพิ่มอายุการทนทานของบุ้งกี๋",
        image: "/image/H1_1.jpg",
      },
    },
    {
      id: 3,
      className: "left-[57%] top-[60%]",
      item: {
        id: 3,
        title: "ห้องคนขับนิรภัยออกแบบใหม่",
        description:
          "การออกแบบที่เหมาะสมและชิ้นส่วนที่แข็งแรงช่วยเพิ่มความแข็งแรงให้กับห้องคนขับโดยรวม",
        image: "/image/H1_2.jpg",
      },
    },
    {
      id: 4,
      className: "left-[34%] top-[57%]",
      item: {
        id: 4,
        title: "เครื่องยนต์ดีเซล ISUZU 4HK1X",
        description: "ประสิทธิภาพสูงสุด ประหยัดสูงสุด",
        image: "/image/H1_3.jpg",
      },
    },
    {
      id: 5,
      className: "left-[51%] top-[71%]",
      item: {
        id: 5,
        title: "การ์ดตีนตะขาบ",
        description: "ช่วยป้องกันการเสียรูปของการเชื่อมต่อกันของตีนตะขาบ",
        image: "/image/H1_4.jpg",
      },
    },
  ];

  const paverss = [
    {
      id: 1,
      className: "left-[41%] top-[43%]",
      item: {
        id: 1,
        title: "แผงควบคุม",
        description:
          "สามารถเคลื่อนย้ายซ้ายขวาได้ตามความต้องการของผู้ควบคุมเครื่องจักร",
        image: "/image/H2_0.jpg",
      },
    },
    {
      id: 2,
      className: "left-[75%] top-[57%]",
      item: {
        id: 2,
        title: "กระบะรับวัสดุ",
        description:
          "ออกแบบให้ต่ำลง เพื่อง่ายต่อการเทใส่วัสดุ และพับขอบกระบะซ้ายขวาได้",
        image: "/image/H2_1.jpg",
      },
    },
    {
      id: 3,
      className: "left-[23%] top-[62%]",
      item: {
        id: 3,
        title: "ชุดเตารีดกางพับซ้อน 3 ชั้น",
        description:
          "สามารถปรับเปลี่ยนรูปแบบการกางให้เหมาะสมกับความกว้างในการปู ตั้งแต่ 2.3 - 6.0 เมตร",
        image: "/image/H2_2.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.div
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex max-h-220"
            >
              {slides.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Banner"
                  className="w-full shrink-0"
                />
              ))}
            </motion.div>
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
        <section id="excavators">
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="relative w-full">
              <div className="flex items-center justify-center">
                <img
                  src="/image/Component1.png"
                  alt="Banner"
                  className="object-contain aspect-4/3"
                />
              </div>
              {excavators.map((target) => (
                <div
                  key={target.id}
                  className={`absolute w-[2.5%] group ${target.className}`}
                  onMouseEnter={() => setActiveId(target.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => {
                    setActiveId(activeId === target.id ? null : target.id);
                  }}
                >
                  {/* ping */}
                  <span className="absolute inset-0 rounded-full bg-blue-700 animate-ping [animation-duration:2s] opacity-70" />
                  {/* icon */}
                  <img
                    src="/image/Target_Logo.png"
                    alt="Target Logo"
                    className="relative w-full h-full cursor-pointer transition-transform duration-300 group-hover:scale-120 opacity-60"
                  />
                  {/* tooltip */}
                  <AnimatedTooltip
                    active={activeId === target.id}
                    item={target.item}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-5xl text-[#052C65]">
              {t("excavators_sumitomo")}
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
              className="grid grid-cols-1 gap-x-3 gap-y-8 max-w-7xl mx-auto
              lg:grid-cols-3"
            >
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-04.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full lg:h-18 px-1 py-2 bg-[#0b5dc1] flex items-center justify-center text-center">
                  <span className="text-xl text-white line-clamp-2">
                    {t("robust")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-05.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full lg:h-18 px-1 py-2 bg-[#0b5dc1] flex items-center justify-center text-center">
                  <span className="text-xl text-white line-clamp-2">
                    {t("performance")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/PRODUCTS _ SERVICE SUMITOMO 2-06.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full lg:h-18 px-1 py-2 bg-[#0b5dc1] flex items-center justify-center text-center">
                  <span className="text-xl text-white line-clamp-2">
                    {t("convenience")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="paverss">
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="relative w-full">
              <div className="flex items-center justify-center">
                <img
                  src="/image/main paver-07-2-07.png"
                  alt="Banner"
                  className="object-contain aspect-video"
                />
              </div>
              {paverss.map((target) => (
                <div
                  key={target.id}
                  className={`absolute w-[2.5%] group ${target.className}`}
                  onMouseEnter={() => setActiveId(target.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => {
                    setActiveId(activeId === target.id ? null : target.id);
                  }}
                >
                  {/* ping */}
                  <span className="absolute inset-0 rounded-full bg-blue-700 animate-ping [animation-duration:2s] opacity-70" />
                  {/* icon */}
                  <img
                    src="/image/Target_Logo.png"
                    alt="Target Logo"
                    className="relative w-full h-full cursor-pointer transition-transform duration-300 group-hover:scale-120 opacity-60"
                  />
                  {/* tooltip */}
                  <AnimatedTooltip
                    active={activeId === target.id}
                    item={target.item}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-5xl text-[#052C65]">
              {t("pavers_sumitomo")}
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
                onClick={() => setPaversPage((prev) => prev + 1)}
                onDisabled={paversPage >= paversPageCount}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
