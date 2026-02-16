"use client";
import BarCharts from "@/components/Section/barCharts";
import Login from "@/components/Section/login";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NumberInput from "@/components/input/numberInput";
import NumberInput2digit from "@/components/input/numberInpur2digit";
import { apiRequiredEnergyTruck } from "@/api/getCalculate";
import { Calculate } from "@/components/calculate/calculate";
import NumberInputFuel from "@/components/input/numberInputFuel";
import { formatPrice2Digit } from "@/helpers/price2Digit";

type DataTruckSelected = {
  id: number;
  battery_capacity: number;
  distance: number;
  attributes: {
    battery_capacity: number;
    payload: number;
    truck_weight: number;
    trailer_weight: number;
    usage_type: string;
    formula: {
      id: number;
      intercept: number;
      slope: number;
    };
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export default function Page() {
  const t = useTranslations("Calculation");
  const [login, setLogin] = useState<boolean>(true);

  const [selectedTruck, setSelectedTruck] = useState(0);
  const [dataTruckSelected, setDataTruckSelected] =
    useState<DataTruckSelected>();
  console.log(dataTruckSelected);
  const getDataTruck = (selectedTruck: number) => {
    const data = requiredEnergyTruck.find(
      (item: any) => item.id === selectedTruck,
    );

    setDataTruckSelected(data);
  };

  const [weightGo, setWeightGo] = useState(0.0);
  const [weightBack, setWeightBack] = useState(0.0);

  const [showDataCompare, setShowDataCompare] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [requiredEnergyTruck, setRequiredEnergyTruck] = useState<any[]>([]);
  const [error, setError] = useState(false);

  /////////////////////////////////////////////////////////////////////////////  Condition //////////////////////////////////////////////////////////////////////////////////

  const [hoveredGo, setHoveredGo] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);

  // OnRoad // Round Trip === True is Open Round Trip | ไป-กลับ
  const [roundTrip, setRoundTrip] = useState<boolean>(false);

  // Battery Full
  const [batteryFull, setBatteryFull] = useState(true);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const fetchRequiredEnergyTruck = async () => {
    try {
      const response = await apiRequiredEnergyTruck();
      setRequiredEnergyTruck(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed", error);
      setError(true);
    }
  };

  useEffect(() => {
    setWeightGo(dataTruckSelected?.attributes?.payload ?? 0.0);
  }, [dataTruckSelected]);

  useEffect(() => {
    fetchRequiredEnergyTruck();
    getDataTruck(selectedTruck);
  }, [selectedTruck]);

  useEffect(() => {
    document.body.style.overflow = login ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [login]);

  if (error) {
    return (
      <div className="min-h-screen text-center py-10 text-red-600 ">
        Failed to load data. Please try again.
      </div>
    );
  }

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  const handleDrag1 = (clientX: number) => {
    if (!containerRef1.current) return;

    const rect = containerRef1.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;

    const percentage = offsetX / rect.width;
    const clamped = Math.min(1, Math.max(0, percentage));

    const newValue = clamped * 500;
    const formatted = Number(newValue.toFixed(1));

    setDistraneGo((prev) => (prev === formatted ? prev : formatted));
  };

  const handleDrag2 = (clientX: number) => {
    if (!containerRef2.current) return;

    const rect = containerRef2.current.getBoundingClientRect();

    const offsetX = clientX - rect.left;
    const raw = offsetX / rect.width;

    const reversed = 1 - raw;
    const clamped = Math.min(1, Math.max(0, reversed));

    const newValue = clamped * (max - min) + min;
    const formatted = Number(newValue.toFixed(1));

    setDistraneBack((prev) => (prev === formatted ? prev : formatted));
  };

  const handleMouseDown1 = () => {
    const handleMove = (e: MouseEvent) => {
      handleDrag1(e.clientX);
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const handleMouseDown2 = () => {
    const handleMove = (e: MouseEvent) => {
      handleDrag2(e.clientX);
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  /////////////////////////////////////////////////////////////////////////////  Calculate //////////////////////////////////////////////////////////////////////////////////////

  // Truck Selected Data
  const slope = dataTruckSelected?.attributes?.formula?.slope;
  const intercept = dataTruckSelected?.attributes?.formula?.intercept;
  const batteryCapacity = dataTruckSelected?.attributes?.battery_capacity;

  // Distance
  const min = 0.0;
  const max = 500.0;
  const [distraneGo, setDistraneGo] = useState(0.0);
  const [distraneBack, setDistraneBack] = useState(0.0);

  const percenTageGo = ((distraneGo - min) / (max - min)) * 100;
  const percenTageBack = 100 - ((distraneBack - min) / (max - min)) * 100;

  const TotalDistance = Calculate.total(
    distraneGo,
    roundTrip === true ? distraneBack : 0.0,
  );

  // Weight
  const totalWeightGo = Calculate.weightTruck(
    weightGo ?? 0.0,
    dataTruckSelected?.attributes?.truck_weight ?? 0.0,
    dataTruckSelected?.attributes?.trailer_weight ?? 0.0,
  );

  const totalWeightBack = Calculate.weightTruck(
    weightBack ?? 0.0,
    dataTruckSelected?.attributes?.truck_weight ?? 0.0,
    dataTruckSelected?.attributes?.trailer_weight ?? 0.0,
  );

  const totalWeightByLaw = Calculate.weightTruck(
    dataTruckSelected?.attributes?.payload ?? 0.0,
    dataTruckSelected?.attributes?.truck_weight ?? 0.0,
    dataTruckSelected?.attributes?.trailer_weight ?? 0.0,
  );

  const overWeightGo = totalWeightGo > totalWeightByLaw;
  const overWeightBack = totalWeightBack > totalWeightByLaw;

  const TotalWeight = Calculate.total(
    totalWeightGo,
    roundTrip === true ? totalWeightBack : 0.0,
  );

  // ConsumptionOnRoad || การใช้พลังงาน

  const ConsumptionOnRoadGo = Calculate.consumptionOnRoad(
    slope ?? 0.0,
    Number(totalWeightGo),
    intercept ?? 0.0,
  );

  const ConsumptionOnRoadBack = Calculate.consumptionOnRoad(
    slope ?? 0.0,
    Number(totalWeightBack),
    intercept ?? 0.0,
  );

  // EnergyConsumptionRate || อัตราการใช้พลังงาน
  const EnergyConsumptionRateGo = Calculate.energyConsumptionRate(
    ConsumptionOnRoadGo,
    distraneGo,
  );

  const EnergyConsumptionRateBack = Calculate.energyConsumptionRate(
    ConsumptionOnRoadBack,
    distraneBack,
  );

  const EnergyConsumptionRateTotal = Calculate.total(
    EnergyConsumptionRateGo,
    roundTrip ? EnergyConsumptionRateBack : 0,
  );

  // CarbonFootprintReduction || การลดอัตราคาร์บอน

  const CarbonFootprintReductionGo =
    Calculate.carbonFootprintReduction(distraneGo);

  const CarbonFootprintReductionBack =
    Calculate.carbonFootprintReduction(distraneBack);

  const TotalCarbonFootprintReduction = Calculate.total(
    CarbonFootprintReductionGo,
    roundTrip ? CarbonFootprintReductionBack : 0,
  );

  //  percenRemainingBattery || เปอร์เซนแบตเตอรี่
  const PercenRemainingBatteryGo = Calculate.persenRemainingBattery(
    batteryCapacity ?? 0,
    EnergyConsumptionRateGo,
  );

  const PercenRemainingBatteryBack = Calculate.persenRemainingBattery(
    batteryCapacity ?? 0,
    EnergyConsumptionRateBack,
  );

  const RemainingBatteryGo = Calculate.remainingBatterykW(
    batteryCapacity ?? 0,
    PercenRemainingBatteryGo,
  );

  const RemainingBatteryBack = Calculate.remainingBatterykW(
    batteryCapacity ?? 0,
    PercenRemainingBatteryBack,
  );

  // ค่าชาร์จไฟ
  const PrivateGoCost = Calculate.privateCost(EnergyConsumptionRateGo);
  const PrivateBackCost = Calculate.privateCost(EnergyConsumptionRateBack);
  const TotalPrivateCost = Calculate.total(
    PrivateGoCost,
    roundTrip ? PrivateBackCost : 0,
  );

  const OnPeakGo = Calculate.onPeakCost(EnergyConsumptionRateGo);
  const OnPeakBack = Calculate.onPeakCost(EnergyConsumptionRateBack);
  const TotalOnPeak = Calculate.total(OnPeakGo, roundTrip ? OnPeakBack : 0);

  const OffPeakGo = Calculate.offPeakCost(EnergyConsumptionRateGo);
  const OffPeakBack = Calculate.offPeakCost(EnergyConsumptionRateBack);
  const TotalOffPeak = Calculate.total(OffPeakGo, roundTrip ? OffPeakBack : 0);

  // ค่าน้ํามัน
  const [fuelConsumption, setFuelConsumption] = useState(0.0);
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState(0.0);

  const OilCost =
    Calculate.OilCost(fuelConsumption, fuelPricePerLiter, distraneGo) || 0.0;

  // Difference Oil and Electricity cost || ส่วนต่างค่าชาร์จไฟ กับค่าน้ำมัน
  const DifferencePrivateGo = Calculate.differencePrivate(
    OilCost,
    PrivateGoCost,
  );
  const DifferencePrivateBack = Calculate.differencePrivate(
    OilCost,
    PrivateBackCost,
  );
  const TotalDifferencePrivate = Calculate.total(
    DifferencePrivateGo,
    roundTrip ? DifferencePrivateBack : 0,
  );

  const DifferencePrivateOnPeakElectricityGo =
    Calculate.differencePrivateOnPeakElectricity(OilCost, OnPeakGo);
  const DifferencePrivateOnPeakElectricityBack =
    Calculate.differencePrivateOnPeakElectricity(OilCost, OnPeakBack);
  const TotalDifferencePrivateOnPeakElectricity = Calculate.total(
    DifferencePrivateOnPeakElectricityGo,
    roundTrip ? DifferencePrivateOnPeakElectricityBack : 0,
  );

  const DifferencePrivateOffPeakElectricityGo =
    Calculate.differencePrivateOffPeakElectricity(OilCost, OffPeakGo);
  const DifferencePrivateOffPeakElectricityBack =
    Calculate.differencePrivateOffPeakElectricity(OilCost, OffPeakBack);
  const TotalDifferencePrivateOffPeakElectricity = Calculate.total(
    DifferencePrivateOffPeakElectricityGo,
    roundTrip ? DifferencePrivateOffPeakElectricityBack : 0,
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="min-h-screen bg-white">
      <main>
        {login && (
          <section>
            <Login onClose={() => setLogin(false)} />
          </section>
        )}
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 px-3 gap-x-3 gap-y-12">
              <div className="grid text-[#052C65]">
                <div
                  className={`${dataTruckSelected?.attributes?.usage_type === "On road" ? "opacity-100" : "opacity-50"}`}
                >
                  <div className="flex mb-4 border-t-4 border-[#083E97]" />
                  <span className="text-xl">On-Road</span>
                </div>
                <div className="flex items-center justify-center pt-6">
                  <Carousel
                    opts={{ loop: true }}
                    className="w-8/12 sm:w-10/12 lg:w-10/12"
                  >
                    <CarouselContent className="-ml-1">
                      {requiredEnergyTruck
                        .filter(
                          (item) => item.attributes.usage_type === "On road",
                        )
                        .map((item) => (
                          <CarouselItem
                            key={item.id}
                            className={`flex items-center gap-3 basis-1/2 sm:basis-[35%] ${selectedTruck === item.id ? "opacity-100" : "opacity-50"}`}
                          >
                            <div
                              className="grid cursor-pointer"
                              onClick={() => setSelectedTruck(item.id)}
                            >
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img_slider.data.attributes.url}`}
                                alt={item.attributes.model}
                                className="aspect-video w-fill h-full object-contain px-2"
                              />
                              <span className="text-sm sm:text-base text-center h-12">
                                {item.attributes.model}
                              </span>
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              <div className="grid text-[#052C65]">
                <div
                  className={`${selectedTruck > 5 ? "opacity-100" : "opacity-50"}`}
                >
                  <div className="flex mb-4 border-t-4 border-[#083E97]" />
                  <span className="text-xl">Off-Road</span>
                </div>
                <div className="flex items-center justify-center pt-6">
                  <Carousel
                    opts={{ loop: true }}
                    className="w-8/12 sm:w-10/12 lg:w-10/12"
                  >
                    <CarouselContent className="-ml-1">
                      {requiredEnergyTruck
                        .filter(
                          (item) => item.attributes.usage_type !== "On road",
                        )
                        .map((item) => (
                          <CarouselItem
                            key={item.id}
                            className={`flex items-center gap-3 basis-1/2 sm:basis-[35%] ${selectedTruck === item.id ? "" : "opacity-50"}`}
                          >
                            <div
                              className="grid cursor-pointer"
                              onClick={() => setSelectedTruck(item.id)}
                            >
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}${item.attributes.img_slider.data.attributes.url}`}
                                alt={item.attributes.model}
                                className="aspect-video w-fill h-full object-contain px-2"
                              />
                              <span className="text-sm sm:text-base text-center h-12">
                                {item.attributes.model}
                              </span>
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sectionCal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center pt-12 lg:py-12">
              <div>
                <div className="pb-12">
                  <span className="text-2xl font-semibold text-[#052C65]">
                    {t("calculator_program")}
                  </span>
                </div>
                {dataTruckSelected?.attributes?.usage_type === "On road" && (
                  <div className="grid grid-cols-2 px-3 pb-12">
                    <div
                      onClick={() => setRoundTrip(false)}
                      className={`flex text-xl justify-center pb-4 border-b-4 cursor-pointer border-[#083E97] text-[#052C65]
                    ${roundTrip ? "opacity-50" : "transition duration-300 ease-in-out"}`}
                    >
                      <span> {t("one_way")}</span>
                    </div>
                    <div
                      onClick={() => setRoundTrip(true)}
                      className={`flex text-xl justify-center border-b-4 cursor-pointer border-[#083E97] text-[#052C65]
                            ${roundTrip ? "transition duration-300 ease-in-out" : "opacity-50 "}`}
                    >
                      <span> {t("round_trip")}</span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#051C56]">
                  <div className="grid grid-cols-12 items-center px-3 gap-2">
                    <span className="text-right col-span-3">
                      {t("distance")}
                    </span>
                    <div className="col-span-6">
                      <NumberInput
                        value={distraneGo}
                        min={0}
                        max={500}
                        onChange={setDistraneGo}
                      />
                    </div>
                    <span className="text-left col-span-3">{t("km")}</span>
                    <div className="lg:h-10"></div>
                  </div>
                  <div
                    className={`grid ${
                      overWeightGo ? "text-red-500" : "text-[#051C56]"
                    }`}
                  >
                    <div className="grid grid-cols-12 items-center px-3 gap-2">
                      <span className="text-right col-span-3 lg:col-span-4">
                        {t("weight")}
                      </span>
                      <div className="col-span-6">
                        <NumberInput2digit
                          min={0}
                          max={999}
                          value={weightGo}
                          onChange={setWeightGo}
                        />
                      </div>
                      <span className="text-left col-span-3 lg:col-span-2">
                        {t("ton")}
                      </span>
                      <span className="text-center col-span-12 mt-4">
                        ( {t("total_weight")} {formatPrice2Digit(totalWeightGo)}{" "}
                        / {t("weight_by_law")}{" "}
                        {formatPrice2Digit(totalWeightByLaw)} )
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${Number(PercenRemainingBatteryGo.toFixed(0)) >= 11 ? "text-[#052C65]" : "text-red-500"}`}
                  >
                    <div
                      className="grid gap-2 place-items-center pb-3 lg:pb-0
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
                          {Number(PercenRemainingBatteryGo.toFixed(0)) >= 71 ? (
                            <img
                              src="/image/battery_71-100_percent.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          ) : Number(PercenRemainingBatteryGo.toFixed(0)) >=
                            51 ? (
                            <img
                              src="/image/battery_51-70_percent.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          ) : Number(PercenRemainingBatteryGo.toFixed(0)) >=
                            31 ? (
                            <img
                              src="/image/battery_31-50_percent.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          ) : Number(PercenRemainingBatteryGo.toFixed(0)) >=
                            11 ? (
                            <img
                              src="/image/battery_10-30_percent.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          ) : Number(PercenRemainingBatteryGo.toFixed(0)) >=
                            1 ? (
                            <img
                              src="/image/battery_1-10_percent.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          ) : (
                            <img
                              src="/image/battery_empty.png"
                              className="w-full max-h-10 object-contain aspect-video"
                            />
                          )}
                        </div>
                        <div className="flex items-end w-20 gap-2">
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            {PercenRemainingBatteryGo.toFixed(0)}
                          </span>
                          <span className="text-sm">%</span>
                          {Number(PercenRemainingBatteryGo.toFixed(0)) <=
                            10 && (
                            <i
                              className="bi bi-exclamation-triangle text-3xl cursor-pointer"
                              onMouseEnter={() => setHoveredGo(true)}
                              onMouseLeave={() => setHoveredGo(false)}
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className={`flex items-center justify-center ${hoveredGo ? "bg-red-200" : ""}`}
                      >
                        {hoveredGo ? (
                          <div className="flex items-center justify-center w-full h-10 px-2 ">
                            <span className="whitespace-pre-line text-sm text-red-500">
                              {t("battery_remain")}
                            </span>
                          </div>
                        ) : (
                          <span className="whitespace-pre-line h-10">
                            ( {RemainingBatteryGo.toFixed(0)} /{" "}
                            {dataTruckSelected?.attributes?.battery_capacity ??
                              0}{" "}
                            kW )
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {roundTrip && (
            <div className="flex items-center justify-start max-w-7xl mx-auto">
              <div className="py-2 px-8 rounded-lg bg-[#052C65]">
                <span className="text-3xl text-white">ขาไป</span>
              </div>
            </div>
          )}
          <div className="max-w-7xl mx-auto">
            <div className="text-center pb-12 lg:py-12 px-3">
              <div>
                <div
                  ref={containerRef1}
                  className="relative w-7/10 h-32 mt-10 mx-auto
                      lg:w-8/10 "
                >
                  <div
                    onMouseDown={handleMouseDown1}
                    onTouchStart={(e) => handleDrag1(e.touches[0].clientX)}
                    className="absolute flex flex-col items-center -translate-x-1/2 translate-y-1/4 top-0 z-20 select-none cursor-grab w-20 h:20 
                      sm:w-40 sm:h-40 sm:-translate-y-1/7
                      lg:w-55 lg:h-55 lg:-translate-y-1/3"
                    style={{ left: `${percenTageGo}%` }}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${dataTruckSelected?.attributes?.img?.data?.attributes?.url}`}
                      alt="truck"
                      className="scale-x-[-1] object-contain pointer-events-none"
                    />
                    <div
                      className="mt-8 py-1 px-2 rounded text-sm font-bold whitespace-nowrap bg-[#0B5DC1] text-white
                        sm:text-xl sm:px-4"
                    >
                      {distraneGo.toFixed(1)} {t("km")}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#051C56]"
                      style={{ width: `${percenTageGo}%` }}
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
        {roundTrip && (
          <section>
            <div className="max-w-7xl mx-auto">
              <div className="text-center py-10">
                <div className="px-3">
                  <div className="flex text-xl justify-center pb-4 border-b-4 opacity-50 border-[#083e97] text-[#083e97]" />
                </div>
                <div className="mt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#051C56]">
                    <div className="grid grid-cols-12 items-center px-3 gap-2">
                      <span className="text-right col-span-3">
                        {t("distance")}
                      </span>
                      <div className="col-span-6">
                        <NumberInput
                          value={distraneBack}
                          min={0}
                          max={500}
                          onChange={setDistraneBack}
                        />
                      </div>
                      <span className="text-left col-span-3">{t("km")}</span>
                      <div className="h-10"></div>
                    </div>
                    <div
                      className={`grid ${
                        overWeightBack ? "text-red-500" : "text-[#051C56]"
                      }`}
                    >
                      <div className="grid grid-cols-12 items-center px-3 gap-2">
                        <span className="text-right col-span-3">
                          {t("weight")}
                        </span>
                        <div className="col-span-6">
                          <NumberInput2digit
                            min={0}
                            max={999}
                            value={weightBack}
                            onChange={setWeightBack}
                          />
                        </div>
                        <span className="text-left col-span-3">{t("ton")}</span>
                        <span className="text-center col-span-12 mt-4">
                          ( {t("total_weight")} {totalWeightBack} /{" "}
                          {t("weight_by_law")} {totalWeightByLaw} )
                        </span>
                      </div>
                    </div>
                    <div
                      className={`${Number(PercenRemainingBatteryBack.toFixed(0)) >= 11 ? "text-[#052C65]" : "text-red-500"}`}
                    >
                      <div className="w-full">
                        <div
                          className="grid grid-cols-1 justify-between place-items-center pb-3 gap-2 lg:pb-0
                        lg:border-l-2 lg:border-[#051C56]"
                        >
                          <div className="grid gap-2 px-3 w-70">
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
                                {Number(
                                  PercenRemainingBatteryBack.toFixed(0),
                                ) >= 71 ? (
                                  <img
                                    src="/image/battery_71-100_percent.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                ) : Number(
                                    PercenRemainingBatteryBack.toFixed(0),
                                  ) >= 51 ? (
                                  <img
                                    src="/image/battery_51-70_percent.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                ) : Number(
                                    PercenRemainingBatteryBack.toFixed(0),
                                  ) >= 31 ? (
                                  <img
                                    src="/image/battery_31-50_percent.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                ) : Number(
                                    PercenRemainingBatteryBack.toFixed(0),
                                  ) >= 11 ? (
                                  <img
                                    src="/image/battery_10-30_percent.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                ) : Number(
                                    PercenRemainingBatteryBack.toFixed(0),
                                  ) >= 1 ? (
                                  <img
                                    src="/image/battery_1-10_percent.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                ) : (
                                  <img
                                    src="/image/battery_empty.png"
                                    className="w-full max-h-10 object-contain aspect-video"
                                  />
                                )}
                              </div>
                              <div className="flex items-end w-20 gap-2">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                  {PercenRemainingBatteryBack.toFixed(0)}
                                </span>
                                <span className="text-sm">%</span>
                                {Number(
                                  PercenRemainingBatteryBack.toFixed(0),
                                ) <= 10 && (
                                  <i
                                    className="bi bi-exclamation-triangle text-3xl cursor-pointer"
                                    onMouseEnter={() => setHoveredBack(true)}
                                    onMouseLeave={() => setHoveredBack(false)}
                                  />
                                )}
                              </div>
                            </div>
                            <div
                              className={`flex items-center justify-center ${hoveredBack ? "bg-red-200" : ""}`}
                            >
                              {hoveredBack ? (
                                <div className="flex items-center justify-center w-full h-10 px-2">
                                  <span className="whitespace-pre-line text-sm text-red-500">
                                    {t("battery_remain")}
                                  </span>
                                </div>
                              ) : (
                                <div className="block h-10">
                                  <span className="whitespace-pre-line">
                                    ( {RemainingBatteryBack.toFixed(0)} /{" "}
                                    {dataTruckSelected?.attributes
                                      ?.battery_capacity ?? 0}{" "}
                                    kW )
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-end gap-2">
                            <input
                              type="checkbox"
                              checked={batteryFull}
                              onChange={(e) => setBatteryFull(e.target.checked)}
                              className="w-8 h-8 rounded appearance-none border-2 cursor-pointer
                                bg-white accent-lime-500 border-gray-400 checked:border-lime-500
                                checked:after:content-['✔'] checked:after:text-lime-500 checked:after:flex 
                                checked:after:justify-center checked:after:font-bold 
                                checked:after:text-3xl checked:after:-mt-1"
                            />
                            <span className="text-sm text-[#052C65]">
                              แบตเตอรี่เต็ม
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start max-w-7xl mx-auto">
              <div className="py-2 px-8 rounded-lg bg-[#052C65]">
                <span className="text-3xl text-white">ขากลับ</span>
              </div>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="text-center py-12 px-3">
                <div>
                  <div
                    ref={containerRef2}
                    className="relative w-7/10 h-32 mt-10 mx-auto 
                      lg:w-8/10 "
                  >
                    <div
                      onMouseDown={handleMouseDown2}
                      onTouchStart={(e) => handleDrag2(e.touches[0].clientX)}
                      className="absolute flex flex-col items-center -translate-x-1/2 translate-y-1/4 top-0 z-20 select-none cursor-grab w-20 h:20
                        sm:w-40 sm:h-40 sm:-translate-y-1/7
                        lg:w-55 lg:h-55 lg:-translate-y-1/3"
                      style={{ left: `${percenTageBack}%` }}
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${dataTruckSelected?.attributes?.img?.data?.attributes?.url}`}
                        alt="truck"
                        className="object-contain pointer-events-none"
                      />
                      <div
                        className="mt-8 py-1 px-2 rounded text-sm font-bold whitespace-nowrap bg-[#0B5DC1] text-white
                          sm:text-xl sm:px-4"
                      >
                        {distraneBack.toFixed(1)} {t("km")}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 w-full h-1.5 bg-[#051C56] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-200"
                        style={{ width: `${percenTageBack}%` }}
                      />
                    </div>
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
          </section>
        )}
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
                        <span className=" text-[#051C56]">
                          {t("energy_consumption")}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">
                          {formatPrice2Digit(EnergyConsumptionRateTotal)}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56]">kWh</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-2 pr-2 flex justify-end">
                        <img src="/image/carbon.png" className="w-2/7" />
                      </div>
                      <div className="col-span-6">
                        <span className=" text-[#051C56]">
                          {t("carbon_footprint")}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56] ">
                          {formatPrice2Digit(TotalCarbonFootprintReduction)}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className=" text-[#051C56]">Credits</span>
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
                        <span className=" text-[#051C56] ">
                          {formatPrice2Digit(TotalPrivateCost)}
                        </span>
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
                        <span className=" text-[#051C56] ">
                          {formatPrice2Digit(TotalOnPeak)}
                        </span>
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
                        <span className=" text-[#051C56] ">
                          {formatPrice2Digit(TotalOffPeak)}
                        </span>
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
                      className="grid max-w-150 gap-8 py-12 px-10 text-xs bg-[#E5F0FE]
                        sm:text-sm
                        lg:text-base lg:max-w-full"
                    >
                      <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6">
                          <span className=" text-[#051C56] ">
                            {t("fuel_consumption")}
                          </span>
                        </div>
                        <NumberInputFuel
                          value={fuelConsumption}
                          min={0}
                          max={999}
                          onChange={setFuelConsumption}
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
                        <NumberInputFuel
                          value={fuelPricePerLiter}
                          min={0}
                          max={999}
                          onChange={setFuelPricePerLiter}
                        />
                        <div className="col-span-2">
                          <span className=" text-[#051C56]">{t("baht")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <span className="text-xl underline text-[#051C56]">
                        {t("oil_vs_electricity")}
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
                      {t("view")} <i className="bi bi-chevron-double-down" />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-12 bg-[#F4F4F9]">
                <div className="flex items-center justify-between py-12 p-3">
                  <div className="w-1/20" />
                  <span className="font-medium text-2xl text-[#051C56]">
                    {t("summary_result")}
                  </span>
                  <div className="flex w-1/20">
                    <button
                      onClick={() => setShowResult(!showResult)}
                      className="cursor-pointer "
                    >
                      <i className="bi bi-chevron-down text-2xl text-[#051C56]" />
                    </button>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto overflow-x-auto">
                  <table className="w-full">
                    {roundTrip && (
                      <thead>
                        <tr className="border-b-4 text-[#051C56] border-[#051C56]">
                          <th className="p-3 text-end" colSpan={2}>
                            ขาไป
                          </th>
                          <th className="p-3 text-end" colSpan={2}>
                            ขากลับ
                          </th>
                          <th className="p-3 text-end" colSpan={2}>
                            ทั้งหมด
                          </th>
                          <th className="block w-1"></th>
                        </tr>
                      </thead>
                    )}
                    <tbody className="text-sm text-black">
                      <tr>
                        <td className="p-3">{t("travel_distance")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(distraneGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("km")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(distraneBack)}
                            </td>
                            <td className="p-3">{t("km")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalDistance)}
                            </td>
                          </>
                        )}

                        <td className="p-3 w-1">{t("km")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("total_weight_result")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(totalWeightGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("ton")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(totalWeightBack)}
                            </td>
                            <td className="p-3">{t("ton")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalWeight)}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("ton")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("remaining_battery")}</td>
                        <td className="p-3 text-end">
                          {PercenRemainingBatteryGo.toFixed(0)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">%</td>
                            <td className="p-3 text-end">
                              {PercenRemainingBatteryBack.toFixed(0)}
                            </td>
                            <td className="p-3">%</td>
                            <td className="p-3 text-end">-</td>
                          </>
                        )}
                        <td className="p-3">%</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("charge_count")}</td>
                        <td className="p-3 text-end">50.50 </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("round")}</td>
                            <td className="p-3 text-end">test</td>
                            <td className="p-3">{t("round")}</td>
                            <td className="p-3 text-end"></td>
                          </>
                        )}
                        <td className="p-3">{t("round")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("energy_consumption")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(EnergyConsumptionRateGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">kW</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(EnergyConsumptionRateBack)}
                            </td>
                            <td className="p-3">kW</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(EnergyConsumptionRateTotal)}
                            </td>
                          </>
                        )}
                        <td className="p-3">kW</td>
                      </tr>
                      <tr>
                        <td className="p-3">{t("carbon_footprint")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(CarbonFootprintReductionGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">Credits</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(CarbonFootprintReductionBack)}
                            </td>
                            <td className="p-3">Credits</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalCarbonFootprintReduction)}
                            </td>
                          </>
                        )}
                        <td className="p-3">Credits</td>
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
                        <td className="p-3 text-end">
                          {formatPrice2Digit(OilCost)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">test</td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end"></td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
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
                        <td className="p-3 text-end">
                          {formatPrice2Digit(PrivateGoCost)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(PrivateBackCost)}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalPrivateCost)}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("on_peak")} (4.52 บาท/kWh)</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(OnPeakGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(OnPeakBack)}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalOnPeak)}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("off_peak")}(2.99 บาท/kWh)</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(OffPeakGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(OffPeakBack)}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalOffPeak)}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
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
                        <td className="p-3 text-end">
                          {formatPrice2Digit(DifferencePrivateGo)}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(DifferencePrivateBack)}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(TotalDifferencePrivate)}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("on_peak_electricity")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(
                            DifferencePrivateOnPeakElectricityGo,
                          )}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(
                                DifferencePrivateOnPeakElectricityBack,
                              )}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(
                                TotalDifferencePrivateOnPeakElectricity,
                              )}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
                      </tr>
                      <tr>
                        <td className="p-3">• {t("off_peak_electricity")}</td>
                        <td className="p-3 text-end">
                          {formatPrice2Digit(
                            DifferencePrivateOffPeakElectricityGo,
                          )}
                        </td>
                        {roundTrip && (
                          <>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(
                                DifferencePrivateOffPeakElectricityBack,
                              )}
                            </td>
                            <td className="p-3">{t("baht")}</td>
                            <td className="p-3 text-end">
                              {formatPrice2Digit(
                                TotalDifferencePrivateOffPeakElectricity,
                              )}
                            </td>
                          </>
                        )}
                        <td className="p-3">{t("baht")}</td>
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
