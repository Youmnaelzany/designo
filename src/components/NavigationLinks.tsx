import Link from "next/link";

import { cn } from "@/lib/utils";

import { headerData } from "../../constants";

export default function NavigationLinks({ className }: { className?: string }) {
  return (
    <>
      {headerData.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={cn(
            "group hoverEffect hoverEffect text-sm leading-3.5 font-normal tracking-[0.125rem] uppercase",
            className
          )}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
