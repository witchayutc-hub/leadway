import Icon from "@/components/icon";
import MoreButton from "@/components/moreboutton";
import Link from "next/link";

export default function Page() {
  const news = [
    {
      id: 1,
      title: "SUMITOMO SH130-6 (STN130T6J00BH2993)",
      image: "https://app.leadway.co.th/uploads/S_7725108_0_5e37742dd7.jpg",
      price: "฿2,650,000",
      discount: "฿2,500,000",
    },
    {
      id: 2,
      title: "SUMITOMO SH130-6 (STN130T6J00BH2993)",
      image: "https://app.leadway.co.th/uploads/S_7725108_0_5e37742dd7.jpg",
      price: "฿2,650,000",
      discount: "฿2,500,000",
    },
    {
      id: 3,
      title: "SUMITOMO SH130-6 (STN130T6J00BH2993)",
      image: "https://app.leadway.co.th/uploads/S_7725108_0_5e37742dd7.jpg",
      price: "฿2,650,000",
      discount: "฿2,500,000",
    },
    {
      id: 4,
      title: "SUMITOMO SH130-6 (STN130T6J00BH2993)",
      image: "https://app.leadway.co.th/uploads/S_7725108_0_5e37742dd7.jpg",
      price: "฿2,650,000",
      discount: "฿2,500,000",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex justify-center items-center w-full h-30 px-3 pt-12 pb-4 max-w-7xl mx-auto">
            <h1
              className="text-3xl font-semibold text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              รถมือสอง
            </h1>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="w-full max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full shrink-0 overflow-hidden px-3 mt-2
                    sm:w-1/2 
                    lg:w-1/3"
                >
                  <div className="group relative overflow-hidden cursor-pointer">
                    <div
                      className="absolute flex items-center top-2 px-2 py-1 h-7.5 z-10 font-semibold rounded-r-full
                        text-white bg-linear-to-t from-[#FF4249] to-[#FF8003]"
                    >
                      <span>SUMITOMO</span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt="product"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-3.25 grid grid-cols-3 w-9/12 h-6 text-[11px] z-10
                    bg-white text-[#666666] divide-x divide-gray-300
                    "
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      13-2026 14:48 PM
                    </div>
                    <div className="flex items-center justify-center w-full h-full">
                      44 Views
                    </div>
                    <div className="flex items-center justify-center w-full h-full">
                      ICONS
                    </div>
                  </div>
                  <div className="grid mx-auto h-auto py-10 px-5.5 gap-y-2 mb-7.5 bg-white">
                    <div className="flex gap-1">
                      <span className="text-3xl font-bold text-shadow-lg/30 text-[#ECB51D]">
                        {item.discount}
                      </span>
                      <span className="flex items-end line-through text-[#A1A1A1]">
                        {item.price}
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="text-xl truncate hover:font-semibold text-[#337AB7]"
                    >
                      {item.title}
                    </Link>
                    <div className="flex justify-between items-center">
                      <span className="text-black mr-2">คะแนนประเมิน</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="star" fill="#fbc634" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {/* <MoreButton onClick={() => {}} /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
