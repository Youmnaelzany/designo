import Image from "next/image";

export default function Card({ img, title, description }: { img: string, title: string, description: string }) {
  return (
    <div
      className={"flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between lg:flex-col lg:justify-center"}>
      <div className={"relative "}>
        <Image src={"./assets/shared/desktop/bg-pattern-small-circle.svg"} alt={title} width={202} height={202}
               className={""} />
        <Image src={img} alt={title} width={202} height={202} className={"absolute mx-auto top-0 left-0 right-0"} />
      </div>
      <div
        className={"flex flex-col items-center justify-center text-center text-darkBlack gap-6 md:text-left md:items-start lg:text-center lg:items-center"}>
        <h2 className={"uppercase text-xl leading-[1.625rem] tracking-[0.313rem] font-medium "}>{title}</h2>
        <p className={"text-base leading-[1.625rem] font-normal w-[327px] md:w-[439px] lg:w-[350px]"}>{description}</p>
      </div>
    </div>
  );
}