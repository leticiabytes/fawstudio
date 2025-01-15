import { AnimatedText } from "@/components/ui";

export function Footer() {
  return (
    <div className="p-10">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-appleBackgroundContrast to-transparent z-30" />

      <footer
        className="relative p-24 2xl:h-[550px] h-fit lg:pb-20 w-[95%] mx-auto rounded-lg overflow-hidden radial-gradient-bg
                   [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
                   dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]"
      >
        <div className="gap-10 sm:flex justify-between p-32 2xl:py-10 py-5 dark:bg-appleBackground-900 bg-zinc-950 rounded-lg text-white">
          <div className="w-fit flex-col flex justify-center">
            <div className="2xl:w-24 2xl:h-24 flex items-center justify-center w-20 h-20 ml-3 bg-white rounded-sm before:absolute relative before:w-full before:h-full before:bg-white/50 before:rounded-md before:-top-3 before:-left-3">
              <img
                src="assets/logo-dark.svg"
                alt="Faw Studios"
                className="size-14 z-50"
              />
            </div>
            <article className="py-2 2xl:w-80 w-64 space-y-1 z-50">
              <h1 className="text-3xl font-bold">FAW Studios</h1>
              <p className="text-sm leading-[120%]">
                Whether crafting breathtaking visuals, immersive digital
                experiences, or unforgettable narratives, we push creative
                boundaries to deliver projects that resonate deeply with your
                audience.
              </p>
            </article>
          </div>

          <div className="sm:block flex sm:mt-0 mt-4  gap-2 sm:w-auto w-full sm:space-y-2 relative z-[1]">
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-gray-50 sm:w-auto w-full grid place-content-center 2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
            >
              <img
                src="assets/icons/instagram.svg"
                alt="Instagram"
                className="size-24"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="bg-gray-50 sm:w-auto w-full  grid place-content-center  2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
            >
              <img
                src="assets/icons/youtube.svg"
                alt="Youtube"
                className="size-24"
              />
            </a>
          </div>
        </div>
      </footer>
      <div className="lg:flex relative top-16 hidden">
        <AnimatedText
          text="FAW STUDIOS"
          className="2xl:text-[11rem] text-[12vw]"
        />
      </div>
      <div className="mt-10 text-center text-sm text-white">
        <p className="mb-4">All Rights Reserved © 2025</p>
      </div>
    </div>
  );
}
