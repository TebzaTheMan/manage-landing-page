import CTASection from "@/components/CTA";
import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  );
}
