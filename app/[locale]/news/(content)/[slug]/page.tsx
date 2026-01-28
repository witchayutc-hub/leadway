"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiNewsBySlug } from "@/api/getNews";
import MarkDown from "@/components/markdown";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const { slug } = useParams();

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  const fetchContents = async (slug: string) => {
    try {
      const response = await apiNewsBySlug(slug);
      setData(response.data[0]);
    } catch (error) {
      setError(true);
      console.error("Failed to load", error);
    }
  };

  useEffect(() => {
    if (!slug) return;

    const slugString = Array.isArray(slug) ? slug[0] : slug;

    fetchContents(slugString);
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl text-red-600">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!data || data.length === 0)
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl">
        Loading...
      </div>
    );

  if (locale === "en")
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl">
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
          <section>
            <div className="flex flex-col items-center">
              <span className="text-3xl">No information found </span>
              <span className="text-base">
                The news content you searched for was not found.
              </span>
            </div>
          </section>
        </main>
      </div>
    );

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
        <section>
          <div
            className="flex flex-col w-full items-start max-w-7xl mx-auto gap-8 px-3 pt-12
              md:flex-row"
          >
            <div className="w-full md:w-1/2 min-w-0">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${
                  data.attributes?.image?.data?.attributes?.formats?.large?.url
                }`}
                className="w-full h-full object-cover"
                alt=""
              ></img>
            </div>
            <div className="w-full min-w-0 md:w-1/2">
              <div className="mb-12">
                <span className="text-2xl md:text-4xl text-black">
                  {data.attributes?.name}
                </span>
              </div>
              <div className="text-black whitespace-pre-line wrap-break-word pb-6">
                <MarkDown description={data.attributes?.description ?? ""} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
