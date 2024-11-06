/* import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import { i18n } from "i18n-config";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {};
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales;

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales,
	);

	const locale = matchLocale(languages, locales, i18n.defaultLocale);

	return locale;
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
				request.url,
			),
		);
	}
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
 */
