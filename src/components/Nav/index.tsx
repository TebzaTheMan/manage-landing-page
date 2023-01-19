import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import LogoImg from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { classNames } from "@/utility";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  interface INavLink {
    title: string;
    href: string;
  }
  const navLinks: INavLink[] = [
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Product",
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
  ];

  return (
    <nav className="flex items-center justify-between px-6 pt-12 md:px-14 xl:px-48">
      <Link href="/">
        <Image src={LogoImg} alt="Manage logo" />
      </Link>
      <div
        onClick={toggleMenu}
        className="z-10 text-4xl text-darkBlue hover:cursor-pointer md:hidden"
      >
        {isMenuOpen ? <RiCloseFill /> : <RiMenuFill />}
      </div>
      <div
        className={classNames(
          !isMenuOpen && "hidden",
          "bg-black absolute top-0 left-0 w-full h-full opacity-10"
        )}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={classNames(
          !isMenuOpen && "hidden",
          "absolute top-[130px] left-0 right-0 w-4/5 mx-auto py-10 rounded-md shadow-2xl bg-white md:bg-transparent md:relative md:shadow-none md:w-fit md:p-0 md:flex md:top-0 md:m-0"
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-6 font-bold text-darkBlue md:flex-row md:gap-3 lg:gap-6 md:text-xs xl:text-base">
          {navLinks.map(({ title, href }: INavLink, index) => {
            return (
              <li key={index}>
                <Link className="hover:text-darkGrayishBlue" href={href}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Button href="#" title="Get Started" className="hidden md:block" />
    </nav>
  );
}
