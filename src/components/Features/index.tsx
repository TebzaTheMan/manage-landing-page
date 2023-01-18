interface Ifeatures {
  number: string;
  title: string;
  description: string;
}
const featuresData: Ifeatures[] = [
  {
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    number: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];
export default function FeaturesSection() {
  return (
    <section className="flex flex-col gap-12 justify-between lg:flex-row lg:gap-0 pb-24">
      <div className="flex flex-col items-center gap-8 text-center lg:text-start lg:items-start px-6 md:px-14 xl:px-48 lg:pt-0 lg:pr-0 xl:pr-0 lg:bg-blob bg-contain bg-no-repeat bg-[left_-286px_bottom_-212px]">
        <h2 className="text-darkBlue font-bold text-3xl md:text-4xl md:w-5/6  max-w-[700px]">
          What&apos;s different about Manage?
        </h2>
        <p className="w-5/6 text-darkGrayishBlue lg:w-[320px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ol className="flex flex-col gap-12 pl-6 lg:p-0 lg:w-1/2 lg:pr-6">
        {featuresData.map(
          ({ number, title, description }: Ifeatures, index) => {
            return (
              <li key={index} className="flex flex-col gap-4">
                <h3 className="text-darkBlue font-bold text-xs sm:text-base bg-veryPaleRed py-2 rounded-l-full lg:bg-inherit">
                  <span className="bg-brightRed px-7 py-3 text-white rounded-full mr-2 sm:mr-4">
                    {number}
                  </span>
                  {title}
                </h3>
                <p className="text-darkGrayishBlue mr-6 lg:mr-0 md:w-3/4 md:max-w-[500px] lg:w-[380px] md:ml-[89px]">
                  {description}
                </p>
              </li>
            );
          }
        )}
      </ol>
    </section>
  );
}
