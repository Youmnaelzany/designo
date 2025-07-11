import Card from "@/components/Card";

const CardItems = [
  {
    img: "./assets/home/desktop/illustration-passionate.svg",
    title: "PASSIONATE",
    description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: "./assets/home/desktop/illustration-resourceful.svg",
    title: "RESOURCEFUL",
    description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: "./assets/home/desktop/illustration-friendly.svg",
    title: "FRIENDLY",
    description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export default function HomeCard() {
  return <div
    className={"flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between "}>
    {CardItems.map((item, index) => (
      <Card
        key={index}
        img={item.img}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>;
}
