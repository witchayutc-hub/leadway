import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["th", "en"],
  defaultLocale: "th",
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
