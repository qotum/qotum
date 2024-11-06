"use client";

import type { Styles } from "@qotum/panda-exports/css";
import { Text } from "@qotum/panda-preset";
import type React from "react";
import { css } from "styled-system/css";
import Separator from "../separator";

export type FooterProps = {
  css?: Styles
}

const Footer: React.FC<FooterProps> = ({ css: cssProp }: FooterProps) => {
  return (
    <footer
      className={css(
        {
          maxWidth: 1000,
          marginX: "auto",
          paddingBottom: 60
        },
        cssProp,
      )}
    >
      <Separator />

      <div>
        <Text>© 2024 Qotum. All rights reserved.</Text>
      </div>
    </footer>
  )
}

export default Footer
