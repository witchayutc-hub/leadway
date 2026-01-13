import Link from "next/link";

export default function Brand() {
  const brands = [
    {
      id: 1,
      name: "Sumitomo",
      src: "https://leadway.co.th/assets/logo/logo%20SUMITOMO-03.jpg",
    },
    {
      id: 2,
      name: "Sany",
      src: "https://leadway.co.th/assets/logo/logo%20SANY-04.jpg",
    },
    {
      id: 3,
      name: "Metso",
      src: "https://leadway.co.th/assets/logo/logo%20Metso-05.jpg",
    },
    {
      id: 4,
      name: "JGM",
      src: "https://leadway.co.th/assets/logo/logo%20JGM-07.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {brands.map((brand) => (
        <div key={brand.id} className="w-1/2 sm:w-1/3 lg:w-1/5 p-2">
          <img
            src={brand.src}
            alt={brand.name}
            className="w-full h-auto border-2 border-[#ccc] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
