import { AlignRight } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import NavigationLinks from "./NavigationLinks";
import { SocialMedia } from "./OfficeInfo";

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
            <nav className="flex flex-col items-start gap-10 px-6 pt-20">
              <NavigationLinks className="text-white" />
              <SocialMedia />
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
