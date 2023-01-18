import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import {
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io";
import LogoImg from "@/assets/logo-white.svg";

const NewsLetterForm = () => {
  return (
    <form className="flex justify-between gap-4" name="Newletter-signup">
      <input
        type="email"
        placeholder="updates in your inbox..."
        className="w-full pl-6 pr-4 rounded-full text-darkBlue"
        name="email"
        required
      />
      <Button title="Go" showShadow={false} />
    </form>
  );
};
const NavLinks = () => {
  return (
    <nav className="flex justify-between px-8 text-gray-300 lg:order-2 lg:px-0 lg:gap-36">
      <ul className="flex flex-col gap-4">
        <Link href="#" className="hover:text-brightRed">
          Home
        </Link>
        <Link href="#" className="hover:text-brightRed">
          Pricing
        </Link>
        <Link href="#" className="hover:text-brightRed">
          Products
        </Link>
        <Link href="#" className="hover:text-brightRed">
          About us
        </Link>
      </ul>
      <ul className="flex flex-col gap-4">
        <Link href="#" className="hover:text-brightRed">
          Careers
        </Link>
        <Link href="#" className="hover:text-brightRed">
          Community
        </Link>
        <Link href="#" className="hover:text-brightRed">
          Privacy Policy
        </Link>
      </ul>
    </nav>
  );
};
const SocialMediaLinks = () => {
  return (
    <div className="flex justify-between text-4xl text-white lg:order-last lg:text-2xl">
      <a href="#">
        <IoLogoFacebook className="hover:text-brightRed" />{" "}
      </a>
      <a href="#">
        <IoLogoYoutube className="hover:text-brightRed" />
      </a>
      <a href="#">
        <IoLogoTwitter className="hover:text-brightRed" />
      </a>
      <a href="#">
        <IoLogoPinterest className="hover:text-brightRed" />
      </a>
      <a href="#">
        <IoLogoInstagram className="hover:text-brightRed" />
      </a>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 px-6 pt-20 pb-10 bg-veryDarkBlue md:px-14 xl:px-48 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-between lg:order-last">
        <NewsLetterForm />
        <p className="hidden text-sm text-gray-500  lg:block text-end">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
      <NavLinks />
      <div className="flex flex-col gap-12 lg:gap-0 lg:justify-between">
        <SocialMediaLinks />
        <Link href="/">
          <Image src={LogoImg} alt="logo" className="mx-auto " />
        </Link>
      </div>
      <p className="mx-auto text-sm text-gray-500 lg:hidden">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
}
