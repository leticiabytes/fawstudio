import { CursorSmoke } from "./components/animations/cursor-smoke";
import { Header } from "./components/header";
import { ShootingStars, StarsBackground } from "./components/ui";

import { Hero, About, Showroom, Testimonials, Features } from "./sections";
import { Footer } from "./sections/footer";

export function App() {
  return (
    <>
      <main className="bg-darker dark text-white relative">
        <CursorSmoke />
        <Header />

        {/* Content */}
        <div className="relative z-10 sm:px-16 px-6 min-h-screen mt-12 pb-28 md:pb-0">
          <Hero />
          <About />
        </div>

        <Showroom />
        <div className="mx-auto min-h-screen bg-appleBackgroundContrast pb-28">
          <Features />
        </div>
        <Testimonials />
        <div className="">
          <Footer />
        </div>
      </main>
      {/* Background */}
      <StarsBackground />
      <ShootingStars />
    </>
  );
}
