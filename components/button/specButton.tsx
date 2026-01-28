import { downloadFile } from "@/helpers/download";
import { Link } from "@/navigation";

type SpecButton = {
  id: number;
  label: string;
  variant: "primary" | "outline";
  colorClass: string;
  href: string;
  download?: boolean;
};

export default function SpecButtons({ buttons }: { buttons: SpecButton[] }) {
  return (
    <div className="flex flex-wrap justify-center py-4 gap-4">
      {buttons.map((button) => (
        <div key={button.id} className="group">
          {button.download ? (
            <button
              onClick={() => downloadFile(button.href)}
              className={`flex items-center justify-center h-12 px-8 rounded-full shadow-md cursor-pointer
              transition-transform duration-300 ease-out group-hover:-translate-y-1
              bg-white border border-current ${button.colorClass}`}
            >
              <div className="flex space-x-1 w-full">
                <i className="bi bi-download"></i>
                <span className="truncate">{button.label}</span>
              </div>
            </button>
          ) : (
            <Link href={button.href}>
              <button
                className={`flex items-center justify-center h-12 px-8 rounded-full shadow-md cursor-pointer
                transition-transform duration-300 ease-out group-hover:-translate-y-1
                text-white ${button.colorClass}`}
              >
                <div className="flex space-x-2 w-full">
                  <i className="bi bi-search"></i>
                  <span className="truncate">{button.label}</span>
                </div>
              </button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
