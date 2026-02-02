"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Icon from "./icon";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import SummaryFooter from "./footer/summaryFooter";

export default function Bounce() {
  const t = useTranslations("Component");
  const pathname = usePathname();

  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`fixed ${pathname === "/required-energy-consumption" ? " bottom-25" : "bottom-4"} right-5 z-60 
          sm:bottom-6 sm:right-6
          lg:bottom-10 lg:right-10`}
      >
        {show && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-3 mb-5"
          >
            <div className="flex justify-end">
              <Link href="https://m.me/leadway">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-white
                lg:w-15 lg:h-15"
                >
                  <i className="bi bi-messenger text-4xl text-blue-500" />
                </div>
              </Link>
            </div>
            <div className="flex justify-end">
              <Link href="tel:1462">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-white               
                lg:w-15 lg:h-15"
                >
                  <Icon
                    name="phone"
                    size={42}
                    fill="#FFAB00"
                    className="mt-3"
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-end">
              <Link href="mailto:info@leadway.co.th">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-white
                lg:w-15 lg:h-15"
                >
                  <Icon
                    name="email"
                    size={48}
                    fill="#EB7718"
                    className="mt-1"
                  />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
        <div
          onClick={() => setShow(!show)}
          className="relative flex items-center justify-center w-14 h-14 animate-[bounce_2s_infinite] cursor-pointer
          sm:w-16 sm:h-16
          lg:w-20 lg:h-20"
        >
          <img
            src="https://leadway.co.th/assets/icons/chat.svg"
            alt="icon"
            className="w-full h-full"
          />
          <span
            className="absolute mb-2 text-xs font-medium pointer-events-none text-white
            sm:text-sm"
          >
            {t("contact_button")}
          </span>
        </div>
      </div>
      {pathname === "/required-energy-consumption" && (
        <SummaryFooter show={show} />
      )}
    </div>
  );
}
