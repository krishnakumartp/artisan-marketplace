import HomeMain from "@/components/Home/main";
import Navbar from "@/components/Navbar/navbar";

export default function Home () {
  return (
    <main className="h-screen">
      <Navbar />
      <HomeMain />
    </main>
  );
}
