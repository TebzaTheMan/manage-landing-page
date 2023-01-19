import CTASection from "@/components/CTA";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Nav from "@/components/Nav";
import TestimonialSection from "@/components/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage landing page | Frontend Mentor</title>
        <meta
          name="description"
          content="This is a solution to the Manage landing page challenge on Frontend Mentor."
        />
        <meta name="author" content="Tebogo Nomnqa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <main>
        <header className="bg-blob bg-no-repeat bg-contain bg-[right_-101px_top_-32px] md:bg-[right_-213px_top_-171px] xl:md:bg-[right_-22px_top_-107px]">
          <Nav />
          <HeroSection />
        </header>
        <FeaturesSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
