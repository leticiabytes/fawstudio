import Marquee from "@/components/ui/marquee";
import { ShinyButton } from "@/components/ui/shiny-button";

import { REVIEWS } from "@/constants/community-reviews";

export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const ReviewCard: React.FC<Review> = ({ img, name, username, body }) => (
  <div className="p-4 bg-white/5 rounded-lg shadow-lg -space-y-5 min-w-[320px] max-w-[420px]">
    <div className="flex flex-col">
      <div className="flex space-x-4 items-center">
        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
        <div className="mt-2">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{username}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="mt-1">{body}</p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const reviews = REVIEWS;
  const marqueeCount = Math.ceil(window.innerHeight / 180);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-appleBackgroundContrast to-transparent z-30"></div>

        <div className="absolute inset-0 z-10 mt-20 flex flex-col items-center justify-center px-4 text-center">
          <div className="z-20 my-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <img src="assets/logo.svg" alt="Logo" className="h-10" />
          </div>
          <h3 className="text-2xl font-bold sm:text-3xl">
            What are you waiting for?
          </h3>
          <p className="m-4 mb-8 text-base sm:text-lg">
            Contact us today and discover how <br /> Faw Studios can bring your
            vision to life.
          </p>

          <ShinyButton className="rounded-full py-3 w-44">
            Book a call →
          </ShinyButton>
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div
            style={{
              transform: `translateY(-12rem) rotate(-16deg)`,
            }}
            className="absolute left-[-10%] w-[120%] py-2"
          >
            <Marquee pauseOnHover={false} reverse={true}>
              {reviews.map((review) => (
                <ReviewCard
                  key={`extra-above-${review.username}`}
                  {...review}
                />
              ))}
            </Marquee>
          </div>

          {Array.from({ length: marqueeCount }).map((_, index) => (
            <div
              key={index}
              style={{
                transform: `translateY(${index * 12}rem) rotate(-16deg)`,
              }}
              className="absolute left-[-10%] w-[120%] py-2"
            >
              <Marquee pauseOnHover={false} reverse={index % 2 === 1}>
                {reviews.map((review) => (
                  <ReviewCard key={`${index}-${review.username}`} {...review} />
                ))}
              </Marquee>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-appleBackgroundContrast to-transparent"></div>
      </div>
    </div>
  );
}
