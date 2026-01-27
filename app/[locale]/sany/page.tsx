"use client";

import { apiConcrete, apiDiesel, apiHybrid } from "@/api/getSany";
import SpecButton from "@/components/button/specButton";
import SpecTable from "@/components/specTable";
import { cutAfterPipe } from "@/helpers/cutText";
import Image from "next/image";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [concrete, setConcrete] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const fetchSany = async () => {
    try {
      const response = await apiConcrete();

      setConcrete((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
    } catch (error) {
      console.error("Failed", error);
      setError(true);
    }
  };

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [diesel, setDiesel] = useState<any[]>([]);
  const [errorDiesel, setErrorDiesel] = useState(false);

  const fetchSanyDiesel = async (pageNumber: number) => {
    try {
      const response = await apiDiesel(pageNumber, itemsPerPage);

      setDiesel((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
    } catch (error) {
      console.error("Failed", error);
      setError(true);
    }
  };

  const itemsHybridPerPage = 6;
  const [pageHybrid, setPageHybrid] = useState(1);
  const [hybrid, setHybridl] = useState<any[]>([]);
  const [errorHybrid, setErrorHybrid] = useState(false);

  const fetchSanyHybrid = async (pageNumber: number) => {
    try {
      const response = await apiHybrid(pageNumber, itemsHybridPerPage);

      setHybridl((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
    } catch (error) {
      console.error("Failed", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchSany();
    fetchSanyDiesel(page);
    fetchSanyHybrid(pageHybrid);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/2.jpg"
              alt="2"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </section>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/PRODUCTS _ SERVICE SANY BG-01.png"
              alt="Banner"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </section>
        <section>
          <div className="grid text-center w-full max-w-7xl mx-auto p-7">
            <span className="sm:text-4xl">CONCRETE MIXERS TRUCK</span>
            <span className="sm:text-4xl text-[#808080]">
              รถโม่ผสมคอนกรีต SANY
            </span>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            {concrete.map((item) => {
              const image = item.attributes.img?.data?.attributes;
              const images = item?.attributes?.img_list?.data;
              return (
                <div
                  key={item.id}
                  className={`${item.id % 2 === 0 ? "lg:flex lg:flex-row-reverse" : ""} grid gap-3 px-3 py-6 lg:grid-cols-12`}
                >
                  <div className="col-span-12 lg:col-span-4">
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.small.url}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="flex justify-center">
                        <SpecTable
                          specs={Object.entries(
                            item?.attributes?.detail ?? {},
                          ).map(([label, value]) => ({
                            label,
                            value: value != null ? String(value) : "-",
                          }))}
                        />
                      </div>
                      <SpecButton
                        buttons={[
                          {
                            id: 1,
                            label: item?.attributes?.name ?? "-",
                            variant: "primary",
                            colorClass: "bg-[#A1272D]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#A1272D]",
                            download: true,
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <div className="grid grid-cols-2 gap-3">
                      {images?.map((img: any, imgIndex: any) => {
                        const imageUrl = img?.attributes?.formats?.small?.url;
                        if (!imageUrl) return null;
                        return (
                          <div key={imgIndex} className="grid gap-2">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
                              className="w-full aspect-4/3 object-cover"
                              alt={`เพิ่มเติม ${item.id + 1}`}
                            />
                            <div className="flex justify-center items-center h-12 bg-[#A1272D]">
                              <span className="text-xl text-white">
                                {cutAfterPipe(
                                  img?.attributes?.alternativeText,
                                ) ?? ""}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="grid px-3 py-6">
              <div
                className="w-full2 p-2 text-center border-r-15 border-[#D64227] bg-[#707070] 
                    sm:w-2/7"
              >
                <span className="text-white">DIESEL Capacity:40-95T</span>
              </div>
              <div>
                <div
                  className="flex flex-wrap justify-center py-6
                sm:justify-normal"
                >
                  {diesel.map((item) => {
                    const image = item.attributes.img?.data?.attributes;
                    return (
                      <div key={item.id}>
                        <Link
                          href={`/sany#${item.attributes.uid}`}
                          className="group"
                        >
                          <div>
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.small.url}`}
                              className="w-full object-contain aspect-video
                                sm:max-h-30 group-hover:scale-105 duration-300"
                            />
                          </div>
                          <div className="text-center">
                            <span className="text-[#707070]">
                              {item.attributes.name}
                            </span>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="w-full p-2 text-center border-r-15 border-[#D64227] bg-[#707070] 
                    sm:w-2/7"
              >
                <span className="text-white">HYBRID Capacity:90-220T</span>
              </div>
            </div>
            <div
              className="flex flex-wrap justify-center py-6 
                sm:justify-normal"
            >
              {hybrid.map((item) => {
                const image = item.attributes.img?.data?.attributes;
                return (
                  <div key={item.id}>
                    <Link
                      href={`/sany#${item.attributes.uid}`}
                      className="group"
                    >
                      <div>
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.small.url}`}
                          className="w-full object-contain aspect-video
                                sm:max-h-30 group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-[#707070]">
                          {item.attributes.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl py-6 mx-auto text-center">
            <div>
              <span className="text-5xl text-[#052C65]">Diesel</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
              {diesel.map((item) => {
                const image = item.attributes.img?.data?.attributes;

                return (
                  <div key={item.id} id={`${item.attributes.uid}`}>
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                        className="w-full h-full object-cover aspect-video"
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
                            label: item?.attributes?.name ?? "-",
                            variant: "primary",
                            colorClass: "bg-[#A1272D]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#A1272D]",
                            download: true,
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl py-6 mx-auto text-center">
            <div>
              <span className="text-5xl text-[#052C65]">Hybrid</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
              {hybrid.map((item) => {
                const image = item.attributes.img?.data?.attributes;

                return (
                  <div key={item.id} id={`${item.attributes.uid}`}>
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                        className="w-full h-full object-cover aspect-video"
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
                            label: item?.attributes?.name ?? "-",
                            variant: "primary",
                            colorClass: "bg-[#A1272D]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#A1272D]",
                            download: true,
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                        ]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
