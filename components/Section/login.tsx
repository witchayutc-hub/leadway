"use client";

import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Login({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const t = useTranslations("Login");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let error = false;

    // if (!name.trim()) {
    //   setErrorName(t("name_error"));
    //   error = true;
    // } else {
    //   setErrorName("");
    // }

    // if (!phone.trim()) {
    //   setErrorPhone(t("phone_error"));
    //   error = true;
    // } else if (!/^0\d{9}$/.test(phone)) {
    //   setErrorPhone(t("invalid"));
    //   error = true;
    // } else {
    //   setErrorPhone("");
    // }

    // if (!email.trim()) {
    //   setErrorEmail(t("email_error"));
    //   error = true;
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //   setErrorEmail(t("invalid"));
    //   error = true;
    // } else {
    //   setErrorEmail("");
    // }

    if (error) return;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/60 ">
      <div className="w-sm md:w-md lg:w-lg h-auto px-6 py-10 rounded-lg bg-white">
        <img
          src="/image/Logo.png"
          alt="Logo"
          className="mx-auto h-10 lg:h-14 w-auto object-cover"
        />
        <div className="py-3 text-center">
          <span className="text-xl text-[#051C56]">{t("information")}</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[#051C56]">{t("name")}</label>
            <div className="mt-2">
              <div className="bg-gray-100">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("input_name")}
                  className={`mx-auto block w-full p-3 rounded-lg border col-span-6
                        ${errorName ? "border-red-500" : "border-gray-200"}
                        text-[#051C56] focus:outline-none focus:ring-2
                        focus:ring-[#051C56]`}
                />
              </div>
              {errorName && (
                <p className="text-red-500 text-sm mt-1">{errorName}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[#051C56]">{t("phone")}</label>
            <div className="mt-2">
              <div className="bg-gray-100">
                <input
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("input_phone")}
                  className={`mx-auto block w-full p-3 rounded-lg border col-span-6
                        ${errorPhone ? "border-red-500" : "border-gray-200"}
                        text-[#051C56] focus:outline-none focus:ring-2
                        focus:ring-[#051C56]`}
                />
              </div>
              {errorPhone && (
                <p className="text-red-500 text-sm mt-1">{errorPhone}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-[#051C56]">{t("email")}</label>
            <div className="mt-2">
              <div className="bg-gray-100">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("email")}
                  className={`mx-auto block w-full p-3 rounded-lg border col-span-6
                        ${errorEmail ? "border-red-500" : "border-gray-200"}
                        text-[#051C56] focus:outline-none focus:ring-2
                        focus:ring-[#051C56]`}
                />
              </div>
              {errorEmail && (
                <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button onClick={() => router.back()}>
            <div
              className="flex items-center justify-center h-10 w-40 px-4 gap-2 rounded-full cursor-pointer
                    lg:w-45 lg:px-8 
                    text-white bg-[#051C56] hover:bg-[#051C76]"
            >
              <i className="bi bi-chevron-left" />
              <div className="">{t("back")}</div>
            </div>
          </button>
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <div
                className="flex items-center justify-center h-10 w-40 px-4 gap-2 rounded-full cursor-pointer
                    lg:w-45 lg:px-8 
                    text-white bg-[#051C56] hover:bg-[#051C76]"
              >
                <div className="">{t("get_started")}</div>
                <i className="bi bi-chevron-right" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
