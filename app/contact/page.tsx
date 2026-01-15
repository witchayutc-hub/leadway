export default function Page() {
  const images = Array.from({ length: 6 });

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="h-6"></div>
        <section>
          <div className="flex items-center justify-center">
            <img
              src="https://leadway.co.th/contact/assets/Banner/1.png"
              alt="Banner"
              className="w-full h-auto"
            />
          </div>
        </section>
        <section className="h-161.25 bg-gray-100">
          <div className="flex justify-center items-center h-11.25 bg-[#0045A4]">
            <h2 className="text-xl sm:text-3xl">สำนักงานใหญ่</h2>
          </div>
        </section>
        <section>
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2">
              <div className="flex flex-col text-center md:text-left">
                <span
                  className="text-3xl text-[#003C8C]
                    sm:text-6xl 
                    lg:text-8xl"
                >
                  LEADWAY
                </span>
                <span
                  className="text-lg  text-black
                    sm:text-2xl
                    lg:text-3xl"
                >
                  บริการครอบคลุม
                </span>
                <span
                  className="text-lg  text-black 
                    sm:text-2xl
                    lg:text-3xl"
                >
                  ทั่วประเทศ
                </span>
              </div>
              <div className="text-center md:text-right">
                <span
                  className="text-3xl text-[#C88619]
                    sm:text-6xl
                    lg:text-8xl"
                >
                  SERVICE
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="p-3 bg-[#4189DB] sm:p-12">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="grid grid-cols-2 items-center gap-6
                sm:grid-cols-2
                md:grid-cols-3 
                lg:grid-cols-6"
            >
              {images.map((_, index) => (
                <img
                  key={index}
                  src="https://leadway.co.th/assets/logo-footer.png"
                  alt={`logo-${index}`}
                  className="w-full max-w-50 mx-auto object-contain"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
