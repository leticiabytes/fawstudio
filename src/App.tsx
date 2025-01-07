import { Header } from "./components/header";
import { ShootingStars, StarsBackground } from "./components/ui";

import { Hero, About, Showroom, CTA } from "./sections";
import { Footer } from "./sections/footer";

export function App() {
  return (
    <main className="bg-darker dark">
      <Header />

      {/* Content */}
      <div className="sm:px-16 px-6 min-h-screen mt-12 pb-28 md:pb-0">
        <Hero />
        <About />
      </div>
      <Showroom />

      <CTA />
      <Footer />

      {/* Background */}
      <StarsBackground />
      <ShootingStars />
    </main>
  );
}
