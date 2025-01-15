import { BeamMultipleOutput } from "@/components/animations/beam-multiple-output";
import { BentoCard, LogoCluster, Map } from "@/components/ui";

export function Features() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[70vw] mt-12 bg-">
      <h2 className="text-4xl font-semibold">Why Choose Faw Studios?</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Edition"
          title="Professional Video Editing"
          description="Our team works with industry-leading software like Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and After Effects, ensuring your project benefits from the latest technologies and techniques in video editing."
          graphic={
            <div className="h-80 bg-[url(https://jochentoye.be/wp-content/uploads/2023/10/sanjeev-nagaraj-u4bvBOOpZB4-unsplash-1-1024x683.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          fade={["bottom"]}
          className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
        />
        <BentoCard
          eyebrow="Record"
          title="Professional Video Recording & Production"
          description="Lights. Camera. Magic. Faw Studios specializes in high-quality video production that tells your story with cinematic brilliance. From commercials and corporate films to music videos and short films, we deliver content that leaves a lasting impact."
          graphic={
            <div className="absolute inset-0 bg-[url(https://img.freepik.com/premium-photo/professional-video-recording-studio-setup-with-cameras-lights-laptop-desk_14117-835104.jpg)] bg-center bg-cover bg-no-repeat" />
          }
          fade={["bottom"]}
          className="lg:rounded-tr-4xl lg:col-span-3"
        />
        <BentoCard
          eyebrow="Engagement"
          title="Social Media Engagement"
          description="Because we understand that social media is more than just a platform—it’s a stage for your brand to shine, connect, and inspire."
          graphic={<BeamMultipleOutput />}
          className="lg:rounded-bl-4xl lg:col-span-2"
        />
        <BentoCard
          eyebrow="Brand"
          title="Get the furthest reach"
          description="Your brand deserves to shine. At Faw Studios, we create captivating brand identities that connect with audiences on a deeper level."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="A Global Presence"
          description="With a footprint that spans continents, Faw Studios is proud to bring creativity and innovation to clients all over the world."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
        />
      </div>
    </div>
  );
}
