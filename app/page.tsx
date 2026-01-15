"use client";
import { useState } from "react";
import Brand from "@/components/Section/brand";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  const Allproducts = [
    {
      id: 1,
      image: "https://app.leadway.co.th/uploads/All_product_01_660e948cc1.jpg",
    },
    {
      id: 2,
      image: "https://app.leadway.co.th/uploads/All_product_02_deed7f3b65.jpg",
    },
    {
      id: 3,
      image: "https://app.leadway.co.th/uploads/All_product_03_c99866cd43.jpg",
    },
    {
      id: 4,
      image: "https://app.leadway.co.th/uploads/MINING_TRUCK_EV_72a0ccd45a.jpg",
    },
    {
      id: 5,
      image: "https://app.leadway.co.th/uploads/MINING_TRUCKS_38c938544e.jpg",
    },
    {
      id: 6,
      image: "https://app.leadway.co.th/uploads/All_product_04_fe4ef19622.jpg",
    },
  ];
  const newsEvents = [
    {
      id: 1,
      image:
        "https://app.leadway.co.th/uploads/what_should_you_consider_when_buying_a_vibratory_roller_1da7b15541.png",
    },
    {
      id: 2,
      image:
        "https://app.leadway.co.th/uploads/what_is_a_vibratory_compactor_32298d57c2.png",
    },
    {
      id: 3,
      image:
        "https://app.leadway.co.th/uploads/what_is_a_dc_charging_cabinet_ee82504156.png",
    },
    {
      id: 4,
      image:
        "https://app.leadway.co.th/uploads/getting_to_know_sumitomo_machinery_46272320ab.png",
    },
    {
      id: 5,
      image:
        "https://app.leadway.co.th/uploads/are_sumitomo_excavators_good_5f8d95ca8c.png",
    },
    {
      id: 6,
      image:
        "https://app.leadway.co.th/uploads/sumitomo_asphalt_paver_d20b61039a.png",
    },
  ];

  let slides = [
    "https://app.leadway.co.th/uploads/BANNAR_01_67b8417878.jpg",
    "https://app.leadway.co.th/uploads/2_04c399e5d8_4071b53fe8.jpg",
    "https://app.leadway.co.th/uploads/SANY_EV_d40ce8a1d4.png",
  ];

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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
        <section className="pt-6 pb-12">
          <div className="mx-auto max-w-7xl px-4">
            <Brand />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-center px-3">
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wqP2SVk3uC8?autoplay=1&mute=1&loop=1&playlist=wqP2SVk3uC8"
                title="LEADWAY HEAVY MACHINERY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="flex items-center justify-center py-4 mb-2">
            <h2
              className="text-3xl text-[#ecb51d]
                sm:text-4xl
                lg:text-5xl"
            >
              สินค้าทั้งหมด
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto px-3">
            <div className="flex flex-wrap">
              {Allproducts.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full shrink-0 overflow-hidden cursor-pointer
                    sm:w-1/2 
                    lg:w-1/3 
                    border border-[#e5e7eb]"
                >
                  <img
                    src={item.image}
                    alt="product"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 
                   bg-[#0d6efd]/40 opacity-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="flex items-center justify-center">
            <h2
              className="py-2 text-3xl text-[#ecb51d]
                sm:text-4xl
                lg:text-5xl"
            >
              ข่าวสารและกิจกรรม
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="flex flex-wrap">
              {newsEvents.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full shrink-0 px-3 pb-3 overflow-hidden cursor-pointer
                  sm:w-1/2 
                  lg:w-1/3"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="grid mx-auto h-auto p-3.25 gap-y-2 bg-black">
                      <span className="text-xl font-semibold text-[#ffcb00]">
                        รถบดอัดสั่นสะเทือน
                      </span>
                      <span className="text-white">18-12-2025 13:34 PM</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
