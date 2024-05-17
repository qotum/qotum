import type { Metadata } from "next";
import { css, cx } from "@qotum/panda-exports/css";
import "../styles/globals.css";

const bodyStyles = css({
  fontFamily: "body",
});

export const metadata: Metadata = {
  title: "Qotum Playground",
  description: "Qotum Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(bodyStyles, "light")}>
        <div
          className={css({
            backgroundColor: "base.background.ground",
          })}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
