// อัตราการใช้พลังงาน | Energy Consumption
export default function EnergyConsumption(
  payload: number,
  truck_weight: number,
  distance: number,
) {
  return (0.0553 * payload + truck_weight + 0.0206) * distance;
}
