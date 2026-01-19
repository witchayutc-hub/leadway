"use client";
import Icon from "@/components/icon";

export default function Page() {
  const services = [
    {
      title: "บริการทางด้านการเงิน",
      description:
        "บริษัทให้บริการคำปรึกษาและสินเชื่อลีสซิ่งผ่านสถาบันการเงินชั้นนำ ทำให้ลูกค้าสามารถใช้เครื่องจักรกลหนักได้อย่างสะดวก โดยมีเงื่อนไขการเช่าซื้อที่เหมาะสมกับกระแสเงินสดและการชำระที่ยืดหยุ่น.",
    },
    {
      title: "บริการหลังการขาย",
      description:
        "มุ่งเน้นการพัฒนาทีมวิศวกรและช่างผู้เชี่ยวชาญ ด้วยการฝึกอบรม, การซ่อมบำรุง, การวิเคราะห์ปัญหา, และตรวจเช็คการใช้งาน เพื่อให้คำแนะนำและบริการหลังการขายที่มีคุณภาพ.",
    },
    {
      title: "บริการด้านอะไหล่",
      description:
        "ให้บริการอะไหล่แท้ที่ได้รับการรับรองจากผู้ผลิตอย่างเป็นทางการ, เพื่อความยึดถือในคุณภาพและความเชื่อมั่นในการขับเคลื่อนระบบงาน.",
    },
    {
      title: "ศูนย์ลูกค้าสัมพันธ์",
      description:
        "บริการข้อมูลเครื่องจักรเบื้องต้น, แนะนำที่ปรึกษาการขาย, แจ้งรายละเอียดโปรโมชั่น, และสิทธิประโยชน์ที่ดีที่สุดสำหรับลูกค้า.",
    },
    {
      title: "บริการช่วยเหลือเร่งด่วน",
      description:
        "LEADWAY MOBILE SERVICE ที่มีทีมช่างผู้ชำนาญการพร้อมให้บริการด่วนที่สถานที่.",
    },
    {
      title: "ศูนย์บริการ ลีดเวย์ 15 สาขาทั่วไทย",
      description:
        "มีศูนย์บริการทั่วประเทศ 15 สาขาเพื่อความอุ่นใจและความสะดวกในการติดต่อ, มีทีมงานและผู้เชี่ยวชาญที่ให้บริการและช่วยเหลือด้วยเครื่องมือทันสมัย.",
    },
  ];

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="grid w-full text-center gap-2">
                <div className="flex justify-center md:col-span-3">
                  <Icon name="building" size={64} fill="#0D6EFD" />
                </div>
                <div>
                  <h3 className="text-[#052465] text-2xl">{service.title}</h3>
                  <p className="text-black">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
