import React from "react";
import Image from "next/image";
import { ITestimonial } from ".";
import { classNames } from "@/utility";

interface Props extends ITestimonial {
  behavior: string;
}
export default function Testimony({ name, imagepath, text, behavior }: Props) {
  return (
    <div className={classNames(`${behavior}`, "flex-col items-center")}>
      <Image
        src={imagepath}
        alt="Avatar"
        width="80"
        height="80"
        className="z-10 -m-8"
      />
      <div className="flex flex-col items-center gap-4 px-6 py-12 bg-veryLightGray">
        <h3 className="text-2xl font-bold text-darkBlue">{name}</h3>
        <p className="text-darkGrayishBlue text-center w-5/6 lg:w-[420px]">
          {text}
        </p>
      </div>
    </div>
  );
}
