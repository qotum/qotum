"use client";

import Highlight from "@app/_components/layout/highlight";
import type { Styles } from "@qotum/panda-exports/css";
import { Button, Text, Title } from "@qotum/panda-preset";
import type React from "react";
import { css } from "styled-system/css";

type HeroProps = {
  css?: Styles;
};

const Hero: React.FC<HeroProps> = ({ css: cssProp }: HeroProps) => {
  return (
    <section
      className={css(
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        cssProp
      )}
    >
      <Title
        css={{
          fontSize: "70px",
          lineHeight: "60px",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Centralize and analyze all your customer reviews{" "}
        <Highlight>{"in one place"}</Highlight>.
      </Title>

      <Text css={{
        marginTop: 30,
        textAlign: "center",
        maxWidth: 600
      }}>
        Import your cross-platforms reviews, manage them in one place — our AI
        will automatically improve your e-reputation, with quick & intelligent
        replies.
      </Text>

      <Button radius="circle" css={{ marginTop: 30 }}>
        Get free early access
      </Button>

      <Text css={{
        marginTop: 30,
        textAlign: "center",
      }}>
        No credit card required
      </Text>
    </section>
  );
};

export default Hero;
