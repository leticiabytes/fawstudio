import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export function VideoBg() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0, 1], [1, 0.5, 0]);

  return (
    <div className="bg-appleBackground text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 h-[200vh] w-full"
      >
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="sticky top-0 h-screen w-full object-cover"
        >
          <source src="/src/assets/videos/showroom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            Faw studio lorem ipsum. <br />
            Dolor sit a met.
          </h1>
          <Button className="mb-16" size="large">
            Book a call
          </Button>

          {/* <p className="font-semibold">Watch on the 📺 app.</p> */}
        </motion.div>
      </Container>
    </div>
  );
}
