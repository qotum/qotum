import type React from "react";
import { css } from "styled-system/css";

export type HighlightProps = {
  children?: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => (
	<span
		className={css({
			color: "brand.primary",
		})}
	>
		{children}
	</span>
);

export default Highlight;
