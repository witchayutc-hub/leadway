import { Link } from "@/navigation";

export default function Brand() {
  const brands = [
    {
      id: 1,
      name: "Sumitomo",
      src: "/image/logo SUMITOMO-03.jpg",
      href: "/sumitomo",
    },
    {
      id: 2,
      name: "Sany",
      src: "/image/logo SANY-04.jpg",
      href: "/sany",
    },
    {
      id: 3,
      name: "Metso",
      src: "/image/logo Metso-05.jpg",
      href: "/metso",
    },
    {
      id: 4,
      name: "JGM",
      src: "/image/logo JGM-07.jpg",
      href: "/jgm",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="w-1/2 p-1.25
          sm:w-1/3
          md:w-1/5"
        >
          <Link href={brand.href} className="w-full h-full">
            <img
              src={brand.src}
              alt={brand.name}
              className="w-full h-auto border-2 object-contain border-[#ccc]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
