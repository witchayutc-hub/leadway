"use client";
type MoreButtonProps = {
  onClick: () => void;
};
export default function MoreButton({ onClick }: MoreButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-11 px-10 rounded-full shadow-xl/20 text-white bg-[#0048A1] cursor-pointer"
      onClick={onClick}
    >
      ดูเพิ่มเติม
    </button>
  );
}
