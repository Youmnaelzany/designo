import { AlignRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavigationLinks from "./NavigationLinks";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-black md:hidden">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription>
            <nav className="flex flex-col items-center justify-center gap-6 px-6 pt-20">
              <NavigationLinks className="text-white" />
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
