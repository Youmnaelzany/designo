import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CategoryCard({ name, href, className, bgMobile, bgTablet, bgDesktop }: {
  name: string,
  href: string,
  className?: string,
  bgMobile?: string
  bgDesktop?: string
  bgTablet?: string

}) {
  return (
    <div
      className={cn("relative flex flex-col items-center justify-center rounded-lg overflow-hidden  hoverEffect group", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bgDesktop} />
          <source media="(min-width: 768px)" srcSet={bgTablet} />
          {bgMobile && (
            <Image
              src={bgMobile}
              alt={`${name} Background`}
              priority
              fill
              className={"object-cover object-center"}
            />
          )}
        </picture>
      </div>
      {/* Overlay div for hover effect */}
      <div className="absolute inset-0 z-10 bg-black/60 hover:bg-peach/80 hoverEffect"></div>
      {/* Content centered on top of background */}
      <div className="z-50 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className={"font-medium text-white text-[1.75rem] leading-9 tracking-[0.087rem] uppercase"}>{name}</h2>
        <Link href={href}
              className={"text-[0.938rem] text-white uppercase tracking-[0.313rem] flex items-center gap-1 hoverEffect"}>
          View Projects
          <ArrowRight
            className={"text-peach group-hover:text-white"} />
        </Link>
      </div>
    </div>
  );
}
