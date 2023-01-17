import Image from "next/image";
import HeroIllustration from "@/assets/illustration-intro.svg";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="pt-12 px-6 md:px-14 xl:px-48 lg:pt-20 flex flex-col items-center lg:flex-row">
      <Image
        src={HeroIllustration}
        alt="hero illustration"
        className="lg:order-last lg:w-1/2"
      />
      <div className="flex flex-col items-center gap-8 text-center lg:text-start lg:items-start">
        <h1 className="text-darkBlue font-bold text-4xl md:text-5xl md:w-5/6 max-w-[700px]">
          Bring everyone together to build better products.
        </h1>
        <p className="w-5/6 text-darkGrayishBlue lg:w-[320px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button title="Get Started" href="#" />
      </div>
    </section>
  );
}
