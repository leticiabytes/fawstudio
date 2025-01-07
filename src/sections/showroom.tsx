import { Usps } from "@/components/animations/usps";
import { VideoBg } from "@/components/animations/video-bg";
import { VideoCarousel } from "@/components/animations/video-carousel";

export function Showroom() {
  return (
    <div>
      <div className="bg-appleBackground relative z-10">
        <VideoBg />
        <Usps />
      </div>
      <VideoCarousel />
    </div>
  );
}
