export default function Bounce() {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 cursor-pointer animate-[bounce_2s_infinite] 
        sm:bottom-6 sm:right-6
        lg:bottom-10 lg:right-10"
    >
      <div
        className="relative flex items-center justify-center w-14 h-14
          sm:w-16 sm:h-16
          lg:w-20 lg:h-20"
      >
        <img
          src="https://leadway.co.th/assets/icons/chat.svg"
          alt="icon"
          className="w-full h-full"
        />
        <span
          className="absolute mb-2 text-xs font-medium pointer-events-none text-white
            sm:text-sm"
        >
          ติดต่อ
        </span>
      </div>
    </div>
  );
}
