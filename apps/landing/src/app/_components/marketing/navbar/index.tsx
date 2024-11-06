"use client";

import QotumLogo from "@app/_components/layout/brand/logo";
import { ROUTES } from "@app/_constants/routes";
import { Button, Link } from "@qotum/panda-preset";
import type React from "react";
import { css } from "styled-system/css";

export type NavbarLink = {
	label: string;
	href: string;
};

export type NavbarProps = {
	isScrolled?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
	isScrolled: defaultScrolled,
}) => {
	const navbarLinks: NavbarLink[] = [
		{
			label: "Features",
			href: ROUTES.FEATURES,
		},
		{
			label: "How it works",
			href: ROUTES.HOW_IT_WORKS,
		},
		{
			label: "FAQ",
			href: ROUTES.FAQ,
		},
	];

	return (
		<header className={css({
			paddingY: 20,
			maxWidth: 1040,
			marginX: "auto",
		})}>
			<nav className={css({
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			})}>
				<Link href={ROUTES.HOME}>
					<QotumLogo />
				</Link>

				<ul className={css({
					display: "flex",
					flexDirection: "row",
					userSelect: "none",
					gap: 40
				})}>
					{navbarLinks.map(({ label, href }) => (
						<li key={href}>
							<Link href={href}>{label}</Link>
						</li>
					))}
				</ul>

				<Button radius="circle" size="XS">Sign Up</Button>
			</nav>
		</header>
	);
};

export default Navbar;
