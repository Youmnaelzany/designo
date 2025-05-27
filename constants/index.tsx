import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiYoutubemusic } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";

export const headerData = [
  {
    title: "Our Company",
    link: "/about",
  },
  {
    title: "Locations",
    link: "/locations",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const socialMediaData = [
  {
    title: "facebook",
    link: "https://www.facebook.com/",
    icon: <FaSquareFacebook  className="size-6" />,
  },
  {
    title: "youtube",
    link: "https://www.linkedin.com/",
    icon: <SiYoutubemusic className="size-6" />,
  },
  {
    title: "twitter",
    link: "https://www.twitter.com/",
    icon: <FaXTwitter className="size-6" />,
  },
  {
    title: "pinterest",
    link: "https://www.pinterest.com/",
    icon: <FaPinterest className="size-6" />,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/",
    icon: <FiInstagram className="size-6" />,
  },
];
