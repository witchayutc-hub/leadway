export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-blue-900 py-12">
        <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8 px-4 lg:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex flex-col px-3">
            <img
              src="https://leadway.co.th/assets/logo-footer.png"
              alt="logo"
              className="mb-4 max-w-90"
            />
            <p className="text-sm text-white">
              บริษัท ลีดเวย์ เฮฟวี แมชชีนเนอร์รี จำกัด
              เราพัฒนาศักยภาพอย่างรอบด้านเพื่อขยายกลุ่มผลิตภัณฑ์
              เครื่องจักรกลหนักให้มีความหลากหลาย โดยรักษาสมดุลระหว่างเทคโนโลยี
              ประสิทธิภาพ และความคุ้มค่า เพื่อตอบโจทย์ให้ครอบคลุมต่อทุกการใช้งาน
              ในการสร้างผลกำไรให้แก่ธุรกิจ
              อีกทั้งยังก้าวข้ามข้อจำกัดการใช้งานเครื่องจักรกลในรูปแบบเดิมๆ
              ในฐานะผู้จัดจำหน่ายเครื่องจักรกลหนักของประเทศไทย
            </p>
          </div>
          <div className="px-3 text-white">
            <span className="text-2xl">ติดตามข่าวสารและโปรโมชั่นจากเรา</span>

            <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white py-2.5 px-3 text-base text-gray-800  placeholder:text-gray-500"
              />
              <button className=" w-full sm:w-auto bg-[#f6af1f] text-[#212529] font-bold py-2.5 px-6">
                ส่ง
              </button>
            </div>
          </div>

          <div className="px-3 text-white">
            <span className="text-4xl text-white">ติดต่อ</span>
            <div className="grid gap-2">
              <h3 className="text-2xl text-[#f6af1f] pt-6">
                บริษัท ลีดเวย์ เฮฟวี่ แมชชีนเนอร์รี่ จำกัด
              </h3>
              <h3>
                เลขที่ 1/2 หมู่ที่ 2 ตำบลบางวัว อำเภอบางปะกง จังหวัดฉะเชิงเทรา
                24130
              </h3>
              <h3>info@leadway.co.th</h3>
              <h3 className="text-2xl text-[#f6af1f]">Call Center 1462</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto px-3 py-2
                  flex items-center justify-center sm:justify-end"
      >
        <p className="text-[#212529] text-sm sm:text-base text-center sm:text-right">
          Copyright 2022 All right reserved Leadway Heavy Machinery co., ltd.
        </p>
      </div>
    </footer>
  );
}
