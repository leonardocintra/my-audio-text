import type { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt-BR"] as const;

export const pathnames = {
  "/": "/",
  "/start": {
    en: "/start",
    "pt-BR": "/iniciar",
  },
  "/activate": {
    en: "/activate",
    "pt-BR": "/ativar",
  },
  "/terms": {
    en: "/terms",
    "pt-BR": "/termos",
  },
  "/privacy": {
    en: "/privacy",
    "pt-BR": "/privacidade",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
