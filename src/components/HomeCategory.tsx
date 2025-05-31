import { CategoryCard } from "@/components/CategoryCard";

export default function HomeCategory() {
  return <div className={"flex flex-col items-center justify-center gap-8 lg:flex-row "}>
    <div>
      {/*Web Design*/}
      <CategoryCard
        href={"/web-design"}
        name={"Web Design"}
        className={"lg:w-[541px] lg:h-[640px] w-[327px] h-[250px] md:w-[689px] md:h-[200px]"}
        bgDesktop={"/assets/home/desktop/image-web-design-large.jpg"}
        bgTablet={"/assets/home/tablet/image-web-design.jpg"}
        bgMobile={"/assets/home/mobile/image-web-design.jpg"}
      />
    </div>
    <div className={"flex flex-col items-center justify-center gap-8 lg:gap-6"}>
      {/*App Design*/}
      <CategoryCard
        href={"/app-design"}
        name={"app Design"}
        className={"lg:w-[541px] lg:h-[308px] w-[327px] h-[250px] md:w-[689px] md:h-[200px] "}
        bgDesktop={"/assets/home/desktop/image-app-design.jpg"}
        bgTablet={"/assets/home/tablet/image-app-design.jpg"}
        bgMobile={"/assets/home/mobile/image-app-design.jpg"}
      />
      {/*Graphic Design*/}
      <CategoryCard
        href={"/graphic-design"}
        name={"graphic Design"}
        className={"lg:w-[541px] lg:h-[308px] w-[327px] h-[250px] md:w-[689px] md:h-[200px]"}
        bgDesktop={"/assets/home/desktop/image-graphic-design.jpg"}
        bgTablet={"/assets/home/tablet/image-graphic-design.jpg"}
        bgMobile={"/assets/home/mobile/image-graphic-design.jpg"}
      />
    </div>
  </div>;
}