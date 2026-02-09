"use client";
import { useState } from "react";
import { Link } from "@/navigation";
import Icon from "@/components/icon";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const [openProductMenu, setOpenProductMenu] = useState<boolean | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale: "th" | "en") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  };

  const menu = [
    { id: 1, title: t("home"), href: "/" },
    {
      id: 2,
      title: t("products_and_services"),
      href: "#",
      submenu: [
        { id: "2-1", title: "SUMITOMO", href: "/sumitomo" },
        { id: "2-2", title: "SANY", href: "/sany" },
        { id: "2-3", title: "SANY EV", href: "/sany-ev" },
        { id: "2-4", title: "METSO", href: "/metso" },
        { id: "2-5", title: "JGM", href: "/jgm" },
        { id: "2-6", title: t("service"), href: "/service" },
        { id: "2-7", title: t("usedmachine"), href: "/usedmachine" },
      ],
    },
    { id: 3, title: t("promotion"), href: "/promotion" },
    { id: 4, title: t("news"), href: "/news" },
    { id: 5, title: t("contact"), href: "/contact" },
    { id: 6, title: "1462", href: "tel:1462" },
    { id: 7, title: "TH | EN", href: "/" },
  ];

  return (
    <header className="fixed top-0 z-40 w-full shadow-lg bg-white">
      <nav className="group max-w-7xl w-full mx-auto flex items-center justify-between py-3 px-2">
        <Link href="/" className="flex items-center">
          <div className="flex items-center h-14">
            <img
              src="/image/Logo.png"
              alt="Logo"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </div>
        </Link>
        <div
          className={`hidden text-base lg:flex  ${locale} ${locale === "th" ? "lg:gap-x-7 xl:gap-x-16" : "lg:gap-3.5 xl:gap-x-13"}`}
        >
          {menu.map((item) => {
            if (item.id === 2) {
              return (
                <button
                  key={item.id}
                  onClick={() => setOpenProductMenu(!openProductMenu)}
                  className="font-medium cursor-pointer text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
                >
                  {item.title}
                  <span
                    className={`ml-1 inline-block transition-transform duration-300 ease-in-out ${
                      openProductMenu ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>
              );
            }
            if (item.id === 7) {
              return (
                <div key={item.id} className="flex gap-1 text-[#7e7e7d]">
                  <button
                    onClick={() => changeLanguage("th")}
                    className={`font-medium group-hover:text-black ${locale === "th" ? "text-[#ffab00]" : ""} hover:text-[#ffab00] cursor-pointer`}
                  >
                    TH
                  </button>
                  <span>|</span>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`font-medium group-hover:text-black ${locale === "en" ? "text-[#ffab00]" : ""} hover:text-[#ffab00] cursor-pointer`}
                  >
                    EN
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpenProductMenu(false)}
                className="font-medium text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
              >
                {item.id === 6 ? (
                  <div className="flex gap-1 items-center">
                    <Icon name="phone" fill="#EE4B75" />
                    {item.title}
                  </div>
                ) : (
                  item.title
                )}
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex lg:hidden lg:flex-1 lg:justify-end"
        >
          <div className="flex py-1 px-2 rounded-md cursor-pointer border border-[#d2d7df]">
            <Icon name="list" size={28} />
          </div>
        </button>
        <div
          className={`absolute top-full left-0 z-50 w-full overflow-hidden bg-[#1E4183]  ${openProductMenu ? "max-h-screen" : "max-h-0"}
          shadow-lg transition-all duration-700 ease-in-out hidden lg:block`}
        >
          <div className="max-w-7xl mx-auto py-12 px-3 justify-between">
            <div className="flex items-center w-full h-30 px-3">
              <div className="w-1/2">
                <span className="font-semibold text-4xl xl:text-5xl text-white">
                  {t("products_and_services")}
                </span>
              </div>
              <div className="grid grid-flow-col grid-rows-4 w-full gap-2 px-10 border-l-4 border-white">
                {menu
                  .find((item) => item.submenu)
                  ?.submenu?.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.href}
                      onClick={() => {
                        setOpenMenu(false);
                        setOpenProductMenu(false);
                      }}
                      className="block text-xl text-white hover:text-[#ffab00]"
                    >
                      {sub.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-full left-0 z-40 w-full overflow-hidden bg-[#1E4183] shadow-lg ${openMenu ? "max-h-screen" : "max-h-0"} 
            lg:hidden transition-all duration-700`}
        >
          <div className="py-2">
            {menu.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setOpenSubmenu(openSubmenu === item.id ? null : item.id)
                    }
                    className="w-full flex justify-between items-center px-6 py-4 text-base font-medium
                    text-white hover:bg-[#1E4193] hover:text-[#ffab00]"
                  >
                    {item.title}
                    <span
                      className={`transition-transform duration-300 ${
                        openSubmenu === item.id ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpenMenu(false)}
                    className="block px-6 py-4 text-base font-medium
                    text-white hover:bg-[#1E4193] hover:text-[#ffab00]"
                  >
                    {item.id === 6 ? (
                      <div className="flex gap-1 items-center">
                        <Icon name="phone" fill="#EE4B75" />
                        {item.title}
                      </div>
                    ) : item.id === 7 ? (
                      <div key={item.id} className="flex gap-1 text-white">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeLanguage("th");
                          }}
                          className={`${locale === "th" ? "text-[#ffab00]" : ""} cursor-pointer`}
                        >
                          TH
                        </button>
                        <span>|</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeLanguage("en");
                          }}
                          className={`${locale === "en" ? "text-[#ffab00]" : ""} cursor-pointer`}
                        >
                          EN
                        </button>
                      </div>
                    ) : (
                      item.title
                    )}
                  </Link>
                )}
                {item.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-500 bg-[#00225B9C]
              ${openSubmenu === item.id ? "max-h-96" : "max-h-0"}`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.href}
                        onClick={() => setOpenMenu(false)}
                        className="block px-10 py-3 text-sm text-white
                        hover:bg-[#00225B9C] hover:text-[#ffab00]"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
