"use client";
import SpecButtons from "@/components/button/specButton";
import SpecTable from "@/components/specTable";
import AnimatedTooltip from "@/components/ui/animated-tooltip";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const t = useTranslations("Jgm");
  const [activeId, setActiveId] = useState<number | null>(null);
  const specs1 = [
    { label: t("power"), value: "75" },
    { label: t("weight"), value: "7,500" },
    { label: t("capacity"), value: "0.3" },
    { label: t("width"), value: "1,360" },
    { label: t("lifting_height"), value: "7,600" },
    { label: t("lifting_weight"), value: "1,200" },
  ];

  const specs2 = [
    { label: t("motor"), value: "160" },
    { label: t("weight"), value: "18,400" },
    { label: t("capacity"), value: "2.4-4.5" },
    { label: t("battery"), value: "350" },
    { label: t("angle"), value: "35" },
    { label: t("lifting_weight"), value: "5,500" },
  ];

  const jgmHotspot = [
    {
      id: 1,
      className: "left-[38%] top-[43%]",
      item: {
        id: 1,
        title: "ปรับเปลี่ยนอุปกรณ์ตามลักษณะงาน",
        description: "สามารถเปลี่ยนหัวคีบ เป็นบุ้งกี๋ขุดให้เหมาะสมกับการใช้งาน",
        image: "/image/H5_0.jpg",
      },
    },
    {
      id: 2,
      className: "left-[58%] top-[54%]",
      item: {
        id: 2,
        title: "ห้องโดยสารกว้างขวาง",
        description:
          "เพิ่มความสบายทำให้คนขับสามารถมองผ่านกระจกที่กว้างเพิ่มสมรรถนะการมองเห็น",
        image: "/image/H5_1.jpg",
      },
    },
    {
      id: 3,
      className: "left-[43%] top-[80%]",
      item: {
        id: 3,
        title: "ใบมีดดันดินกว้าง แข็งแรง",
        description:
          "ใบมีดดันดินโครงสร้างแข็งแรง หน้าใบมีดกว้าง ออกแบบพิเศษให้เหมาะกับการใช้งานหนัก",
        image: "/image/H5_2.jpg",
      },
    },
    {
      id: 4,
      className: "left-[68%] top-[74%]",
      item: {
        id: 3,
        title: "ขาค้ำยัน",
        description:
          "ตัวรถมีขาค้ำยันที่ช่วยเสริมความมั่นคง ในขณะปฏิบัติงานเพื่อลดอุบัติเหตุ และเพิ่มความปลอดภัย",
        image: "/image/H5_3.jpg",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full max-h-220 aspect-video">
            <Image
              src="/image/Banner-pavers-01.png"
              alt="Banner"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section>
          <div className="relative w-full max-h-200 aspect-video grid place-items-center py-12">
            <Image
              src="/image/2-PRODUCTS-&-SERVICE-JGM-1.png"
              alt="Banner"
              fill
              className="object-cover"
            />
            <div className="mx-auto max-w-7xl px-4 z-10">
              <div className="grid text-center gap-4 md:gap-5">
                <span
                  className="font-semibold text-white text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl"
                >
                  WHEEL EXCAVATOR
                </span>
                <span
                  className="text-white text-xl sm:text-2xl 
                    md:text-3xl
                    lg:text-5xl"
                >
                  รถขุดล้อยางเอนกประสงค์ JGM
                </span>
                <span
                  className="text-[#ffc415] text-xl  
                    sm:text-3xl
                    md:text-4xl
                    lg:text-6xl"
                >
                  คล่องตัวสูง ทัศนวิสัยเยี่ยม ทำงานได้หลากหลายอีกทั้ง
                  ยังดูแลรักษาง่าย
                </span>
                <span
                  className="text-white text-base 
                    sm:text-xl
                    md:text-2xl
                    lg:text-4xl"
                >
                  ด้วยการนำเทคโนโลยี 3D มาใช้ในการออกแบบ และผ่านการทดสอบ
                  จำลองการทำงานหลากหลายหน้างาน
                  เพื่อรองรับการใช้งานอย่างมีประสิทธิภาพ
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="excavators">
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-7xl text-[#212529]">
              Highlight Functions
            </h1>
          </div>
          <div className="relative w-full">
            <div className="flex items-center justify-center">
              <img
                src="/image/Component2_01.png"
                alt="Banner"
                className="object-contain aspect-5/3"
              />
            </div>
            {jgmHotspot.map((target) => (
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
                <span className="absolute inset-0 rounded-full bg-amber-500 animate-ping [animation-duration:2s] opacity-70" />
                {/* icon */}
                <img
                  src="/image/Target_Logo_2.png"
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
          <div className=" flex items-center justify-center max-w-7xl mx-auto p-7">
            <div className="grid justify-center overflow-x-auto">
              <SpecTable specs={specs1} />
              <SpecButtons
                buttons={[
                  {
                    id: 1,
                    label: "JGM9085LNZ-9G",
                    variant: "primary",
                    colorClass: "bg-[#0091D2]",
                    href: "/pdf/JGM1.pdf",
                  },
                  {
                    id: 2,
                    label: "ดาวน์โหลด",
                    variant: "outline",
                    colorClass: "text-[#0091D2]",
                    download: true,
                    href: "/pdf/JGM1.pdf",
                  },
                ]}
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
                  src="/image/jgm3-1.png"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("spacious_passenger_room")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/jgm3-2.png"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("led_display_screen")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/jgm3-3.png"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("requirements")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="JGM857E">
          <div className="relative max-w-7xl mx-auto aspect-video">
            <Image
              src="/image/PRODUCTS _ SERVICE_1-10.png"
              alt="Banner"
              fill
              className="object-contain"
            />
          </div>
        </section>
        <section>
          <div className=" flex items-center justify-center max-w-7xl mx-auto p-7">
            <div className="grid justify-center overflow-x-auto">
              <SpecTable specs={specs2} />
              <SpecButtons
                buttons={[
                  {
                    id: 1,
                    label: "JGM857E",
                    variant: "primary",
                    colorClass: "bg-[#0091D2]",
                    href: "/pdf/JGM2.pdf",
                  },
                  {
                    id: 2,
                    label: "ดาวน์โหลด",
                    variant: "outline",
                    colorClass: "text-[#0091D2]",
                    download: true,
                    href: "/pdf/JGM2.pdf",
                  },
                ]}
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
                  src="/image/JGM_1-07_0.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("large_bucket")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/JGM_1-08_0.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("strong_bumper")}
                  </span>
                </div>
              </div>
              <div className="grid place-items-center gap-y-1">
                <img
                  src="/image/JGM_1-09_0.jpg"
                  alt="jgm"
                  className="object-cover"
                />
                <div className="w-full p-2 text-center bg-black">
                  <span className="text-xl text-white">
                    {t("rubber_wheel")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
