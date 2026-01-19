"use client";
import React, { useState } from "react";
import MoreButton from "@/components/moreboutton";
import Brand from "@/components/Section/brand";
import Modal from "@/components/modal";

const promotion = [
  {
    id: 1,
    title:
      " Leadway เรามีอะไหล่แท้ Metso พร้อมจำหน่าย คุณภาพดีเยี่ยม ครบจบในที่เดียว ทุกชิ้นส่วน ",
    image: "https://app.leadway.co.th/uploads/SY_306_C_8_R_2048e12c15.PNG",
  },
  {
    id: 2,
    title:
      " Leadway เรามีอะไหล่แท้ Metso พร้อมจำหน่าย คุณภาพดีเยี่ยม ครบจบในที่เดียว ทุกชิ้นส่วน ",
    image: "https://app.leadway.co.th/uploads/DC_Charge_6f60a16190.PNG",
  },
  {
    id: 3,
    title:
      " Leadway เรามีอะไหล่แท้ Metso พร้อมจำหน่าย คุณภาพดีเยี่ยม ครบจบในที่เดียว ทุกชิ้นส่วน ",
    image: "https://app.leadway.co.th/uploads/METSO_0_0003eccdd1.jpg",
  },
  {
    id: 4,
    title:
      " Leadway เรามีอะไหล่แท้ Metso พร้อมจำหน่าย คุณภาพดีเยี่ยม ครบจบในที่เดียว ทุกชิ้นส่วน ",
    image: "https://app.leadway.co.th/uploads/BOMAG_41eccad0f8.jpg",
  },
  {
    id: 5,
    title:
      " Leadway เรามีอะไหล่แท้ Metso พร้อมจำหน่าย คุณภาพดีเยี่ยม ครบจบในที่เดียว ทุกชิ้นส่วน ",
    image: "https://app.leadway.co.th/uploads/METSO_2afbc814b2.jpg",
  },
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
              {promotion.map((item) => (
                <div
                  key={item.id}
                  className="group relative w-full sm:w-1/2 lg:w-1/3 shrink-0 overflow-hidden cursor-pointer px-3 pt-2 mt-12"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt="product"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="grid mx-auto h-auto p-2.5 gap-y-2 my-2 bg-white border-l-8 border-[#0048A1]">
                      <span className="text-[#7E7E7E]">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Modal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <MoreButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
