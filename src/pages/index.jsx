import Image from "next/image";

import Hero from "@/components/hero";
import HotNft from "@/components/hotNft";
import Collections from "@/components/collections";
import TrendingCategories from "@/components/trendingCategories";
import Tutorials from "@/components/tutorials";

export default function Home() {
  return (
    <>
      <Hero />
      <HotNft />
      <Collections />
      <TrendingCategories />
      <Tutorials />
    </>
  );
}

