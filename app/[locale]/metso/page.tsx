"use client";

import Modal from "@/components/modal";
import Image from "next/image";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import { downloadFile } from "@/helpers/download";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/Metso-Head.jpg"
              alt="Metso-Head"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section>
          <div
            className="relative w-full aspect-video grid place-items-center py-12 z-0
                lg:max-h-180"
          >
            <Image
              src="/image/Metso-2.jpg"
              alt="Metso-2"
              fill
              className="object-cover"
            />
            <div className="mx-auto max-w-7xl px-4 z-10 space-y-12">
              <div className="grid text-center gap-5">
                <span
                  className="font-semibold text-[#D64227] text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl"
                >
                  We are the global leader
                </span>
                <span
                  className="text-xl text-[#D64227] sm:text-2xl 
                    md:text-3xl
                    lg:text-5xl"
                >
                  in aggregate crushing and screening solutions for quarry and
                  mining industries.
                </span>
                <span
                  className="text-white text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl"
                >
                  " Our expertise and high-quality equipment meet the customer
                  requirements to increase productivity, reduce the cost per ton
                  of their operations and produce a superior quality end
                  product. "
                </span>
              </div>
              <div
                className="grid grid-cols-2 place-items-center gap-4 
                lg:grid-cols-4 z-10"
              >
                <Link href="#">
                  <div className="group">
                    <img
                      src="/image/Group 735.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
                <Link href="/metso#nordberg_c_Series" scroll={false}>
                  <div className="group ">
                    <img
                      src="/image/Group 738.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
                <Link href="/metso#nordberg_hp_series_cone">
                  <div className="group ">
                    <img
                      src="/image/Group 741.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
                <Link href="/metso#nw_rapid_portable">
                  <div className="group ">
                    <img
                      src="/image/Group 744.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="nordberg_c_Series">
          <div>
            <img src="/image/Metso C-07.png" alt="Group 735" />
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-7xl">
            <div
              className="grid grid-cols-1 p-6 
                lg:grid-cols-12"
            >
              <div className="lg:col-span-4 flex flex-row lg:flex-col items-center gap-4 p-6">
                <img
                  src="/image/C130_R016_Isometric01.png"
                  className="w-1/2 object-contain 
                    lg:w-full "
                />
                <img
                  src="/image/Group 754.png"
                  className="w-3/5 object-contain 
                    "
                />
              </div>
              <div className="grid col-span-8">
                <div className="grid lg:flex gap-x-24 gap-y-3">
                  <span className="text-3xl text-[#212529]">
                    Technical specifications Nordberg® C Series™ jaw crushers
                  </span>
                  <div
                    className="group cursor-pointer"
                    onClick={async () => {
                      await downloadFile(
                        "/pdf/brochure-nordberg-c-series-4226-06-23-en-agg.pdf",
                      );
                    }}
                  >
                    <img
                      src="/image/download.png"
                      className="max-w-40 justify-self-end transition-transform duration-300 ease-out group-hover:-translate-y-1"
                    />
                  </div>
                </div>
                <div className="cursor-pointer py-4">
                  <img
                    src="/image/Component1_1.jpg"
                    onClick={() => setSelectedImage("/image/Component1_1.jpg")}
                    className="hover:opacity-75 duration-300"
                  />
                </div>
                <div className="flex flex-wrap justify-end py-4 gap-x-2">
                  <img src="/image/11.jpg" className="w-1/10" />
                  <img src="/image/22.jpg" className="w-1/10" />
                  <img src="/image/33.jpg" className="w-1/10" />
                  <img src="/image/44.jpg" className="w-1/10" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img src="/image/Metso GP-08.jpg" alt="Group 735" />
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-7xl">
            <div
              className="grid grid-cols-1 p-6 
                lg:grid-cols-12"
            >
              <div
                className="lg:col-span-4 flex flex-row items-center gap-4 p-6 
                lg:flex-col"
              >
                <img
                  src="/image/GP300S_isometric_01.jpg"
                  className="w-1/2 object-contain 
                    lg:w-full "
                />
                <img
                  src="/image/Group 778.jpg"
                  className="w-3/5 object-contain"
                />
              </div>
              <div className="grid col-span-8 place-content-start">
                <div className="grid lg:flex gap-x-24 gap-y-3">
                  <span className="text-3xl text-[#212529]">
                    Technical specifications Nordberg® GP Series™ cone crushers
                  </span>
                  <div
                    className="group"
                    onClick={async () => {
                      await downloadFile(
                        "/pdf/brochure-nordberg-gp-series-4675-05-23-en-agg.pdf",
                      );
                    }}
                  >
                    <img
                      src="/image/download.png"
                      className="max-w-40 justify-self-end transition-transform duration-300 ease-out group-hover:-translate-y-1"
                    />
                  </div>
                </div>
                <div className="grid cursor-pointer py-4">
                  <img
                    src="/image/Group 774.jpg"
                    onClick={() => setSelectedImage("/image/Group 774.jpg")}
                    className="hover:opacity-75 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="nordberg_hp_series_cone">
          <div>
            <img src="/image/Metso HP-09.jpg" alt="Group 735" />
          </div>
        </section>
        <section>
          <div className="mx-auto max-w-7xl">
            <div
              className="grid grid-cols-1 p-6 
                lg:grid-cols-12"
            >
              <div
                className="lg:col-span-4 flex flex-row items-center gap-4 p-6 
                lg:flex-col"
              >
                <img
                  src="/image/a.jpg"
                  className="w-1/2 object-contain 
                    lg:w-full "
                />
                <img
                  src="/image/Group 811.jpg"
                  className="w-3/5 object-contain"
                />
              </div>
              <div className="grid col-span-8 place-content-start">
                <div className="grid lg:flex gap-x-24 gap-y-3">
                  <span className="text-3xl text-[#212529]">
                    Technical specifications Nordberg® HP Series™ cone crushers
                  </span>
                  <div
                    className="group"
                    onClick={async () => {
                      await downloadFile(
                        "/pdf/brochure-nordberg-hp-series-4236-05-23-en-agg.pdf",
                      );
                    }}
                  >
                    <img
                      src="/image/download.png"
                      className="max-w-40 justify-self-end transition-transform duration-300 ease-out group-hover:-translate-y-1"
                    />
                  </div>
                </div>
                <div className="grid cursor-pointer py-4 place-content-start">
                  <img
                    src="/image/Group 780.jpg"
                    onClick={() => setSelectedImage("/image/Group 780.jpg")}
                    className="hover:opacity-75 duration-300"
                  />
                  <div className="flex flex-wrap justify-end py-4 gap-2">
                    <img src="/image/Group 785.jpg" className="h-10" />
                    <img src="/image/Group 788.jpg" className="h-10" />
                    <img src="/image/Group 791.jpg" className="h-10" />
                    <img src="/image/Group 794.jpg" className="h-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="nw_rapid_portable">
          <div>
            <img src="/image/Metso crushing-10.jpg" alt="Group 735" />
          </div>
        </section>
        <section>
          <div>
            <div className="grid lg:flex place-items-center mx-auto max-w-7xl p-3 gap-4">
              <div>
                <img
                  src="/image/Metso-3.jpg"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <img
                  src="/image/Metso-4.jpg"
                  className="full h-auto object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center p-4 bg-black">
              <span className="text-4xl text-white">Product</span>
            </div>
            <div className="grid lg:flex place-items-center mx-auto max-w-7xl px-3 py-12 gap-4">
              <div className="grid">
                <div className="w-1/2 p-2 text-center border-r-15 border-[#D64227] bg-[#707070] ">
                  <span className="text-white">NW106</span>
                </div>
                <div>
                  <img
                    src="/image/Group 722.jpg"
                    className="full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="grid">
                <div className="w-1/2 p-2 text-center border-r-15 border-[#D64227] bg-[#707070]">
                  <span className="text-white">NW220GPS</span>
                </div>
                <div>
                  <img
                    src="/image/Group 727.jpg"
                    className="full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid mx-auto max-w-7xl px-3">
            <div className="grid lg:flex lg:place-content-between 4 gap-y-3">
              <span className="text-3xl text-[#212529]">
                Key technical specifications
              </span>
              <div
                className="group"
                onClick={async () => {
                  await downloadFile(
                    "/pdf/brochure-nwrapid-3781-06-23-EN-AGG.pdf",
                  );
                }}
              >
                <img
                  src="/image/download.png"
                  className="max-w-40 justify-self-end transition-transform duration-300 ease-out group-hover:-translate-y-1"
                />
              </div>
            </div>
            <div className="grid cursor-pointer py-4">
              <img
                src="/image/tb1.jpg"
                onClick={() => setSelectedImage("/image/tb1.jpg")}
                className="hover:opacity-75 duration-300"
              />
              <img
                src="/image/tb2.jpg"
                onClick={() => setSelectedImage("/image/tb2.jpg")}
                className="hover:opacity-75 duration-300"
              />
            </div>
          </div>
        </section>
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </main>
    </div>
  );
}
