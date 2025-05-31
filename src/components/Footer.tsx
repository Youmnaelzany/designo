import Container from "./Container";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import OfficeInfo from "./OfficeInfo";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
}


interface YourProjectProps {
  className?: string;
}

export function YourProject({ className }: YourProjectProps) {
  return <div
    className={cn("bg-peach rounded-[0.5rem] py-10 px-6 md:px-8 lg:px-12 mx-6 max-w-3/4 ", className)}>
    <div className={"flex flex-col items-center justify-center gap-12 md:flex-row"}>
      <div
        className="text-center md:text-left text-white gap-4 flex flex-col items-center justify-center mx-auto md:items-start md:justify-between">
        <h2 className={"text-3xl leading-9 font-medium md:max-w-1/2"}>Let’s talk about your project</h2>
        <p className={"md:max-w-3/4"}>Ready to take it to the next level? Contact us today and find out how our
          expertise
          can help
          your business
          grow.
        </p>
      </div>
      <Button>Get in Touch</Button></div>
  </div>;
}

export default function Footer({ className }: FooterProps = {}) {
  return (
    <footer className={cn("w-full bg-black  ", className)}>
      <Container className="space-y-8 px-6 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
          <Logo variant="light" />
          <nav className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-end">
            <NavigationLinks className="text-white" />
          </nav>
        </div>
        <div className="relative mx-auto text-white/50 after:absolute after:top-0 after:h-3.5 after:w-full"></div>
        <OfficeInfo />
      </Container>
    </footer>
  );
}
