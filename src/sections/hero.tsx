import { AvatarTooltip } from "@/components/animations/avatar-tooltip";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ShinyButton } from "@/components/ui/shiny-button";

import { INFINITE_GIFS_ITEMS } from "@/constants/infinite-moving-gifs";
import { PEOPLES } from "@/constants/peoples";

export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex md:py-[120px] max-w-[980px] justify-between">
        <div className="flex flex-col md:flex-row items-center gap-x-8 justify-between w-full">
          <div className="">
            <h1 className="text-5xl font-semibold mb-4">
              <span className="tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                We are —{" "}
              </span>
              <br />
              <span className="tracking-tight bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-white to-white">
                FAW Studios
              </span>
            </h1>
            <div className=" flex w-full flex-row items-center">
              <AvatarTooltip items={PEOPLES} />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col">
            <p className="text-lg text-gray-400 mb-6">
              Your one-stop studio for high-quality video production, engaging
              motion design, and professional storytelling. <br />
              <br /> From concept to execution, we bring your ideas to life.
            </p>
            {/* <p className="text-2xl mt-2 mb-4">Know more</p> */}
            <small className="text-2xl mt-2">Innovate. Inspire. Impact.</small>

            <div className="flex flex-col mt-12">
              <div className="flex gap-4">
                <ShinyButton className="w-full rounded-full py-3">
                  Book a call →
                </ShinyButton>
                <button
                  type="button"
                  className="backdrop-blur-sm bg-transparent border border-white/5 text-xs w-full py-3 px-6 rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-0 w-full">
        <InfiniteMovingCards speed="slow" items={INFINITE_GIFS_ITEMS} />
      </div>
    </div>
  );
}
