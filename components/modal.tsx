"use client";

export default function Modal({
  image,
  onClose,
}: {
  image: string | null;
  onClose: () => void;
}) {
  const isOpen = Boolean(image);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/60 transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          transform transition-all duration-300 ease-out
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        {image && (
          <img
            src={image}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
          />
        )}
      </div>
    </div>
  );
}
