import Button from "@/components/Button";
import { useEffect, useState } from "react";
import Testimony from "./Testimony";
import { classNames } from "@/utility";

export interface ITestimonial {
  name: string;
  imagepath: string;
  text: string;
}
const TestimonialData: ITestimonial[] = [
  {
    name: "Anisha Li",
    imagepath: "/images/testimonial-avatars/avatar-anisha.png",
    text: "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    name: "Ali Bravo",
    imagepath: "/images/testimonial-avatars/avatar-ali.png",
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    name: "Richard Watts",
    imagepath: "/images/testimonial-avatars/avatar-richard.png",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    name: "Shanai Gough",
    imagepath: "/images/testimonial-avatars/avatar-shanai.png",
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MILLISECONDS = 5000;

  const nextSlide = () => {
    let nextIndex =
      currentIndex + 1 === TestimonialData.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const behavior = (index: number) => {
    // all that have order they are visible
    // currentIndex gets order 1
    let nextIndex =
      currentIndex + 1 === TestimonialData.length ? 0 : currentIndex + 1; // gets order 2
    let prevIndex =
      currentIndex - 1 < 0 ? TestimonialData.length - 1 : currentIndex - 1; // gets order 3

    if (index == currentIndex) {
      return "flex lg:order-2";
    }
    if (index === nextIndex) {
      return "hidden order-3 lg:flex"; // hide for small devices and show for lgs
    }
    if (index == prevIndex) {
      return "hidden order-1 lg:flex";
    }
    return "hidden"; //keep the rest hidden
  };

  useEffect(() => {
    let interval = setInterval(nextSlide, MILLISECONDS);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className="flex flex-col items-center gap-12 px-6 pb-24 md:px-14 xl:px-48 lg:gap-16 lg:overflow-hidden">
      <h2 className="mb-8 text-3xl font-bold text-darkBlue md:text-4xl">
        What they&apos;ve said
      </h2>
      <div className="lg:flex lg:flex-row lg:gap-14 xl:gap-28">
        {TestimonialData.map(
          ({ name, imagepath, text }: ITestimonial, index) => {
            return (
              <Testimony
                name={name}
                imagepath={imagepath}
                text={text}
                key={index}
                behavior={behavior(index)}
              />
            );
          }
        )}
      </div>
      <div className="flex gap-2 lg:hidden">
        {TestimonialData.map(({}, index) => {
          return (
            <button
              key={index}
              className={classNames(
                currentIndex === index && "bg-brightRed",
                "border w-2 h-2 rounded-full border-brightRed hover:bg-brightRed"
              )}
              onClick={() => {
                setCurrentIndex(index);
              }}
              aria-label={`testimony ${index + 1}`}
            ></button>
          );
        })}
      </div>
      <Button title="Get started" href="#" />
    </section>
  );
}
