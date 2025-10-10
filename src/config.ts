import type { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt-BR"] as const;

export const pathnames = {
	"/": "/",
	"/start": {
		en: "/start",
		"pt-BR": "/iniciar",
	},
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
