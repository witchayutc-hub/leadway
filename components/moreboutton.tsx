"use client";
type MoreButtonProps = {
  onClick: () => void;
  onDisabled?: boolean;
};
export default function MoreButton({ onClick, onDisabled }: MoreButtonProps) {
  return (
    <button
      className="flex items-center justify-center h-11 px-10 rounded-full shadow-xl/20 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
      text-white bg-[#0048A1] hover:bg-[#0b5dc1]"
      disabled={onDisabled}
      onClick={onClick}
    >
      ดูเพิ่มเติม
    </button>
  );
}
