"use client";

import { type Locale, i18n } from "i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const LocaleSwitcher: React.FC = () => {
	const pathName = usePathname();

	const redirectedPathName = (locale: Locale) => {
		if (!pathName) return "/";

		const segments = pathName.split("/");
		segments[1] = locale;

		return segments.join("/");
	};

	return (
		<div>
			<p>Locale switcher:</p>
      
			<ul>
				{i18n.locales.map((locale) => {
					return (
						<li key={locale}>
							<Link href={redirectedPathName(locale)}>{locale}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LocaleSwitcher;
