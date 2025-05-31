import HomeCard from "@/components/HomeCard";
import HomeCategory from "@/components/HomeCategory";


export default function Home() {
  return (
    <main className={"space-y-24"}>
      <HomeCategory />
      <HomeCard />
    </main>
  );
}
