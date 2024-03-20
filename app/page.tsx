import About from "@/components/About";
import Download from "@/components/Download";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WaterMark from "@/components/WaterMark";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Goal />
      <Download />
      <WaterMark />
    </>
  );
}
