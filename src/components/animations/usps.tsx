import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";

import { PriceCard } from "../ui/price-card";

export function Usps() {
  const offerings = [
    "12 videos/month (3/week)",
    "Unlimited revisions",
    "24/7 technical support",
  ];

  return (
    <Container className="relative z-10 max-w-[980px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>Everything you need for exceptional videos </p>
      </FadeIn>
      <FadeIn>
        <p>Let’s turn your ideas into impactful stories.</p>
      </FadeIn>
      <FadeIn>
        <p>Pick a perfect service</p>
      </FadeIn>
      <FadeIn>
        <p>Choose the one that suits you and let's get started</p>
      </FadeIn>
      <div className="pt-20">
        <FadeIn>
          <div className="flex gap-y-8 flex-col md:gap-x-4 md:flex-row">
            <PriceCard
              badge="Silver Plan"
              iconBadge="🎥"
              productName="Starter Creator"
              description="Perfect for small projects or beginners—essential video production services at an affordable price."
              offerings={offerings}
            />

            <PriceCard
              badge="Gold Plan"
              iconBadge="📺"
              productName="Pro Producer"
              description="For brands looking to scale up with motion design and YouTube optimization."
              offerings={offerings}
            />

            <PriceCard
              badge="Most Popular"
              iconBadge="💎"
              productName="Elite Creator"
              description="The full-service experience, including scriptwriting, high-end production, and exclusive creative consulting."
              offerings={offerings}
            />
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
