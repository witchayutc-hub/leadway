import Brand from "@/components/brand";
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

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex items-center justify-center">
            <img
              src="https://app.leadway.co.th/uploads/BANNAR_01_67b8417878.jpg"
              alt="Banner"
              className="w-full h-auto"
            />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#ecb51d]">
              สินค้าทั้งหมด
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto px-3">
            <div className="flex flex-wrap justify-center">
              {Allproducts.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full sm:w-1/2 lg:w-1/3 shrink-0
                 border border-[#e5e7eb] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="product"
                    className="w-full h-full object-cover
                   transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-[#0d6efd]/40
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="flex items-center justify-center">
            <h2 className="py-2 text-3xl sm:text-4xl lg:text-5xl text-[#ecb51d]">
              ข่าวสารและกิจกรรม
            </h2>
          </div>
          <div className="w-full max-w-7xl mx-auto py-12">
            <div className="flex flex-wrap">
              {newsEvents.map((item) => (
                <div
                  key={item.id}
                  className="relative group w-full sm:w-1/2 lg:w-1/3 shrink-0
                   overflow-hidden cursor-pointer px-3 pb-3"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-full h-full object-cover
                       transition-transform duration-500
                       group-hover:scale-105"
                    />
                    <div className="grid bg-black mx-auto h-auto p-3.25 gap-y-2">
                      <span className="text-xl text-[#ffcb00] font-semibold">
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
