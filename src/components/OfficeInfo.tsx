import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { socialMediaData } from "../../constants";

const OfficeInfoLain = {
  office: "Designo Central Office",
  street: "3886 Wellington Street",
  city: "Toronto, Ontario M9C 3J5",
  contactUs: "Contact Us (Central Office)",
  Phone: "P : +1 253-863-8967",
  email: "M : contact@designo.com",
};

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-6">
      <TooltipProvider>
        {socialMediaData.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach hover:text-lightPeach hoverEffect"
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-base font-normal text-black">
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}

export default function OfficeInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center text-base leading-[1.625rem] text-white/50 md:flex-row md:items-end md:justify-between md:gap-12 md:text-left">
      <div>
        <h3 className="font-bold">{OfficeInfoLain.office}</h3>
        <h4 className="font-normal">{OfficeInfoLain.street}</h4>
        <h4 className="font-normal">{OfficeInfoLain.city}</h4>
      </div>
      <div>
        <h3 className="font-bold">{OfficeInfoLain.contactUs}</h3>
        <h4 className="font-normal">{OfficeInfoLain.Phone}</h4>
        <h4 className="font-normal">{OfficeInfoLain.email}</h4>
      </div>
      <SocialMedia />
    </div>
  );
}
