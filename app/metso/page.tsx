"use client";

import Modal from "@/components/modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
                <Link href="#">
                  <div className="group ">
                    <img
                      src="/image/Group 738.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
                <Link href="#">
                  <div className="group ">
                    <img
                      src="/image/Group 741.png"
                      alt="Group 735"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
                    />
                  </div>
                </Link>
                <Link href="#">
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
        <section>
          <div>
            <img
              src="/image/Metso C-07.png"
              alt="Group 735"
              className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
            />
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
                  className="w-1/2 object-contain 
                    lg:w-full"
                />
              </div>
              <div className="grid col-span-8">
                <div className="grid lg:flex gap-x-24">
                  <span className="text-3xl text-[#212529]">
                    Technical specifications Nordberg® C Series™ jaw crushers
                  </span>
                  <Link href="#">
                    <div className="group">
                      <img
                        src="/image/download.png"
                        className="max-w-40 justify-self-end transition-transform duration-300 ease-out group-hover:-translate-y-1"
                      />
                    </div>
                  </Link>
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
            <img
              src="/image/Metso GP-08.jpg"
              alt="Group 735"
              className="transition-transform duration-300 ease-out group-hover:-translate-y-2"
            />
          </div>
        </section>
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </main>
    </div>
  );
}
