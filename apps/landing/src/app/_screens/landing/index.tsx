import Featured from "@app/_components/marketing/early-access/featured";
import Hero from "@app/_components/marketing/hero";
import type { PageProps } from "@app/_types/page-props";
import type { NextPage } from "next";

const LandingPage: NextPage<PageProps> = async ({ params }: PageProps) => {
  return (
    <main>
      <Hero css={{ marginTop: 80 }} />
      <Featured css={{ marginTop: 150 }} />
    </main>
  );
};

export default LandingPage;
