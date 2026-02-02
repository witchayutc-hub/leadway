import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";

const series = [
  {
    label: "น้ำมัน",
    stack: "A",
    data: [100, null, null, null],
    color: "#ECB51D",
  },
  {
    label: "ไฟฟ้า",
    stack: "A",
    data: [null, 60, 40, 10],
    color: "#0B5DC1",
  },
  {
    label: "ส่วนต่างค่าใช่จ่ายน้ำมัน และชาร์จไฟ",
    stack: "A",
    data: [null, 40, 60, 90],
    color: "#86EFAC",
  },
];

const labels = ["น้ำมัน", "เอกชน", "กฟน/กฟภ On Peak", "กฟน/กฟภ Off Peak"];

export default function BarCharts() {
  return (
    <Box sx={{ width: "100%", overflow: "auto" }}>
      <BarChart
        layout="horizontal"
        height={300}
        yAxis={[
          {
            disableLine: true,
            disableTicks: true,
            data: labels,
            width: 200,
          },
        ]}
        series={series}
        slotProps={{ tooltip: { trigger: "item" } }}
      />
    </Box>
  );
}
