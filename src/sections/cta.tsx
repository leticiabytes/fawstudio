import {
  IconPencil,
  IconPalette,
  IconVideo,
  IconDeviceImacSearch,
} from "@tabler/icons-react";
import { ShimmerButton } from "@/components/ui";

import logoDark from "@/assets/logo-dark.svg";

export function CTA() {
  return (
    <section className="bg-white flex flex-col items-center py-24">
      <div className="flex items-center flex-col max-w-[980px]">
        <div className="flex flex-col items-center w-full pb-8">
          <img src={logoDark} alt="FAW Logo" className="size-32" />
          <h2 className="text-3xl lg:text-7xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
          </h2>
          <p className="mt-5 mb-4 max-w-[80%] md:max-w-[58%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, voluptate, quae voluptatem quas{" "}
            <a className="text-[#06c]" href="#">
              faw.studios
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-10 justify-between w-full md:flex md:flex-row">
          <div className="flex flex-col items-center">
            <IconPencil stroke={1} className="md:size-20 size-14" />
            <p className="text-sm md:text-lg font-light">Road map</p>
          </div>

          <div className="flex flex-col items-center">
            <IconVideo stroke={1} className="md:size-20 size-14" />
            <p className="text-sm md:text-lg font-light">Post production</p>
          </div>

          <div className="flex flex-col items-center">
            <IconDeviceImacSearch stroke={1} className="md:size-20 size-14" />
            <p className="text-sm md:text-lg font-light">SEO</p>
          </div>

          <div className="flex flex-col items-center">
            <IconPalette stroke={1} className="md:size-20 size-14" />
            <p className="text-sm md:text-lg font-light">Graphic design</p>
          </div>
        </div>
        <div className="z-10 flex min-h-64 items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Book a call
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
    // <div className="relative overflow-hidden">
    //   <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
    //     <p className="text-center text-6xl font-black text-neutral-50">
    //       Fuzzy Overlay Example
    //     </p>
    //     <p className="text-center text-neutral-400">
    //       This is a basic example of using a lo-fi fuzzy overlay 📺
    //     </p>
    //     <div className="flex items-center justify-center gap-3">
    //       <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
    //         Pricing
    //       </button>
    //       <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
    //         Try it free
    //       </button>
    //     </div>
    //   </div>
    //   <FuzzyOverlay />
    // </div>
  );
}
