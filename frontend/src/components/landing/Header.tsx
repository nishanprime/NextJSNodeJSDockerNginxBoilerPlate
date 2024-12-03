"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import SiteLogo from "@/app/assets/images/site-logo.svg";

const navItems = [
  {
    title: "Home",
    href: "/landing",
  },
  {
    title: "How it works",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto flex items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <AlignJustify className="h-8 w-8 text-[#01414A]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="w-full h-full bg-white">
        <SheetHeader>
            <SheetTitle className="sr-only">
              <Button variant="ghost" size="icon" className="md:hidden">
                <AlignJustify className="h-6 w-6 text-teal-600" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTitle>
            <SheetDescription />
            <nav className="flex flex-col items-center space-y-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-2xl font-medium text-teal-600 hover:text-teal-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container mx-4 w-auto sm:mx-auto flex items-center py-6 mb-6">
      <Link href="/home">
        <Image height={44} src={SiteLogo} alt="Site Logo" />
      </Link>
      <nav className="hidden mx-auto py-1.5 px-3 bg-[#0367750F] md:flex items-center gap-8 rounded-[100px]">
        {navItems.map((navLink) => {
          return (
            <Link
              key={`nav-${navLink.title}`}
              href={navLink.href}
              className={cn(
                pathname === navLink.href ? "!text-white !bg-[#01414A]" : "",
                "font-medium py-2 px-4 text-black rounded-[100px] hover:bg-white transition-colors duration-300"
              )}
            >
              {navLink.title}
            </Link>
          );
        })}
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
