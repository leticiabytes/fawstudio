import { CobeScaled } from "@/components/ui/cobeglobescaled";

import { FlipWords, NumberTicker } from "@/components/ui";
import { FLIP_WORDS } from "@/constants/flip-words";

export function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex md:py-[120px] max-w-[980px]">
        <div className="flex flex-col md:flex-row items-center gap-x-8 justify-between w-full">
          <div className="flex-1 h-full">
            <div className="space-x-4 flex flex-col items-center content-between h-full">
              {/* <h2 className="text-4xl">Our Big Goal</h2> */}
              <p className="text-start text-zinc-500">
                With every video, every like, and every share, we’re inching
                closer to our ambitious goal of 2 billion views. Join us in
                making this milestone a reality and creating content that leaves
                an impact!
              </p>
              <CobeScaled />
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-4 backdrop-blur-sm bg-white/30 text-xs w-fit bg-white rounded-full shadow-xl px-4 py-0.5 border border-white/10">
              ✨<span className="ml-2 text-white">Build for you</span>
            </div>
            <h2 className="text-[28pt] mt-4 font-normal text-neutral-300/90">
              Join the studio that creates <br /> the
              <FlipWords words={FLIP_WORDS} className="text-white" />
              videos
            </h2>
            <p className="mt-4 text-md text-zinc-400">
              At Faw Studios, we specialize in crafting captivating videos that
              connect with audiences. With a passion for creativity and
              precision, our team brings together scriptwriting, production, and
              motion design to create content that stands out—whether it’s for
              YouTube, social media, or corporate campaigns.
            </p>

            <div className="grid grid-cols-2 gap-y-8 my-8 text-white">
              <div className="">
                <p className="text-3xl font-bold">
                  <NumberTicker
                    value={40}
                    className="mr-1 bg-clip-text text-white"
                  />
                  +
                </p>
                <p className="text-zinc-500">Channels</p>
              </div>

              <div className="">
                <p className="text-3xl font-bold">
                  <NumberTicker
                    value={500}
                    className="mr-1 bg-clip-text text-white"
                  />
                  +
                </p>
                <p className="text-zinc-500">Videos</p>
              </div>

              <div className="">
                <p className="text-3xl font-bold">
                  <NumberTicker
                    value={90}
                    className="mr-1 bg-clip-text text-white"
                  />
                  %
                </p>
                <p className="text-zinc-500">Motion</p>
              </div>

              <div className="">
                <p className="text-3xl font-bold">
                  <NumberTicker
                    value={5}
                    className="mr-1 bg-clip-text text-white"
                  />{" "}
                  mi
                </p>
                <p className="text-zinc-500">Likes</p>
              </div>
            </div>

            {/* <button className="px-8 py-2 rounded-full bg-white/10 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Book a call
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
