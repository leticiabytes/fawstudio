// import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./interactive-hover-button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "./animated-gradient-text";

export const PriceCard: React.FC<{
  badge: string;
  iconBadge?: string;
  productName: string;
  description: string;
  offerings: string[];
}> = ({ badge, iconBadge = "🎉", productName, description, offerings }) => {
  return (
    <div className="flex-1">
      <a
        href=""
        target="__blank"
        className="bg-slate-900 no-underline group mb-8 cursor-pointer relative  shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(224, 237, 242, 0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>

        <AnimatedGradientText>
          {iconBadge} <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#f0f4ff] via-[#ffffff] to-[#d9f2ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            {badge}
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </a>
      <h4 className="leading-10 mb-4">{productName}</h4>

      <p className="text-zinc-400 text-sm font-normal mb-4 min-h-16">
        {description}
      </p>

      {offerings.map((offering, index) => (
        <li key={index} className="flex gap-2 items-center font-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-4 fill-white"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base text-white">{offering}</span>
        </li>
      ))}

      <div className="">
        <p className="text-xs text-gray-400 font-thin mt-4">
          Get more details:
        </p>
        <InteractiveHoverButton
          text="Book a call"
          className="w-full bg-transparent border border-white/30 text-lg"
        />
      </div>
    </div>
  );
};
