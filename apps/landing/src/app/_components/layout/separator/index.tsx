import type { Styles } from "@qotum/panda-exports/css"
import type React from "react"
import { css } from "styled-system/css"

export type SeparatorProps = {
  css?: Styles
}

const Separator: React.FC<SeparatorProps> = ({ css: cssProp }: SeparatorProps) => (
  <div
    className={css({
      width: "100%",
      height: 1,
      backgroundColor: "gray",
      marginY: 35
    }, cssProp)}
   />
)

export default Separator
