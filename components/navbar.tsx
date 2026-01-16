"use client";
import { useState } from "react";
import Link from "next/link";

const menu = [
  { id: 1, title: "หน้าแรก", href: "/" },
  {
    id: 2,
    title: "สินค้าและบริการ",
    href: "",
    submenu: [
      { id: "2-1", title: "SUMITOMO", href: "/" },
      { id: "2-2", title: "SANY", href: "/" },
      { id: "2-3", title: "SANY EV", href: "/" },
      { id: "2-4", title: "METSO", href: "/" },
      { id: "2-5", title: "JGM", href: "/" },
      { id: "2-6", title: "บริการ", href: "/" },
      { id: "2-7", title: "รถมือสอง", href: "/" },
    ],
  },
  { id: 3, title: "โปรโมชั่น", href: "/promotion" },
  { id: 4, title: "ข่าวสารและกิจกรรม", href: "/news" },
  { id: 5, title: "ติดต่อ", href: "/contact" },
  { id: 6, title: "1462", href: "/" },
  { id: 7, title: "TH | EN", href: "/" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const [openProductMenu, setOpenProductMenu] = useState<boolean | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  return (
    <header className="fixed top-0 z-50 w-full shadow-lg bg-white">
      <nav className="group max-w-7xl w-full mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="https://leadway.co.th/assets/Logo.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>
        <div className="hidden text-base lg:flex lg:gap-6 xl:gap-x-12">
          {menu.map((item) =>
            item.id === 2 ? (
              <button
                key={item.id}
                onClick={() => setOpenProductMenu(!openProductMenu)}
                className="font-semibold cursor-pointer text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
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
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className="font-semibold text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
              >
                {item.title}
              </Link>
            )
          )}
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex lg:hidden lg:flex-1 lg:justify-end"
        >
          <span className="px-4 py-2 text-sm font-semibold text-[#7e7e7d] hover:text-[#ffab00]">
            MENU
          </span>
        </button>
        <div
          className={`absolute top-full left-0 z-50 w-full overflow-hidden bg-[#1E4183]  ${openProductMenu ? "max-h-screen" : "max-h-0"}
          shadow-lg transition-all duration-700 ease-in-out`}
        >
          <div className="max-w-7xl mx-auto py-12 px-3 justify-between">
            <div className="flex items-center w-full h-30 px-3">
              <div className="w-1/2">
                <span className="text-5xl text-white font-semibold">
                  สินค้าและบริการ
                </span>
              </div>
              <div className="grid grid-flow-col grid-rows-4 w-full gap-2 px-12 border-l-4">
                {menu
                  .find((item) => item.submenu)
                  ?.submenu?.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.href}
                      onClick={() => setOpenMenu(false)}
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
          className={`absolute top-full left-0 z-50 w-full overflow-hidden bg-[#1E4183] shadow-lg ${openMenu ? "max-h-screen" : "max-h-0"} 
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
                    {item.title}
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
