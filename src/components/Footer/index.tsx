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
import { IconType } from "react-icons/lib";

interface ILink {
  title: string;
  href: string;
}
interface ISocialLink {
  Icon: IconType;
  href: string;
  label: string;
}
const LinksData: ILink[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const SocialData: ISocialLink[] = [
  {
    label: "Find us on Facebook",
    href: "https://facebook.com",
    Icon: IoLogoFacebook,
  },
  {
    label: "Find us on Youtube",
    href: "https://youtube.com",
    Icon: IoLogoYoutube,
  },
  {
    label: "Find us on Twitter",
    href: "https://twitter.com/",
    Icon: IoLogoTwitter,
  },
  {
    label: "Find us on Pinterest",
    href: "https://pinterest.com/",
    Icon: IoLogoPinterest,
  },
  {
    label: "Find us on Instagram",
    href: "https://instagram.com",
    Icon: IoLogoInstagram,
  },
];
const NewsLetterForm = () => {
  return (
    <form className="flex justify-between gap-4" name="Newletter-signup">
      <input
        type="email"
        placeholder="updates in your inbox..."
        className="w-full pl-6 pr-4 rounded-full text-darkBlue"
        name="email"
        title="Newsletter sign-up"
        required
      />
      <Button title="Go" showShadow={false} />
    </form>
  );
};
const SocialMediaLinks = () => {
  return (
    <div className="flex justify-between text-4xl text-white lg:order-last lg:text-2xl">
      {SocialData.map(({ label, href, Icon }: ISocialLink, index) => {
        return (
          <a
            href={href}
            key={index}
            className="hover:text-brightRed"
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 px-6 pt-20 pb-10 bg-veryDarkBlue md:px-14 xl:px-48 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-between lg:order-last">
        <NewsLetterForm />
        <p className="hidden text-sm text-gray-500 lg:block text-end">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
      <div className="flex justify-between px-8 text-gray-300 lg:order-2 lg:px-0 lg:gap-36">
        <ul className="flex flex-col gap-4">
          {LinksData.slice(0, 4).map(({ title, href }: ILink, index) => {
            return (
              <li key={index}>
                <Link href={href} className="hover:text-brightRed">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-4">
          {LinksData.slice(4, LinksData.length).map(
            ({ title, href }: ILink, index) => {
              return (
                <li key={index}>
                  <Link href={href} className="hover:text-brightRed">
                    {title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-12 lg:gap-0 lg:justify-between">
        <SocialMediaLinks />
        <Link href="/">
          <Image src={LogoImg} alt="Manage logo" className="mx-auto" />
        </Link>
      </div>
      <p className="mx-auto text-sm text-gray-500 lg:hidden">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
}
