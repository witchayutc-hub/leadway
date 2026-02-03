import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Props = {
  show: boolean;
};

export default function SummaryFooter({ show }: Props) {
  const t = useTranslations("Component");
  return (
    <div>
      {!show && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:block fixed bottom-40 right-5 z-40"
        >
          <div className="grid gap-y-5">
            <button
              onClick={() => {
                document
                  .getElementById("sectionCal")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="flex items-center justify-center min-w-30 min-h-12 rounded-md bg-[#052C65] cursor-pointer">
                <span className="text-xl text-white">{t("calculation")}</span>
              </div>
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("sectionResult")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="flex items-center justify-center min-w-30 min-h-12 rounded-md bg-[#052C65] cursor-pointer">
                <span className="text-xl text-white">{t("result")}</span>
              </div>
            </button>
          </div>
        </motion.div>
      )}
      <div className="fixed bottom-0 z-50 w-full bg-[#052C65]">
        <div className="flex mx-auto max-w-7xl items-center justify-center min-h-12 max-h-25 p-3 text-sm text-white">
          <div className="flex gap-x-12">
            <div className="grid sm:flex text-center gap-2">
              <div>
                <span>จำนวนการชาร์จ</span>
              </div>
              <div>
                <span>0</span>
              </div>
              <div>
                <span>รอบ</span>
              </div>
            </div>
            <div className="grid sm:flex text-center gap-2">
              <div>
                <span>อัตราการใช้พลังงาน</span>
              </div>
              <div>
                <span>315.01</span>
              </div>
              <div>
                <span>kW</span>
              </div>
            </div>
            <div className="grid sm:flex text-center gap-2">
              <div>
                <span>ค่าไฟเอกชน</span>
              </div>
              <div>
                <span>0</span>
              </div>
              <div>
                <span>บาท</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
