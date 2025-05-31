import { AlignRight } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import NavigationLinks from "./NavigationLinks";
import Logo from "@/components/Logo";
import Link from "next/link";
import { socialMediaData } from "../../constants";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-black md:hidden ">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription className={"flex flex-col px-6 pt-20 gap-10"}>
            <Logo variant="light" />
            <nav className="flex flex-col items-start gap-8 ">
              <NavigationLinks className="text-white" />
              <Link
                href={"/web-design"}
                className={
                  "group hoverEffect hoverEffect text-sm leading-3.5 font-normal tracking-[0.125rem] uppercase text-white"}
              >
                Web Design
              </Link>
              <Link
                href={"/app-design"}
                className={
                  "group hoverEffect hoverEffect text-sm leading-3.5 font-normal tracking-[0.125rem] uppercase text-white"}
              >
                App Design
              </Link>
              <Link
                href={"/graphic-design"}
                className={
                  "group hoverEffect hoverEffect text-sm leading-3.5 font-normal tracking-[0.125rem] uppercase text-white"}
              >
                Graphic Design
              </Link>
            </nav>
            <div className="flex  gap-6 ">
              {socialMediaData.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-peach hover:text-lightPeach hoverEffect"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
