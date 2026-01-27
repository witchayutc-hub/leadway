// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["th", "en"] as const;

// export default getRequestConfig(async ({ locale }) => {
//   if (!locale || !locales.includes(locale as any)) {
//     notFound();
//   }

//   return {
//     locale,
//     messages: (await import(`./messages/${locale}.json`)).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "th";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["th", "en"];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locale || !locales.includes(locale)) {
//     notFound();
//   }

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });
