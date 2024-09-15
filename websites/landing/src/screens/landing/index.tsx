"use client";

import { VStack } from "@qotum/panda-exports/jsx";
import { Button, Link } from "@qotum/panda-preset";
import type { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <VStack>
      <Button>Click here</Button>
      <Link href={""}>Lien ici</Link>
    </VStack>
  );
};

export default LandingPage;
