import Link from "next/link";

export default function Navbar() {
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
        <div
          className="hidden text-base font-semibold 
            lg:flex lg:gap-6
            xl:gap-x-12"
        >
          <Link
            href="/"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            หน้าหลัก
          </Link>
          <Link
            href="#"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            สินค้าและบริการ
          </Link>
          <Link
            href="/promotion"
            className=" text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            โปรโมชั่น
          </Link>
          <Link
            href="/news"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            ข่าวสารและกิจกรรม
          </Link>
          <Link
            href="/contact"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            ติดต่อเรา
          </Link>
          <Link
            href="#"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            1462
          </Link>
          <Link
            href="#"
            className="text-[#7e7e7d] group-hover:text-black hover:text-[#ffab00]"
          >
            TH | EN
          </Link>
        </div>
        <div className="flex lg:hidden lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="px-4 py-2 text-sm font-semibold text-[#7e7e7d] hover:text-[#ffab00]"
          >
            menu
          </a>
        </div>
      </nav>
    </header>
  );
}
