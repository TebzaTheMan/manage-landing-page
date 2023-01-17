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
        className="-m-8 z-10"
      />
      <div className="bg-veryLightGray flex flex-col py-12 px-6 items-center gap-4">
        <h3 className="text-darkBlue text-2xl font-bold">{name}</h3>
        <p className="text-darkGrayishBlue text-center w-5/6 lg:w-[420px]">
          {text}
        </p>
      </div>
    </div>
  );
}
