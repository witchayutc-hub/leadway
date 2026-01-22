import Link from "next/link";

type SpecButton = {
  id: number;
  label: string;
  variant: "primary" | "outline";
  colorClass: string;
  href: string;
};

export default function SpecButtons({ buttons }: { buttons: SpecButton[] }) {
  return (
    <div className="flex flex-wrap justify-center py-4 gap-4">
      {buttons.map((button) => (
        <div key={button.id} className="group">
          <Link href={button.href}>
            <button
              className={`flex items-center justify-center h-12 px-10 rounded-full shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
              transition-transform duration-300 ease-out group-hover:-translate-y-1
              ${
                button.variant === "primary"
                  ? `text-white ${button.colorClass}`
                  : `bg-white border border-current ${button.colorClass}`
              }
            `}
            >
              <div className="flex space-x-2 max-w-25">
                <i
                  className={`${button.variant === "primary" ? "bi bi-search" : "bi bi bi-download"}`}
                ></i>
                <span className="truncate">{button.label}</span>
              </div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
