"use client";

import type { Styles } from "@qotum/panda-exports/css";
import { Button, Subtitle, Text } from "@qotum/panda-preset";
import type React from "react";
import { css } from "styled-system/css";

export type FeaturedProps = {
  css?: Styles;
};

const Featured: React.FC<FeaturedProps> = ({ css: cssProp }: FeaturedProps) => {
  return (
    <section
      className={css(
        {
          maxWidth: 1000,
          marginX: "auto",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          background: "brand",
          overflow: "hidden",
        },
        cssProp
      )}
    >
      <div
        className={css({
          paddingY: 60,
          paddingX: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <Subtitle
          css={{ textAlign: "center", fontWeight: "bold" }}
          color="reversed"
        >
          Start to empower your reviews and get free time for other tasks
        </Subtitle>

        <Text
          css={{
            color: "white",
            textAlign: "center",
            maxWidth: 500,
            marginTop: 20,
          }}
        >
          Create your Qotum account now and optimize your e-reputation with
          smooth and efficient automation.
        </Text>

        <Button radius="circle" visual="secondary" css={{ marginTop: 30 }}>
          Get free early access
        </Button>
      </div>
    </section>
  );
};

export default Featured;
