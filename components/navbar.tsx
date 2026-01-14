"use client";
import { useState } from "react";
import Link from "next/link";

const menu = [
  { id: 1, title: "หน้าแรก", href: "/" },
  { id: 2, title: "สินค้าและบริการ", href: "/" },
  { id: 3, title: "โปรโมชั่น", href: "/promotion" },
  { id: 4, title: "ข่าวสารและกิจกรรม", href: "/news" },
  { id: 5, title: "ติดต่อ", href: "/contact" },
  { id: 6, title: "1462", href: "/" },
  { id: 7, title: "TH | EN", href: "/" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);

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
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
            >
              {item.title}
            </Link>
          ))}
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
          className={`absolute top-full left-0 z-50 w-full overflow-hidden bg-[#1E4183] shadow-lg ${openMenu ? "max-h-screen" : "max-h-0"} 
            lg:hidden
            transition-all duration-700`}
        >
          <div className="py-2">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpenMenu(false)}
                className="block px-6 py-4 text-base font-medium
                 text-white active:bg-[#1E4193] hover:bg-[#1E4193] hover:text-[#ffab00]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
