"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { apiUsedMachinesById } from "@/api/getUsedmachine";
import { formatPrice } from "@/helpers/price";
import Icon from "@/components/icon";
import { getStarCount } from "@/helpers/rateing";
import Link from "next/link";
import MarkDown from "@/components/markdown";

export default function Page() {
  const { id } = useParams();

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mainImage =
    data?.attributes?.main_img?.data?.attributes?.formats?.large?.url;
  const displayImage = selectedImage || mainImage;

  const [current, setCurrent] = useState(0);
  const slides = [
    data?.attributes?.main_img?.data?.attributes?.formats?.large?.url,
    ...(data?.attributes?.gallery?.data?.map(
      (item: any) => item.attributes?.formats?.large?.url,
    ) ?? []),
  ].filter(Boolean);

  const fetchContents = async (id: number) => {
    try {
      const response = await apiUsedMachinesById(id);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(true);
      console.error("Failed to load", error);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchContents(Number(id));
  }, [id]);

  if (error) {
    return (
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!data) {
    return <div className="text-black text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
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
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto px-3 py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#052465]">
              รายละเอียด
            </h1>
          </div>
        </section>
        <section>
          <div
            className="flex flex-col w-full items-start max-w-7xl mx-auto gap-8 px-3 pt-12 border-b border-gray-300
                  md:flex-row"
          >
            <div className="w-full md:w-8/12">
              <div className="grid gap-4">
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {slides.map((src, index) => (
                      <img
                        key={index}
                        src={`${process.env.NEXT_PUBLIC_API_URL}${src}`}
                        className="w-full h-full object-cover shrink-0"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-8 place-content-center gap-4">
                  {slides.map((src, index) => (
                    <img
                      key={index}
                      src={`${process.env.NEXT_PUBLIC_API_URL}${src}`}
                      onClick={() => setCurrent(index)}
                      className={`w-full aspect-4/3 object-cover rounded-md cursor-pointer
                        transition duration-200 ${current === index ? "" : "opacity-50"}`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full min-w-0 md:w-4/12 text-[#212529]">
              <div className="mb-12">
                <span className="text-2xl font-semibold">
                  ข้อมูลเฉพาะเกี่ยวกับรถ
                </span>
              </div>
              <div className="text-xl">
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span className="">ยี่ห้อ</span>
                  <span>{data.attributes?.brand}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>รุ่น</span>
                  <span>{data.attributes?.model}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>S/N</span>
                  <span>{data.attributes?.sn}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>ประเภท</span>
                  <span>{data.attributes?.type}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>การใช้งาน</span>
                  <span>{data.attributes?.working_hours}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>คะแนนประเมิน</span>
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        size={20}
                        fill={
                          i < getStarCount(data.attributes?.Condition)
                            ? "#fbc634"
                            : "#e5e7eb"
                        }
                      />
                    ))}
                  </span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>เพิ่มเติม</span>
                  <span>ICON</span>
                </div>
                <div className="grid py-4 border-b border-gray-300">
                  <span className="text-4xl font-bold text-[#ECB51D]">
                    ฿{formatPrice(data.attributes.lastsale)}
                  </span>
                  <span className="flex items-end line-through text-[#A1A1A1]">
                    ฿{formatPrice(data.attributes.price)}
                  </span>
                </div>
                <div className="grid justify-center place-content-center text-center gap-2 p-6">
                  <Link href="tel:1462">
                    <div className="bg-[#fbc634]">
                      <button className="p-1 cursor-pointer">
                        <span className="text-base">Call 1462</span>
                      </button>
                    </div>
                  </Link>
                  <div className="px-4">
                    <span className="text-base">สนใจซื้อรถมือสองโดนใจคลิก</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col max-w-7xl mx-auto px-3 text-black">
            <span className="text-4xl py-6">เพิ่มเติม</span>
            <div className="py-3 whitespace-pre-line wrap-break-word">
              <MarkDown description={data.attributes?.details ?? ""} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
