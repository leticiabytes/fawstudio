import { motion, useScroll, useTransform } from "framer-motion";
import { FlipWords, NumberTicker } from "@/components/ui";
import { FLIP_WORDS } from "@/constants/flip-words";

export function About() {
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [200, 500], [0, 1]);

  return (
    <motion.div style={{ opacity: textOpacity }} className="h-screen">
      <div className="w-full flex flex-col relative z-50 top-[50px] md:top-[40px]">
        <div className="flex justify-between mt-48">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1">
            <div className="max-w-lg">
              <div className="mt-4 backdrop-blur-sm bg-white/30 text-xs w-fit bg-white rounded-full shadow-xl px-4 py-0.5">
                ✨<span className="ml-2 text-white">Build for you</span>
              </div>
              <h2 className="text-4xl mt-4 font-normal bg-clip-text text-white">
                Join the studio that creates <br /> the
                <FlipWords words={FLIP_WORDS} className="text-main-200" />
                videos
              </h2>
              <p className="mt-4 text-md text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                reprehenderit deleniti, eaque vel qui impedit distinctio
                exercitationem similique
              </p>

              <div className="grid grid-cols-2 gap-y-8 my-8 text-white">
                <div className="">
                  <p className="text-3xl font-bold">
                    <NumberTicker
                      value={4000}
                      className="mr-1 bg-clip-text text-white"
                    />
                    +
                  </p>
                  <p className="text-zinc-500">Influencers</p>
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

              {/* <button className="font-bold px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Book a call
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
