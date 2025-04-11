import Hero from "./components/Hero";
import Disover from "./components/Discover";
import SmartFeatures from "./components/SmartFeatures";
import Advantage from "./components/Advantage";
import Steps from "./components/Steps";

export default function page() {
  return (
    <main className="">
      <Hero />
      <Disover />
      <SmartFeatures />
      <Advantage />
      <Steps />
    </main>
  );
}
