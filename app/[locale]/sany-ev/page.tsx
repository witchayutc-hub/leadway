"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  apiConcreteEvTruck,
  apiHeavyTruck,
  apiSanyEv,
  apiSanyMiningTruck,
} from "@/api/getSany";
import { cutAfterPipe } from "@/helpers/cutText";
import SpecTable from "@/components/specTable";
import SpecButton from "@/components/button/specButton";
import { useLocale } from "next-intl";
import AnimatedTooltip from "@/components/ui/animated-tooltip";

export default function Page() {
  const locale = useLocale();
  const [activeId, setActiveId] = useState<number | null>(null);

  const [error, setError] = useState(false);
  const [sanyEv, setSanyEv] = useState<any[]>([]);

  const fetchSanyEv = async () => {
    try {
      const response = await apiSanyEv();

      setSanyEv((prev) => {
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

  const [heavyTruck, setHeavyTruck] = useState<any[]>([]);

  const fetchHeavyTruck = async () => {
    try {
      const response = await apiHeavyTruck();

      setHeavyTruck((prev) => {
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

  const [concreteEvTruck, setConcreteEvTruck] = useState<any[]>([]);

  const fetchConcreteEvTruck = async () => {
    try {
      const response = await apiConcreteEvTruck();

      setConcreteEvTruck((prev) => {
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

  const [miningTruck, setMiningTruck] = useState<any[]>([]);

  const fetchMiningTruck = async () => {
    try {
      const response = await apiSanyMiningTruck();

      setMiningTruck((prev) => {
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
    fetchSanyEv();
    fetchHeavyTruck();
    fetchConcreteEvTruck();
    fetchMiningTruck();
  }, []);

  const sanyEvHotspot = [
    {
      id: 1,
      className: "left-[42%] top-[37%]",
      item: {
        id: 1,
        title: "เครื่องอัดจารบีอัตโนมัติ",
        description: "สามารถตั้งเวลาอัดจาระบีได้ ช่วยลดงานให้กับช่างและผู้ขับ",
        image: "/image/H4_0.jpg",
      },
    },
    {
      id: 2,
      className: "left-[58%] top-[38%]",
      item: {
        id: 2,
        title: "ห้องโดยสารกว้างขวาง",
        description: "สะดวกสบายต่อผู้ขับรถ",
        image: "/image/H4_1.jpg",
      },
    },
    {
      id: 3,
      className: "left-[30%] top-[59%]",
      item: {
        id: 3,
        title: "REAR LEAF SPRING SUSPENSION",
        description:
          "แหนบ 18 แผ่น หนา 27 มม./แผ่น รองรับน้ำหนักบรรทุกได้มากยิ่งขึ้น",
        image: "/image/H4_2.jpg",
      },
    },
    {
      id: 4,
      className: "left-[38%] top-[65%]",
      item: {
        id: 3,
        title: "แบตเตอรี่ LITHIUM ION PHOSPHAT L302G01",
        description: "ความจุ 350 kWh",
        image: "/image/H4_3.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/Wallpaper_01.png"
              alt="Wallpaper_01"
              fill
              loading="lazy"
              className="object-fill"
            />
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            <div
              className="grid grid-cols-3 gap-4 py-6 w-full
                md:grid-cols-4
                lg:grid-cols-8"
            >
              {sanyEv.map((item) => (
                <div key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes.formats.thumbnail.url}`}
                    className="w-full object-contain aspect-video"
                  />
                  <div className="p-2 text-center text-[#7E7E7D]">
                    {item.attributes.name}
                  </div>
                </div>
              ))}
              {concreteEvTruck.map((item) => (
                <div key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes.formats.thumbnail.url}`}
                    className="w-full object-contain aspect-video"
                  />
                  <div className="p-2 text-center text-[#7E7E7D]">
                    {item.attributes.name}
                  </div>
                </div>
              ))}
              {heavyTruck.map((item) => (
                <div key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes.formats.thumbnail.url}`}
                    className="w-full object-contain aspect-video"
                  />
                  <div className="p-2 text-center text-[#7E7E7D]">
                    {item.attributes.name}
                  </div>
                </div>
              ))}
              {miningTruck.map((item) => (
                <div key={item.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes.formats.thumbnail.url}`}
                    className="w-full object-contain aspect-video"
                  />
                  <div className="p-2 text-center text-[#7E7E7D]">
                    {item.attributes.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="relative w-full aspect-video">
            <img
              src="/image/SXML.png"
              alt="Wallpaper_01"
              className="object-contain"
            />
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            {sanyEv.map((item) => {
              const image = item.attributes.img?.data?.attributes;
              const images = item?.attributes?.img_list?.data;
              return (
                <div
                  key={item.id}
                  className={`grid gap-3 px-3 py-6 lg:grid-cols-12 
                  ${item.id % 2 === 0 ? "lg:flex lg:flex-row-reverse" : ""}`}
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
                            colorClass: "bg-[#01BD04]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#01BD04]",
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
                            <div className="flex justify-center items-center h-12 bg-[#01BD04]">
                              <span className="text-sm sm:text-xl text-ellipsis text-white">
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
            <div className="grid place-content-center text-5xl text-center py-12">
              <span className="">CONCRETE MIXERS TRUCK </span>
              <span className="text-[#808080]">รถโม่ผสมคอนกรีต SANY</span>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            {concreteEvTruck.map((item) => {
              const images = item?.attributes?.img_list?.data;
              return (
                <div
                  key={item.id}
                  className={`grid gap-3 px-3 py-6 lg:grid-cols-12
                    ${item.id % 2 === 0 ? "lg:flex lg:flex-row-reverse" : ""}`}
                >
                  <div className="col-span-12 lg:col-span-4">
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes?.url}`}
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
                            colorClass: "bg-[#02926B]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#02926B]",
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
                            <div className="flex justify-center items-center h-12 bg-[#02926B]">
                              <span className="text-sm sm:text-xl text-ellipsis text-white">
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
            <div className="grid place-content-center text-5xl text-center py-12">
              <span className="">HEAVY DUTY DUMP TRUCKS</span>
              <span className="text-[#808080]">รถบรรทุกดัมพ์</span>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            {heavyTruck.map((item) => {
              const images = item?.attributes?.img_list?.data;
              return (
                <div
                  key={item.id}
                  className="grid gap-3 px-3 py-6 lg:grid-cols-12"
                >
                  <div
                    className={`col-span-12 lg:col-span-4
                      ${item.attributes.number % 2 !== 0 ? "" : "lg:order-last"}`}
                  >
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes?.url}`}
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
                            colorClass: "bg-[#0091D2]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#0091D2]",
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
                        const imageUrl = img?.attributes?.url;
                        if (!imageUrl) return null;
                        return (
                          <div key={imgIndex} className="grid gap-2">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
                              className="w-full aspect-4/3 object-cover"
                              alt={`เพิ่มเติม ${item.id + 1}`}
                            />
                            <div className="flex justify-center items-center h-12 bg-[#0091D2]">
                              <span className="text-sm sm:text-xl text-ellipsis text-white">
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
          <div className="w-full py-12">
            <img
              src="/image/gray line-01.jpg"
              alt="Banner"
              loading="lazy"
              className="object-container"
            />
          </div>
        </section>
        <section>
          <div className="relative w-full">
            <div className="flex items-center justify-center">
              <img
                src="/image/MINING_TRUCKS.png"
                alt="Banner"
                className=" w-full aspect-video"
              />
            </div>
            {sanyEvHotspot.map((target) => (
              <div
                key={target.id}
                className={`absolute w-[2%] group ${target.className}`}
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
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="grid place-content-center text-5xl text-center py-12">
              <span className="">MINING TRUCK</span>
              <span className="text-[#808080]">รถเหมืองไฟฟ้า 100%</span>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            {miningTruck.map((item) => {
              const images = item?.attributes?.img_list?.data;
              return (
                <div
                  key={item.id}
                  className="grid gap-3 px-3 py-6 lg:grid-cols-12"
                >
                  <div
                    className={`col-span-12 lg:col-span-4
                      ${item.attributes.number % 2 !== 0 ? "" : "lg:order-last"}`}
                  >
                    <div className="grid">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img?.data?.attributes?.url}`}
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
                            colorClass: "bg-[#808080]",
                            href: `${process.env.NEXT_PUBLIC_API_URL}${
                              item?.attributes?.file?.data?.attributes?.url
                            }`,
                          },
                          {
                            id: 2,
                            label: "ดาวน์โหลด",
                            variant: "outline",
                            colorClass: "text-[#808080]",
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
                        const imageUrl = img?.attributes?.url;
                        if (!imageUrl) return null;
                        return (
                          <div key={imgIndex} className="grid gap-2">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
                              className="w-full aspect-4/3 object-cover"
                              alt={`เพิ่มเติม ${item.id + 1}`}
                            />
                            <div className="flex justify-center items-center h-12 bg-[#808080]">
                              <span className="text-sm sm:text-xl text-ellipsis text-white">
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
      </main>
    </div>
  );
}
