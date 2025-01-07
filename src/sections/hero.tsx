import { PhoneScroll } from "@/components/animations/phone-scroll";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { INFINITE_GIFS_ITEMS } from "@/constants/infinite-moving-gifs";
import styles from "@/styles/style";

export function Hero() {
  return (
    <>
      <div className={`${styles.flexColCenter} gap-1`}>
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400  md:text-5xl leading-normal md:leading-normal">
          Engage. Boost. Grow.
        </h1>
        <p className="text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
          FAW is the post-production studio of choice for the biggest YouTubers.
        </p>

        <div className="flex gap-8 mt-4">
          <button className="font-bold px-8 py-2 rounded-full bg-gradient-to-b from-main-100 to-main-200 text-darker focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Book a call
          </button>
        </div>
      </div>

      {/* Hero Animated */}
      <div className={`${styles.flexColCenter} relative w-full h-[30vh]`}>
        <div className={`${styles.flexCenter}  w-full`}>
          <div className="absolute top-[134px] left-0 w-full">
            <InfiniteMovingCards speed="normal" items={INFINITE_GIFS_ITEMS} />
          </div>

          <PhoneScroll />
        </div>
      </div>
    </>
  );
}
