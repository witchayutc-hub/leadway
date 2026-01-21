import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = Array.from({ length: 6 });

  const regions = [
    {
      id: 1,
      name: "ภาคเหนือ",
      color: "#8FAB29",
      branches: [
        {
          id: 1,
          name: "สาขานครสวรรค์",
          address:
            "เลขที่ 88 หมู่ที่ 7 ตำบลหนองกรด อำเภอเมือง จังหวัดนครสวรรค์ 60000",
          tel: "056 053 858",
          href: "https://maps.app.goo.gl/BRXj1GuiT4YD5usH9",
        },
        {
          id: 2,
          name: "สาขาลำปาง",
          address:
            "83 หมู่ที่ 4 ถนนการไฟฟ้าฝ่ายผลิตแห่งประเทศไทย ตำบลพระบาท อำเภอเมืองลำปาง จังหวัดลำปาง 52220",
          tel: "054 209 253",
          href: "https://maps.app.goo.gl/mdvoSvmqQJ1ddHPx6",
        },
        {
          id: 3,
          name: "สาขาเชียงใหม่",
          address:
            "เลขที่ 533 หมู่ที่ 6 ตำบลสันทรายน้อย อำเภอสันทราย จังหวัดเชียงใหม่ 50210",
          tel: "053 492721-3",
          href: "https://maps.app.goo.gl/eMvf6W81vQhow97B6",
        },
      ],
    },
    {
      id: 2,
      name: "ภาคตะวันออกเฉียงเหนือ",
      color: "#F4701E",
      branches: [
        {
          id: 1,
          name: "สาขานครราชสีมา",
          address:
            "เลขที่ 486 หมู่ที่ 6 ตำบลโคกกรวด อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา 30280",
          tel: "044 305 486",
          href: "https://maps.app.goo.gl/EgQa5PcyS8rjwi6e6",
        },
        {
          id: 2,
          name: "สาขาขอนแก่น",
          address:
            "เลขที่ 555/17 หมู่ที่ 1 ตำบลสำราญ อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000",
          tel: "043042042",
          href: "https://maps.app.goo.gl/dd2ZT6WT9QfKrKfv7",
        },
        {
          id: 3,
          name: "สาขาอุบลราชธานี",
          address:
            "เลขที่ 231 หมู่ที่ 16 ตำบลไร่น้อย อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี 34000",
          tel: "045 210 528",
          href: "https://maps.app.goo.gl/5aRWRy897Rig75Mv5",
        },
        {
          id: 4,
          name: "สาขาอุดรธานี",
          address:
            "เลขที่ 346 หมู่ที่ 6 ตำบลกุดสระ อำเภอเมืองอุดรธานี จังหวัดอุดรธานี 41000",
          tel: "042 241 573",
          href: "https://maps.app.goo.gl/JfoS9XMcj8Dew9o77",
        },
      ],
    },
    {
      id: 3,
      name: "ภาคกลาง",
      color: "#0063B0",
      branches: [
        {
          id: 1,
          name: "สาขาราชบุรี",
          address:
            "เลขที่ 99/10, 99/11 หมู่ที่ 9 ตำบลดอนทราย อำเภอโพธาราม จังหวัดราชบุรี 70120",
          tel: "094 490 0376",
          href: "https://maps.app.goo.gl/iZt5Hso5p6ocv21M8",
        },
        {
          id: 2,
          name: "สาขาจันทบุรี",
          address:
            "เลขที่ 257/6 หมู่ที่ 3 ตำบลทุ่งเบญจา อำเภอท่าใหม่ จังหวัดจันทบุรี 22170",
          tel: "039 480 377",
          href: "https://maps.app.goo.gl/QMoh5Lu5F7V9cUbi8",
        },
        {
          id: 3,
          name: "สาขาประจวบคีรีขันธ์",
          address:
            "เลขที่ 686/2, 686/3 หมู่ที่ 2 ตำบลไร่ใหม่ อำเภอสามร้อยยอด จังหวัดประจวบคีรีขันธ์ 77180",
          tel: "032 510 848",
          href: "https://maps.app.goo.gl/9VRufEhq5J5LBdcWA",
        },
      ],
    },
    {
      id: 4,
      name: "ภาคใต้",
      color: "#149A98",
      branches: [
        {
          id: 1,
          name: "สาขาชุมพร",
          address:
            "เลขที่ 65/3 หมู่ที่ 6 ตำบลทุ่งคา อำเภอชุมพร จังหวัดชุมพร 86100",
          tel: "077 510 886",
          href: "https://maps.app.goo.gl/VXMqw2fJyKz6ow8P6",
        },
        {
          id: 2,
          name: "สาขาสุราษฎร์ธานี",
          address:
            "เลขที่ 50/11 หมู่ที่ 1 ตำบลหัวเตย อำเภอพุนพิน จังหวัดสุราษฎร์ธานี 84130",
          tel: "077 310 206",
          href: "https://maps.app.goo.gl/2cWLe6Xoc6kqGnP76",
        },
        {
          id: 3,
          name: "สาขาทุ่งสง",
          address:
            "เลขที่ 58/4 หมู่ที่ 7 ตำบลที่วัง อำเภอทุ่งสง จังหวัดนครศรีธรรมราช 80110",
          tel: "075 466 278",
          href: "https://maps.app.goo.gl/h9LrnKk4TW3AW6pn6",
        },
        {
          id: 4,
          name: "สาขาพังงา",
          address:
            "เลขที่ 112, 112/6 หมู่ที่ 3 ตำบลถ้ำน้ำผุด อำเภอเมืองพังงา จังหวัดพังงา 82000",
          tel: "076 678 001",
          href: "https://maps.app.goo.gl/ATaVNasfyB7B6PAq9",
        },
      ],
    },
  ];

  const locations = [
    {
      id: 1,
      img: "/image/contact-03.png",
      className: "left-[15%] top-[7%]",
      href: "https://maps.app.goo.gl/eMvf6W81vQhow97B6",
    },
    {
      id: 2,
      img: "/image/contact-03.png",
      className: "left-[23.5%] top-[11%]",
      href: "https://maps.app.goo.gl/mdvoSvmqQJ1ddHPx6",
    },
    {
      id: 3,
      img: "/image/contact-03.png",
      className: "left-[65%] top-[16.5%]",
      href: "https://maps.app.goo.gl/JfoS9XMcj8Dew9o77",
    },
    {
      id: 4,
      img: "/image/contact-03.png",
      className: "left-[63%] top-[22.25%]",
      href: "https://maps.app.goo.gl/VbxohcAXiaRKQXnk8",
    },
    {
      id: 5,
      img: "/image/contact-03.png",
      className: "left-[89%] top-[32.25%]",
      href: "https://maps.app.goo.gl/5aRWRy897Rig75Mv5",
    },
    {
      id: 6,
      img: "/image/contact-03.png",
      className: "left-[55%] top-[33.25%]",
      href: "https://maps.app.goo.gl/EgQa5PcyS8rjwi6e6",
    },
    {
      id: 7,
      img: "/image/contact-03.png",
      className: "left-[34%] top-[28.5%]",
      href: "https://maps.app.goo.gl/BRXj1GuiT4YD5usH9",
    },
    {
      id: 8,
      img: "/image/contact-03.png",
      className: "left-[24%] top-[43%]",
      href: "https://maps.app.goo.gl/iZt5Hso5p6ocv21M8",
    },
    {
      id: 9,
      img: "/image/contact-02.png",
      className: "left-[44%] top-[40%]",
      href: "https://maps.app.goo.gl/693NrYTK4ZmFqJ7r6",
      main: true,
    },
    {
      id: 10,
      img: "/image/contact-03.png",
      className: "left-[55%] top-[47%]",
      href: "https://maps.app.goo.gl/QMoh5Lu5F7V9cUbi8",
    },
    {
      id: 11,
      img: "/image/contact-03.png",
      className: "left-[27%] top-[50.5%]",
      href: "https://maps.app.goo.gl/9VRufEhq5J5LBdcWA",
    },
    {
      id: 12,
      img: "/image/contact-03.png",
      className: "left-[19%] top-[67%]",
      href: "https://maps.app.goo.gl/VXMqw2fJyKz6ow8P6",
    },
    {
      id: 13,
      img: "/image/contact-03.png",
      className: "left-[17.5%] top-[72.75%]",
      href: "https://maps.app.goo.gl/2cWLe6Xoc6kqGnP76",
    },
    {
      id: 14,
      img: "/image/contact-03.png",
      className: "left-[11%] top-[76.5%]",
      href: "https://maps.app.goo.gl/ATaVNasfyB7B6PAq9",
    },
    {
      id: 15,
      img: "/image/contact-03.png",
      className: "left-[25.5%] top-[78%]",
      href: "https://maps.app.goo.gl/h9LrnKk4TW3AW6pn6",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div className="relative w-full aspect-video">
            <Image
              src="/image/assets-1.png"
              alt="assets"
              fill
              className="object-cover"
            />
          </div>
        </section>
        <div className="flex justify-center items-center h-11.25 bg-[#0045A4]">
          <h2 className="text-xl sm:text-3xl">สำนักงานใหญ่</h2>
        </div>
        <section className="relative w-full h-full overflow-hidden">
          <Image
            src="/image/bg.png"
            fill
            alt="Background Map"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div
            className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-4 py-12 gap-8 
               lg:flex-row"
          >
            <div className="w-full h-75 lg:h-112.5">
              <iframe
                className="w-full h-full"
                loading="lazy"
                src="https://www.google.com/maps?q=13.54858,100.958625&hl=th&z=16&output=embed"
              ></iframe>
            </div>
            <div className="flex w-full justify-center lg:justify-start">
              <div className="flex flex-col gap-3 px-3 max-w-xl">
                <img
                  src="/image/1462.png"
                  alt="Banner"
                  className="max-w-60 mx-auto object-contain 
                    sm:max-w-120 
                    lg:mx-0"
                />
                <h2 className="text-2xl sm:text-4xl text-[#003C8C]">
                  สำนักงานใหญ่
                </h2>
                <h3 className="text-xl sm:text-3xl text-[#C88619]">
                  บริษัท ลีดเวย์ เฮฟวี่ แมชชีนเนอร์รี่ จำกัด
                </h3>
                <div className="flex gap-2">
                  <Icon name="city" size={32} fill="#7e7e7d" />
                  <span className="text-base sm:text-xl text-[#808080]">
                    เลขที่ 1/2 หมู่ที่ 2 ตำบลบางวัว อำเภอบางปะกง
                    จังหวัดฉะเชิงเทรา 24130
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 mt-2">
                  <Link href="tel:0380867319">
                    <div className="flex gap-2">
                      <Icon name="call" size={32} fill="#7e7e7d" />
                      <span className="text-lg lg:text-xl text-[#808080]">
                        038 086 731-9
                      </span>
                    </div>
                  </Link>
                  <Link href="https://maps.app.goo.gl/693NrYTK4ZmFqJ7r6">
                    <img
                      src="https://leadway.co.th/contact/assets/Group%20514.png"
                      alt="Banner"
                      className="max-w-30 sm:max-w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto p-3">
            <div
              className="grid grid-cols-1 gap-8 p-5 
                md:grid-cols-2"
            >
              <div
                className="flex flex-col text-center 
                  md:text-left"
              >
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
              <div className="text-center">
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
        <section>
          <div className="flex w-full justify-center items-center max-w-7xl mx-auto">
            <div className="grid grid-cols-12 p-3 gap-3 w-full">
              <div className="relative w-full col-span-12 lg:col-span-7 aspect-video">
                <img
                  src="/image/contact-04.png"
                  alt="map"
                  className="w-full xl:w-auto h-auto object-fill"
                />
                {locations.map((location) => (
                  <Link key={location.id} href={location.href}>
                    <img
                      src={location.img}
                      alt={`location${location.id}`}
                      className={`absolute ${location.main ? "w-[10%]" : "w-[7%]"} ${location.className}
                    transition-transform duration-300 ease-out hover:scale-120 hover:opacity-75 cursor-pointer`}
                    />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-6 col-span-12 lg:col-span-5">
                {regions.map((region) => (
                  <div key={region.id} className="flex flex-col">
                    <div
                      className="flex justify-center items-center h-9 mb-6"
                      style={{ backgroundColor: region.color }}
                    >
                      <span className="text-xl lg:text-2xl text-white">
                        {region.name}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      {region.branches.map((branch) => (
                        <div key={branch.id} className="flex flex-col gap-1">
                          <span
                            className="text-lg lg:text-xl hover:underline"
                            style={{ color: region.color }}
                          >
                            {branch.href ? (
                              <Link href={branch.href}>{branch.name}</Link>
                            ) : (
                              branch.name
                            )}
                          </span>
                          <span className="text-sm lg:text-base text-[#808080]">
                            {branch.address}
                          </span>
                          <div className="flex gap-2 ">
                            <Icon name="call" fill="#7e7e7d" />
                            <span className="text-sm lg:text-base text-[#808080] hover:text-black">
                              <Link href={`tel:${branch.tel}`}>
                                {branch.tel}
                              </Link>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
                  src="image/logo-footer.png"
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
