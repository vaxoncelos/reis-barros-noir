import { ColorProvider } from "./components/ColorProvider";
import { Ticker } from "./components/Ticker";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { ColorFlood } from "./components/ColorFlood";
import { Locations } from "./components/Locations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <ColorProvider>
      <main className="bg-noir-bg text-noir-fg">
        <Ticker />
        <Nav />
        <Hero />
        <Categories />
        <ColorFlood />
        <Locations />
        <Contact />
        <Footer />
      </main>
    </ColorProvider>
  );
}
