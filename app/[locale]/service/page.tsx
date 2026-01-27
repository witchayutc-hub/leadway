"use client";
import Icon from "@/components/icon";

export default function Page() {
  const services = [
    {
      title: "บริการทางด้านการเงิน",
      description:
        "บริษัทให้บริการคำปรึกษาและสินเชื่อลีสซิ่งผ่านสถาบันการเงินชั้นนำ ทำให้ลูกค้าสามารถใช้เครื่องจักรกลหนักได้อย่างสะดวก โดยมีเงื่อนไขการเช่าซื้อที่เหมาะสมกับกระแสเงินสดและการชำระที่ยืดหยุ่น.",
      Icon: <Icon name="building" size={64} fill="#0D6EFD" />,
    },
    {
      title: "บริการหลังการขาย",
      description:
        "มุ่งเน้นการพัฒนาทีมวิศวกรและช่างผู้เชี่ยวชาญ ด้วยการฝึกอบรม, การซ่อมบำรุง, การวิเคราะห์ปัญหา, และตรวจเช็คการใช้งาน เพื่อให้คำแนะนำและบริการหลังการขายที่มีคุณภาพ.",
      Icon: <Icon name="hand" size={64} fill="#0D6EFD" />,
    },
    {
      title: "บริการด้านอะไหล่",
      description:
        "ให้บริการอะไหล่แท้ที่ได้รับการรับรองจากผู้ผลิตอย่างเป็นทางการ, เพื่อความยึดถือในคุณภาพและความเชื่อมั่นในการขับเคลื่อนระบบงาน.",
      Icon: <Icon name="gear" size={64} fill="#0D6EFD" />,
    },
    {
      title: "ศูนย์ลูกค้าสัมพันธ์",
      description:
        "บริการข้อมูลเครื่องจักรเบื้องต้น, แนะนำที่ปรึกษาการขาย, แจ้งรายละเอียดโปรโมชั่น, และสิทธิประโยชน์ที่ดีที่สุดสำหรับลูกค้า.",
      Icon: <Icon name="userservice" size={64} fill="#0D6EFD" />,
    },
    {
      title: "บริการช่วยเหลือเร่งด่วน",
      description:
        "LEADWAY MOBILE SERVICE ที่มีทีมช่างผู้ชำนาญการพร้อมให้บริการด่วนที่สถานที่.",
      Icon: <Icon name="fireservice" size={64} fill="#0D6EFD" />,
    },
    {
      title: "ศูนย์บริการ ลีดเวย์ 15 สาขาทั่วไทย",
      description:
        "มีศูนย์บริการทั่วประเทศ 15 สาขาเพื่อความอุ่นใจและความสะดวกในการติดต่อ, มีทีมงานและผู้เชี่ยวชาญที่ให้บริการและช่วยเหลือด้วยเครื่องมือทันสมัย.",
      Icon: <Icon name="mapservice" size={64} fill="#0D6EFD" />,
    },
  ];

  const serviceChecks = [
    "การวัดประสิทธิภาพการทำงานเครื่องจักร",
    "การทดสอบแรงดันต่ำน้ำมันเชื้อเพลิง",
    "การทดสอบตัดการจ่ายน้ำมันที่หัวฉีดเครื่องยนต์",
    "การตรวจสภาพระบบเครื่องยนต์",
    "การตรวจสภาพระบบไฟฟ้า",
    "การตรวจสภาพระบบตัวเดิน",
    "การตรวจสภาพระบบไฮดรอลิก",
    "การทดสอบแรงอัดในกระบอกสูบ",
  ];

  const gallery = {
    galleryGrid1: [
      "/image/0403-min.jpg",
      "/image/0923_0-min.jpg",
      "/image/0462_0-min.jpg",
      "/image/0403-min.jpg",
    ],
    galleryGrid2: [
      "/image/0590_0-min.jpg",
      "/image/0653_0-min.jpg",
      "/image/0513_0-min.jpg",
      "/image/0749_0-min.jpg",
    ],
    galleryGrid3: [
      "/image/0659_0-min.jpg",
      "/image/0672_0-min.jpg",
      "/image/0813_0-min.jpg",
      "/image/0762_0-min.jpg",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="flex justify-center items-center w-full px-3 py-12 max-w-7xl mx-auto">
            <h1
              className="text-3xl font-semibold text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              บริการของเรา
            </h1>
          </div>
        </section>
        <section>
          <div
            className="grid grid-cols-1 gap-x-12 gap-y-8 max-w-7xl mx-auto
              sm:grid-cols-2
              lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group w-full text-center cursor-pointer"
              >
                <div
                  className="flex justify-center p-5 transition-transform duration-300 ease-out
                    group-hover:-translate-y-2"
                >
                  {service.Icon}
                </div>
                <div className="grid">
                  <h3 className="text-2xl py-3 text-[#052465] group-hover:text-[#ffab00]">
                    {service.title}
                  </h3>
                  <p className="p-3 text-black">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center w-full px-3 py-12 mt-12 max-w-7xl mx-auto">
            <h1
              className="text-center text-3xl text-[#052465]
                sm:text-4xl
                lg:text-[40px]"
            >
              บริการตรวจสภาพและซ่อมบำรุงเครื่องจักร
            </h1>
          </div>
        </section>
        <section>
          <div className="flex justify-center w-full px-3 py-12 max-w-7xl mx-auto">
            <div
              className="grid grid-cols-1 gap-y-3 gap-x-2 p-3 w-full
                sm:grid-cols-2
                lg:grid-cols-3"
            >
              {serviceChecks.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full cursor-pointer text-black hover:text-[#ffab00]"
                >
                  <Icon name="check" size={16} fill="#000000" />
                  <span className="flex-1 ml-3 text-left">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center w-full px-3 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {Object.values(gallery).map((column, index) => (
                <div key={index} className="grid gap-4">
                  {column.map((src, image) => (
                    <img
                      key={image}
                      src={src}
                      alt="gallery-photo"
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
