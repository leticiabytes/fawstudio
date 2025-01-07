import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";

import { Button } from "../button";
import { ShimmerButton } from "../ui";

export function Usps() {
  return (
    <Container className="relative z-10 max-w-[980px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>FAW Lorem ipsum dolor, sit amet </p>
      </FadeIn>
      <FadeIn>
        <p>
          Repellat neque quas possimus accusamus blanditiis. In natus aliquid
          ullam excepturi
        </p>
      </FadeIn>
      <FadeIn>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </FadeIn>
      <FadeIn>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </FadeIn>
      <div className="pt-20">
        <FadeIn>
          <div className="flex gap-y-8 flex-col md:gap-x-4 md:flex-row">
            <div className="flex-1">
              <span className="text-xl font-normal text-zinc-200">
                Lorem ipsum
              </span>
              <h4 className="leading-10 mb-4">dolor sit amet consectetur...</h4>
              <p className="text-zinc-600 text-sm font-normal mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                alias rem voluptas corrupti excepturi quis at saepe ab
              </p>
              <Button className="w-full">Book a call</Button>
            </div>

            <div className="flex-1">
              <span className="text-xl font-normal text-zinc-200">
                Lorem ipsum
              </span>
              <h4 className="leading-10 mb-4">dolor sit amet consectetur...</h4>
              <p className="text-zinc-600 text-sm font-normal mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                alias rem voluptas corrupti excepturi quis at saepe ab
              </p>
              {/* <Button>Know more</Button> */}
              <ShimmerButton className="shadow-2xl w-full">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Book a call
                </span>
              </ShimmerButton>
            </div>

            <div className="flex-1">
              <span className="text-xl font-normal text-zinc-200">
                Lorem ipsum
              </span>
              <h4 className="leading-10 mb-4">dolor sit amet consectetur...</h4>
              <p className="text-zinc-600 text-sm font-normal mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                alias rem voluptas corrupti excepturi quis at saepe ab
              </p>
              <Button>Showcase</Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
