import Image from "next/image";
import type React from "react";
import { css } from "styled-system/css";

const QotumLogo: React.FC = () => (
	<div className={css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    userSelect: "none",
  })}>
    <Image
      src="/static/icons/brand/logo.svg"
      alt="Qotum logo"
      width={35}
      height={35}
    />

    <span className={css({
      fontWeight: "semibold",
      color: "black",
    })}>Qotum</span>
  </div>
);

export default QotumLogo;
