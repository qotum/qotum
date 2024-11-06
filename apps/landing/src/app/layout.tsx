import type { I18nParams } from "@app/_types/i18n-params";
import "./_globals.css";

import Navbar from "@app/_components/marketing/navbar";
import { css, cx } from "@qotum/panda-exports/css";
import { i18n } from "i18n-config";
import type { Metadata } from "next";
import Footer from "./_components/layout/footer";

const bodyStyles = css({
	fontFamily: "body",
});

export const metadata: Metadata = {
	title: "Qotum Playground",
	description: "Qotum Playground",
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: I18nParams;
}>) {
	return (
		<html lang={params.lang}>
			<body className={cx(bodyStyles, "light")}>
				<div
					className={css({
						backgroundColor: "base.background.ground",
					})}
				>
					<Navbar />
					{children}
					<Footer css={{
						marginTop: 150
					}} />
				</div>
			</body>
		</html>
	);
}

export const generateStaticParams = async () => {
	return i18n.locales.map((locale) => ({ lang: locale }));
};
