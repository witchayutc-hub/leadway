"use client";
import { useEffect, useState } from "react";
import Brand from "@/components/Section/brand";
import { Link } from "@/navigation";
import { apiNewsByPaginated } from "@/api/getNews";
import { formatDate } from "@/helpers/formatDate";
import { apiMainProducts } from "@/api/getMainProducts";
import { apiPageBanner } from "@/api/getPageBanner";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const [banners, setBanners] = useState<any[]>([]);
  const [bannersError, setBannersError] = useState(false);

  const fetchBanners = async () => {
    try {
      const response = await apiPageBanner();
      const galleryArray = response.data.attributes;
      const bannerArray = Object.entries(galleryArray)
        .filter(([key, value]: any) => key.startsWith("banner_") && value?.data)
        .map(([, value]: any) => value.data);

      setBanners(bannerArray);
      console.log(response);
    } catch (error) {
      console.error("Failed", error);
      setBannersError(true);
    }
  };

  const [products, setProductNews] = useState<any[]>([]);
  const [productError, setProductError] = useState(false);

  const fetchProduct = async () => {
    try {
      const response = await apiMainProducts();

      setProductNews((prev) => {
        const existingIds = new Set(prev.map((n) => n.id));
        const newItems = response.data.filter(
          (n: any) => !existingIds.has(n.id),
        );
        return [...prev, ...newItems];
      });
      console.log(response);
    } catch (error) {
      console.error("Failed", error);
      setProductError(true);
    }
  };

  const itemsPerPage = 6;

  const [news, setNews] = useState<any[]>([]);
  const [error, setError] = useState(false);

  const fetchNews = async (pageNumber: number) => {
    try {
      const response = await apiNewsByPaginated(
        pageNumber,
        itemsPerPage,
        locale,
      );

      setNews((prev) => {
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
    fetchNews(1);
    fetchProduct();
    fetchBanners();
  }, []);

  if (error || productError || bannersError) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl text-red-600">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (news.length === 0 || products.length === 0 || banners.length === 0) {
    return (
      <div className="min-h-screen flex justify-center py-10 text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out max-h-220"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {banners.map((item, index) => (
                <img
                  key={item.id ?? index}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.url}`}
                  alt={item.attributes.hash ?? "Banner"}
                  className="max-w-full object-fill "
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
              {banners.map((s, i) => {
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
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
              className="mx-auto max-w-7xl px-4"
            >
              <Brand />
            </motion.div>
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
              {t("all_products")}
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto px-3">
            <div className="flex flex-wrap">
              {products.map((item) => {
                const image = item.attributes.img?.data?.attributes;
                return (
                  <div
                    key={item.id}
                    className="relative group w-full shrink-0 overflow-hidden cursor-pointer
                    sm:w-1/2 
                    lg:w-1/3 
                    border border-[#e5e7eb]"
                  >
                    <Link href={`${item.attributes.url}`}>
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 flex bottom-1/10 items-end justify-center z-10">
                          <div className="grid place-items-center opacity-90">
                            <span className="text-3xl font-bold text-white">
                              {item.attributes.name}
                            </span>
                            <div className="flex items-center justify-center gap-x-2">
                              <span className="text-white">
                                {t("more_detail")}
                              </span>
                              <i className="bi bi-caret-right-fill inline-flex items-center justify-center w-6 h-6 bg-white text-black rounded-full"></i>
                            </div>
                          </div>
                        </div>
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                          alt="product"
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div
                      className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300 
                   bg-[#0d6efd]/40 opacity-0"
                    />
                  </div>
                );
              })}
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
              {t("news_and_events")}
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="flex flex-wrap">
              {news.map((item) => {
                const image = item.attributes.image?.data?.attributes;
                return (
                  <div
                    key={item.id}
                    className="relative group w-full shrink-0 px-3 pb-3 overflow-hidden cursor-pointer
                  sm:w-1/2 
                  lg:w-1/3"
                  >
                    <Link href={`/news/${item.attributes.slug}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                          alt="product"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="grid mx-auto h-auto p-3.25 gap-y-2 bg-black">
                          <span className="text-xl font-semibold line-clamp-1 text-[#ffcb00]">
                            {item.attributes.name}
                          </span>
                          <span className="text-white">
                            {formatDate("2025-12-08T12:49:50.015Z")}
                          </span>
                        </div>
                      </div>
                    </Link>
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
