import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center bg-brightRed text-white font-bold gap-8 py-28 px-6 md:px-14 xl:px-48  md:flex-row md:py-14 md:justify-between bg-no-repeat bg-mobile-blob md:bg-desktop-blob">
      <h2 className="text-3xl md:text-4xl text-center md:text-start">
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
