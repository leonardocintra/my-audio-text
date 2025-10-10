import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt-BR"],

  // Used when no locale matches
  defaultLocale: "en",

  // The pathnames configuration
  pathnames: {
    "/": "/",
    "/start": {
      en: "/start",
      "pt-BR": "/iniciar",
    },
    "/activate": "/activate",
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
