import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/Banner-pavers-01.png"
              alt="Banner"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <section>
          <div className="relative w-full max-h-200 aspect-video grid place-items-center py-12">
            <Image
              src="/image/2-PRODUCTS-&-SERVICE-JGM-1.png"
              alt="Banner"
              fill
              className="object-cover"
            />
            <div className="mx-auto max-w-7xl px-4 z-10">
              <div className="grid text-center gap-4 md:gap-5">
                <span
                  className="font-semibold text-white text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl"
                >
                  WHEEL EXCAVATOR
                </span>
                <span
                  className="text-white text-xl sm:text-2xl 
                    md:text-3xl
                    lg:text-5xl"
                >
                  รถขุดล้อยางเอนกประสงค์ JGM
                </span>
                <span
                  className="text-[#ffc415] text-xl  
                    sm:text-3xl
                    md:text-4xl
                    lg:text-6xl"
                >
                  คล่องตัวสูง ทัศนวิสัยเยี่ยม ทำงานได้หลากหลายอีกทั้ง
                  ยังดูแลรักษาง่าย
                </span>
                <span
                  className="text-white text-base 
                    sm:text-xl
                    md:text-2xl
                    lg:text-4xl"
                >
                  ด้วยการนำเทคโนโลยี 3D มาใช้ในการออกแบบ และผ่านการทดสอบ
                  จำลองการทำงานหลากหลายหน้างาน
                  เพื่อรองรับการใช้งานอย่างมีประสิทธิภาพ
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center w-full max-w-7xl mx-auto p-7">
            <h1 className="text-4xl lg:text-7xl text-[#212529]">
              Highlight Functions
            </h1>
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/Component2_01.png"
              alt="Banner"
              fill
              className="object-contain"
            />
          </div>
        </section>
        <section>
          <div className=" flex items-center justify-center max-w-7xl mx-auto p-7">
            <div className="grid justify-center">
              <table className="w-full lg:w-100 max-w-4xl border border-gray-300 text-sm md:text-base">
                <tbody className="[&>tr:nth-child(odd)]:bg-gray-100 [&>tr:nth-child(even)]:bg-white text-black">
                  <tr>
                    <td className=" px-6 py-4 font-semibold">
                      กำลังเครื่องยนต์ (แรงม้า)
                    </td>
                    <td className="px-6 py-4">75</td>
                  </tr>
                  <tr className="border-y border-gray-300">
                    <td className=" px-6 py-4 font-semibold">
                      น้ำหนักปฏิบัติงาน (กก.)
                    </td>
                    <td className="px-6 py-4">7,500</td>
                  </tr>
                  <tr className="border-y border-gray-300">
                    <td className=" px-6 py-4 font-semibold">
                      ความจุบุ้งกี๋ (ลบ.ม.)
                    </td>
                    <td className="px-6 py-4">0.3</td>
                  </tr>
                  <tr className="border-y border-gray-300">
                    <td className="px-6 py-4 font-semibold">
                      ความกว้างปากคีบ (มม.)
                    </td>
                    <td className="px-6 py-4">1,360</td>
                  </tr>
                  <tr className="border-y border-gray-300">
                    <td className="px-6 py-4 font-semibold">
                      ระยะยกสูงสุด (ม.)
                    </td>
                    <td className="px-6 py-4">7,600</td>
                  </tr>
                  <tr className="border-y border-gray-300">
                    <td className="px-6 py-4 font-semibold">
                      น้ำหนักยกสูงสุด (กก.)
                    </td>
                    <td className="px-6 py-4">1,200</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between px-2 py-4">
                <div className="group">
                  <button
                    className=" flex items-center justify-center h-12 px-10 rounded-full shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
                    text-white bg-[#0091D2] transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  >
                    <div className="flex space-x-2">
                      <i className="bi bi-search"></i>
                      <span className="">JGM9085LNZ-9G</span>
                    </div>
                  </button>
                </div>
                <div className="group">
                  <button
                    className="flex items-center justify-center h-12 px-10 rounded-full shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
                    text-[#0091D2] bg-white border border-[#0091D2] transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  >
                    <div className="flex space-x-2">
                      <i className="bi bi-download"></i> <div>ดาวน์โหลด</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex items-center justify-center max-w-7xl mx-auto p-6"></div>
        </section>
      </main>
    </div>
  );
}
