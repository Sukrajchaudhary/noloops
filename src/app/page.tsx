import Homepage from "@/components/home";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/pricing";
import Process from "@/components/proces";
import WhoWeAre from "@/components/whoweare";

export default function Home() {
  return (
    <main>
      <Homepage/>
      <WhoWeAre/>
      <Process/>
      <Portfolio/>
      <Pricing/>
    </main>
  );
}
