import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center gap-8 px-6 font-bold text-white bg-no-repeat bg-brightRed py-28 md:px-14 xl:px-48 md:flex-row md:py-14 md:justify-between bg-mobile-blob md:bg-desktop-blob">
      <h2 className="text-3xl text-center md:text-4xl md:text-start">
        Simplify how your team works today.
      </h2>
      <Button
        title="Get Started"
        href="#"
        intent="secondary"
        className="whitespace-nowrap"
      />
    </section>
  );
}
