import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import StickyBottomBar from "./components/StickyBottomBar";

export default function Home() {
  return (
    <main className="relative">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Map />
      <StickyBottomBar />
      {/* Padding bottom para que el contenido no quede oculto por la barra pegajosa */}
      <div className="h-20" />
    </main>
  );
}
