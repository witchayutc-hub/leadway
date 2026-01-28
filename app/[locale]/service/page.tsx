"use client";
import Icon from "@/components/icon";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Service");
  const services = [
    {
      title: t("financial.title"),
      description: t("financial.description"),
      Icon: <Icon name="building" size={64} fill="#0D6EFD" />,
    },
    {
      title: t("after_sale.title"),
      description: t("after_sale.description"),
      Icon: <Icon name="hand" size={64} fill="#0D6EFD" />,
    },
    {
      title: t("spare.title"),
      description: t("spare.description"),
      Icon: <Icon name="gear" size={64} fill="#0D6EFD" />,
    },
    {
      title: t("customer.title"),
      description: t("customer.description"),
      Icon: <Icon name="userservice" size={64} fill="#0D6EFD" />,
    },
    {
      title: t("hotline.title"),
      description: t("hotline.description"),
      Icon: <Icon name="fireservice" size={64} fill="#0D6EFD" />,
    },
    {
      title: t("service_centers.title"),
      description: t("service_centers.description"),
      Icon: <Icon name="mapservice" size={64} fill="#0D6EFD" />,
    },
  ];

  const serviceChecks = [
    t("service_checks.performance"),
    t("service_checks.fuel"),
    t("service_checks.engine_injector"),
    t("service_checks.engine_system"),
    t("service_checks.electrical"),
    t("service_checks.walker"),
    t("service_checks.suspension"),
    t("service_checks.hydraulic"),
    t("service_checks.cylinder"),
  ];

  const gallery = {
    galleryGrid1: [
      "/image/0403-min.jpg",
      "/image/0923_0-min.jpg",
      "/image/0462_0-min.jpg",
      "/image/0403-min.jpg",
    ],
    galleryGrid2: [
      "/image/0590_0-min.jpg",
      "/image/0653_0-min.jpg",
      "/image/0513_0-min.jpg",
      "/image/0749_0-min.jpg",
    ],
    galleryGrid3: [
      "/image/0659_0-min.jpg",
      "/image/0672_0-min.jpg",
      "/image/0813_0-min.jpg",
      "/image/0762_0-min.jpg",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex justify-center items-center w-full px-3 py-12 max-w-7xl mx-auto">
            <h1
              className="text-3xl font-semibold text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              {t("our_business")}
            </h1>
          </div>
        </section>
        <section>
          <div
            className="grid grid-cols-1 gap-x-12 gap-y-8 max-w-7xl mx-auto
              sm:grid-cols-2
              lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group w-full text-center cursor-pointer"
              >
                <div
                  className="flex justify-center p-5 transition-transform duration-300 ease-out
                    group-hover:-translate-y-2"
                >
                  {service.Icon}
                </div>
                <div className="grid">
                  <h3 className="text-2xl py-3 text-[#052465] group-hover:text-[#ffab00]">
                    {service.title}
                  </h3>
                  <p className="p-3 text-black">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center w-full px-3 py-12 mt-12 max-w-7xl mx-auto">
            <h1
              className="text-center text-3xl text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              {t("machine_testing-services")}
            </h1>
          </div>
        </section>
        <section>
          <div className="flex justify-center w-full px-3 pt-12 max-w-7xl mx-auto">
            <div
              className="grid grid-cols-1 gap-y-3 gap-x-2 p-3 w-full
                sm:grid-cols-2
                lg:grid-cols-3"
            >
              {serviceChecks.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full cursor-pointer text-black hover:text-[#ffab00]"
                >
                  <Icon name="check" size={16} fill="#000000" />
                  <span className="flex-1 ml-3 text-left">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center w-full px-3 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {Object.values(gallery).map((column, index) => (
                <div key={index} className="grid gap-4">
                  {column.map((src, image) => (
                    <img
                      key={image}
                      src={src}
                      alt="gallery-photo"
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
