"use client";
import BarCharts from "@/components/Section/barCharts";
import { useTranslations } from "next-intl";
import { use, useEffect, useState } from "react";

export default function Page() {
  const t = useTranslations("Calculation");

  const [rangeValue, setRangeValue] = useState(200);
  const min = 0.0;
  const max = 500.0;

  const percentage = ((rangeValue - min) / (max - min)) * 100;

  const [showDataCompare, setShowDataCompare] = useState(false);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 px-3 gap-3">
              <div className="flex text-xl border-t-4 border-[#051C56] text-[#051C56]">
                <span>On-Road</span>
              </div>
              <div className="flex text-xl border-t-4 border-[#051C56] text-[#051C56]">
                <span>Off-Road</span>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionCal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-12">
              <div>
                <div>
                  <span className="text-2xl font-semibold text-[#051C56]">
                    {t("calculator_program")}
                  </span>
                </div>
                <div className="grid grid-cols-2 px-3 py-12">
                  <div className="flex text-xl justify-center pb-4 border-b-4 border-[#051C56] text-[#051C56]">
                    <span> {t("one_way")}</span>
                  </div>
                  <div className="flex text-xl justify-center border-b-4 border-[#051C56] text-[#051C56]">
                    <span> {t("round_trip")}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 text-[#051C56]">
                  <div className="grid grid-cols-12 items-center px-3 gap-2">
                    <span className="text-right col-span-3">
                      {t("distance")}
                    </span>
                    <input
                      type="number"
                      min={min}
                      max={max}
                      value={rangeValue.toFixed(1)}
                      step={0.1}
                      onChange={(e) => setRangeValue(Number(e.target.value))}
                      className="mx-auto block w-full max-w-50 h-20 p-3 text-3xl rounded-lg border col-span-6
                        border-gray-200 text-[#051C56] focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]
                        sm:text-4xl 
                        xl:text-5xl"
                    />
                    <span className="text-left col-span-3">{t("km")}</span>
                    <div className="h-4"></div>
                  </div>
                  <div className="grid">
                    <div className="grid grid-cols-12 items-center px-3 gap-2">
                      <span className="text-right col-span-3">
                        {t("weight")}
                      </span>
                      <input
                        type="number"
                        className="mx-auto block w-full max-w-50 h-20 p-3 text-5xl rounded-lg border col-span-6
                         border-gray-200 text-[#051C56] focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]"
                      />
                      <span className="text-left col-span-3">{t("ton")}</span>
                      <span className="text-center col-span-12">
                        {t("total_weight")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="grid gap-2 place-items-center py-6 
                        lg:border-l-2 lg:border-[#051C56]"
                    >
                      <div>
                        <span className="text-xl">
                          {t("remaining_battery")}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <div>
                          <span className="text-xl">soc</span>
                        </div>
                        <div>
                          <img
                            src="/image/battery_71-100_percent.png"
                            className="w-full max-h-10 object-contain aspect-video"
                          />
                        </div>
                        <div>
                          <span className="text-4xl">99 %</span>
                        </div>
                      </div>
                      <div>
                        <span className="">( 350 / 350 kW )</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-12 px-3">
              <div>
                <div>
                  <div className="w-full relative">
                    <div
                      className="absolute top-6 font-medium text-[#051C56] -translate-x-1/2"
                      style={{ left: `${percentage}%` }}
                    >
                      {rangeValue}
                    </div>
                    <input
                      type="range"
                      min={min}
                      max={max}
                      step={0.1}
                      value={rangeValue.toFixed(1)}
                      onChange={(e) => setRangeValue(Number(e.target.value))}
                      className="w-full accent-[#051C56]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-[#0f501d]">
              <div className="flex items-center px-8 py-1 rounded-lg bg-[#def0d3]">
                <i className="bi bi-check-circle text-2xl" />
                <div className="ms-3">
                  ไม่เกินระยะการวิ่ง ไม่จำเป็นต้องชาร์จ
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-12 px-3">
              <div>
                <span className="text-5xl font-medium text-[#051C56] ">
                  {t("recommended_total")} 1 {t("charging_session")}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionResult">
          <div className="bg-gray-100/70">
            <div className="max-w-7xl mx-auto">
              <div className="text-center py-12 px-3">
                <div>
                  <span className="text-2xl font-medium text-[#051C56] ">
                    {t("result")}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 px-3 gap-6">
                <div className="grid place-items-center">
                  <div className="grid w-full place-items-center">
                    <div className="text-center lg:w-3/5 border-b-5 border-blue-700">
                      <span className="text-2xl font-semibold text-[#051C56] ">
                        {t("energy_carbon_footprint")}
                      </span>
                    </div>
                  </div>
                  <div
                    className="grid w-full max-w-150 gap-4 py-12 px-3 text-xs bg-[#E5F0FE]
                        sm:text-sm
                        lg:text-base "
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-2 pr-2 flex justify-end">
                        <img src="/image/Energy.png" className="w-2/7" />
                      </div>
                      <div className="col-span-6">
                        <span className=" text-[#051C56] ">
                          {t("energy_consumption")}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">698.78</span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">kWh</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-2 pr-2 flex justify-end">
                        <img src="/image/carbon.png" className="w-2/7" />
                      </div>
                      <div className="col-span-6">
                        <span className=" text-[#051C56] ">
                          {t("carbon_footprint")}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">150.00</span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">Credits</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid place-items-center">
                  <div className="grid w-full place-items-center">
                    <div className="text-center lg:w-3/5 border-b-5 border-blue-700">
                      <span className="text-2xl font-semibold text-[#051C56] ">
                        {t("charging_cost")}
                      </span>
                    </div>
                  </div>
                  <div
                    className="grid w-full max-w-150 gap-4 py-7.5 px-3 text-xs bg-[#E5F0FE]
                        sm:text-sm
                        lg:text-base "
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-8">
                        <span className=" text-[#051C56] ">
                          {t("private")} (7.5 บาท/kWh)
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">5,240.81</span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">{t("baht")}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-8">
                        <span className=" text-[#051C56] ">
                          {t("mea/pea_on")} (4.52 บาท/kWh)
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">150.00</span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">{t("baht")}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-8">
                        <span className=" text-[#051C56] ">
                          {t("mea/pea_off")} (2.99 บาท/kWh)
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">150.00</span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">{t("baht")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto py-12 px-3">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setShowDataCompare(!showDataCompare)}
                  className="cursor-pointer"
                >
                  <div className="flex px-10 py-3 rounded-lg bg-[#6394e5]">
                    <span className="text-xl text-center text-white">
                      {t("compare")}
                    </span>
                  </div>
                </button>
              </div>
              {showDataCompare && (
                <div>
                  <div className="grid place-items-center py-12">
                    <div
                      className="flex justify-between w-full
                    sm:w-xl 
                    lg:w-185"
                    >
                      <div />
                      <div className="grid">
                        <div className="text-center border-b-5 ml-7 lg:w-lg border-blue-700">
                          <span className="text-xl font-semibold text-[#051C56] ">
                            {t("data_to_compare")}
                          </span>
                        </div>
                      </div>
                      <i
                        onClick={() => setShowDataCompare(false)}
                        className="bi bi-x-lg flex items-center cursor-pointer
                  sm:text-3xl"
                      ></i>
                    </div>
                    <div
                      className="grid max-w-150 gap-4 py-12 px-10 text-xs bg-[#E5F0FE]
                        sm:text-sm
                        lg:text-base lg:max-w-full"
                    >
                      <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6">
                          <span className=" text-[#051C56] ">
                            {t("fuel_consumption")}
                          </span>
                        </div>
                        <input
                          type="number"
                          className="col-span-4 h-12 px-2 text-center bg-white
                          focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]"
                          placeholder={t("fuel_consumption")}
                        />
                        <div className="col-span-2">
                          <span className=" text-[#051C56] ">{t("km/L")}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6">
                          <span className=" text-[#051C56] ">
                            {t("fuel_price_per_liter")}
                          </span>
                        </div>
                        <input
                          type="number"
                          className="col-span-4 h-12 px-2 text-center bg-white 
                            focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]"
                          placeholder={t("fuel_price")}
                        />
                        <div className="col-span-2">
                          <span className=" text-[#051C56] ">{t("baht")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <span className="text-xl underline">
                        ส่วนต่างค่าใช่จ่ายน้ำมัน และชาร์จไฟ
                      </span>
                    </div>
                    <div className="py-6">
                      <BarCharts />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {!showResult ? (
              <div className="max-w-7xl mx-auto px-3">
                <div className="flex items-center justify-center">
                  <div
                    onClick={() => setShowResult(!showResult)}
                    className="flex px-10 py-2 gap-2 rounded-xl bg-[#051C56] cursor-pointer"
                  >
                    <span className="text-xl text-center text-white">
                      {t("view")} <i className="bi bi-chevron-double-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-3 bg-[#F4F4F9]">
                <div className="flex items-center justify-between py-12 p-3">
                  <div className="w-6 h-6" />
                  <span className="font-medium text-2xl text-[#051C56]">
                    {t("summary_result")}
                  </span>
                  <div>
                    <button
                      onClick={() => setShowResult(!showResult)}
                      className=" cursor-pointer"
                    >
                      <i className="bi bi-chevron-down text-2xl text-[#051C56]" />
                    </button>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto">
                  <table className="w-full ">
                    <tbody className="text-sm text-black">
                      <tr>
                        <td className="p-3">{t("travel_distance")}</td>
                        <td className="p-3 text-end">225.40</td>
                        <td className="p-3 w-1 text-end">{t("km")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("total_weight_result")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("ton")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("remaining_battery")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">%</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("charge_count")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("round")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("energy_consumption")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">kW</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("carbon_footprint")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">Credits</td>
                      </tr>
                      <tr className="border-b-4 border-[#051C56]">
                        <td
                          colSpan={3}
                          className="p-3 pt-6 font-bold text-[#051C56]"
                        >
                          {t("oil_cost")}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3"> {t("oil_cost")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr className="border-b-4 border-[#051C56]">
                        <td
                          colSpan={3}
                          className="p-3 pt-6 font-bold text-[#051C56]"
                        >
                          {t("electricity_cost")}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("private")} (7.5 บาท/kWh)</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("on_peak")} (4.52 บาท/kWh)</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("off_peak")}(2.99 บาท/kWh)</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr className="border-b-4 border-[#051C56]">
                        <td
                          colSpan={3}
                          className="p-3 pt-6 font-bold text-[#051C56]"
                        >
                          {t("difference_oil_electricity_cost")}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("private")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("on_peak_electricity")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("off_peak_electricity")}</td>
                        <td className="p-3 w-1 text-end">50.50 </td>
                        <td className="p-3 text-end">{t("baht")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <div
              className={`text-center px-3 py-12 ${showResult ? "bg-[#F4F4F9]" : ""}`}
            >
              <span className="text-sm text-red-500">{t("remark")}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
