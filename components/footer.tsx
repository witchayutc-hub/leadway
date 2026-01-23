import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="relative w-full h-full overflow-hidden py-12">
        <Image
          src="/image/footer.jpg"
          fill
          alt="footer"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          className="relative z-10 grid max-w-7xl mx-auto grid-cols-1 gap-8 px-4 mb-12 pb-12
            sm:px-6
            lg:grid-cols-3 lg:px-8"
        >
          <div className="flex flex-col px-3">
            <div className="relative max-w-90 h-20 mb-4">
              <Image
                src="/image/logo-footer.png"
                fill
                alt="logo"
                className="object-contain"
              />
            </div>
            <p className="text-white">
              บริษัท ลีดเวย์ เฮฟวี แมชชีนเนอร์รี จำกัด
              เราพัฒนาศักยภาพอย่างรอบด้านเพื่อขยายกลุ่มผลิตภัณฑ์
              เครื่องจักรกลหนักให้มีความหลากหลาย โดยรักษาสมดุลระหว่างเทคโนโลยี
              ประสิทธิภาพ และความคุ้มค่า เพื่อตอบโจทย์ให้ครอบคลุมต่อทุกการใช้งาน
              ในการสร้างผลกำไรให้แก่ธุรกิจ
              อีกทั้งยังก้าวข้ามข้อจำกัดการใช้งานเครื่องจักรกลในรูปแบบเดิมๆ
              ในฐานะผู้จัดจำหน่ายเครื่องจักรกลหนักของประเทศไทย
            </p>
            <div className="flex flex-wrap justify-center gap-5 mt-4">
              <Link href="tel:1462">
                <Icon
                  name="call"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
              <Link href="mailto:info@leadway.co.th">
                <Icon
                  name="email"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
              <Link href="https://www.youtube.com/@leadwayheavy">
                <Icon
                  name="youtube"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
              <Link href="https://maps.app.goo.gl/693NrYTK4ZmFqJ7r6">
                <Icon
                  name="pin"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
              <Link href="https://lin.ee/tGNi6f0">
                <Icon
                  name="line"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
              <Link href="https://www.facebook.com/leadwayheavy">
                <Icon
                  name="facebook"
                  size={28}
                  className="rounded-full bg-[#ecb51d]"
                  fill="#003C8C"
                />
              </Link>
            </div>
          </div>
          <div className="px-3 text-white">
            <span className="text-2xl">ติดตามข่าวสารและโปรโมชั่นจากเรา</span>
            <div
              className="flex flex-col gap-3 py-4 
                sm:flex-row sm:items-center sm:gap-4"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2.5 px-3 text-base bg-white text-gray-800 placeholder:text-gray-500"
              />
              <button
                className=" w-full font-bold py-2.5 px-6 bg-[#f6af1f] text-[#212529]
                  sm:w-auto"
              >
                ส่ง
              </button>
            </div>
          </div>
          <div className="text-white">
            <span className="text-4xl text-white">ติดต่อ</span>
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold pt-6 text-[#ecb51d]">
                บริษัท ลีดเวย์ เฮฟวี่ แมชชีนเนอร์รี่ จำกัด
              </h3>
              <div className="flex items-center gap-2">
                <Icon name="home" size={28} />
                <h3 className="text-[14px] ">
                  เลขที่ 1/2 หมู่ที่ 2 ตำบลบางวัว อำเภอบางปะกง จังหวัดฉะเชิงเทรา
                  24130
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="email" size={28} />
                <h3 className="text-[14px] hover:underline">
                  <Link href="mailto:info@leadway.co.th">
                    info@leadway.co.th
                  </Link>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="contact" size={28} />
                <Link href="tel:1462">
                  <h3 className="text-3xl font-semibold hover:underline text-[#ecb51d]">
                    Call Center 1462
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white z-10">
        <div
          className=" flex items-center justify-center max-w-7xl mx-auto px-3 py-2 
          sm:justify-end"
        >
          <p
            className="text-center text-sm text-[#212529]
            sm:text-base sm:text-right"
          >
            Copyright 2022 All right reserved Leadway Heavy Machinery co., ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
