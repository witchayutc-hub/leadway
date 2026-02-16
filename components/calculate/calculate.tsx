export const Calculate = {
  // Weight
  weightTruck(payload: number, truck_weight: number, trailer_weight: number) {
    return payload + truck_weight + trailer_weight;
  },

  totalWeight(go: number, back: number) {
    return Number(go + back);
  },

  // Distance
  totalDistance(go: number, back: number) {
    return Number(go + back);
  },

  // Consumption
  consumptionOnRoad(slope: number, weight: number, intercept: number) {
    return slope * weight + intercept;
  },

  energyConsumptionRate(consumptionRate: number, distance: number) {
    return Number(consumptionRate * distance);
  },

  carbonFootprintReduction(distance: number) {
    return Number(distance * 0.3);
  },

  // Battery
  persenRemainingBattery(
    batteryCapacity: number,
    energyConsumptionRate: number,
  ) {
    if (energyConsumptionRate === 0) return 100;
    return 100 - Number((energyConsumptionRate / batteryCapacity) * 100);
  },

  remainingBatterykW(batteryCapacity: number, persenRemainingBattery: number) {
    return Number((batteryCapacity * persenRemainingBattery) / 100);
  },

  // Electricity
  privateCost(energyConsumptionRate: number) {
    return Number(energyConsumptionRate * 7.5);
  },

  onPeakCost(energyConsumptionRate: number) {
    return Number(energyConsumptionRate * 4.52);
  },

  offPeakCost(energyConsumptionRate: number) {
    return Number(energyConsumptionRate * 2.99);
  },

  // Oil
  OilCost(
    fuelConsumption: number,
    fuelPricePerLiter: number,
    distance: number,
  ) {
    return Number((fuelPricePerLiter / fuelConsumption) * distance);
  },

  // Difference between Oil and Electricity cost
  differencePrivate(oilCost: number, Private: number) {
    return Number(oilCost - Private);
  },

  differencePrivateOnPeakElectricity(oilCost: number, OnPea: number) {
    return Number(oilCost - OnPea);
  },

  differencePrivateOffPeakElectricity(oilCost: number, OffPeak: number) {
    return Number(oilCost - OffPeak);
  },
};
