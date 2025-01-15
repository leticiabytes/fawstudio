import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BeamMultipleOutput({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-[280px] flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <img src="assets/logo-dark.svg" alt="FAW Studio" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.tiktok />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.instagram />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.youtube />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.facebook />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.vimeo />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  youtube: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83.3282 25.8014C82.4082 22.3373 79.6977 19.6086 76.2555 18.6827C70.0168 17 45 17 45 17C45 17 19.9832 17 13.7441 18.6827C10.3023 19.6086 7.59136 22.3373 6.67136 25.8014C5 32.0809 5 45.1818 5 45.1818C5 45.1818 5 58.2832 6.67136 64.5627C7.59136 68.0268 10.3023 70.755 13.7441 71.6813C19.9832 73.3636 45 73.3636 45 73.3636C45 73.3636 70.0168 73.3636 76.2555 71.6813C79.6977 70.755 82.4082 68.0268 83.3282 64.5627C85 58.2832 85 45.1818 85 45.1818C85 45.1818 85 32.0809 83.3282 25.8014Z"
        fill="#ED1F24"
      />
      <path
        d="M36.8125 57.0766L57.7216 45.1821L36.8125 33.2871V57.0766Z"
        fill="white"
      />
    </svg>
  ),
  tiktok: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.0979 71.8223C44.0658 71.8223 48.934 67.0745 49.1548 61.1608L49.1769 8.34513H58.825C58.6244 7.25952 58.514 6.1438 58.514 5H45.336L45.314 57.8157C45.0932 63.7294 40.225 68.4771 34.2571 68.4771C32.4029 68.4771 30.6551 68.0136 29.118 67.2049C31.1307 69.9962 34.4016 71.8223 38.0979 71.8223Z"
        fill="#25F4EE"
      />
      <path
        d="M37.5258 36.5005V33.3781C36.4542 33.2316 35.3666 33.1413 34.2569 33.1413C20.8823 33.1413 10 44.0235 10 57.4C10 65.6073 14.0997 72.8695 20.3565 77.2601C16.3191 72.9257 13.8428 67.1203 13.8428 60.7431C13.8428 47.5593 24.4161 36.8075 37.5278 36.5005H37.5258Z"
        fill="#25F4EE"
      />
      <path
        d="M76.8498 23.3356V26.2713C72.9027 25.4265 69.425 23.3055 66.8645 20.3657C69.7401 22.2419 73.1695 23.3356 76.8498 23.3356Z"
        fill="#25F4EE"
      />
      <path
        d="M66.8662 20.3651C64.0608 17.1444 62.3571 12.9404 62.3571 8.34311H58.8274C59.7565 13.3638 62.7364 17.6721 66.8662 20.3651Z"
        fill="#FE2C55"
      />
      <path
        d="M34.2572 46.3211C28.1488 46.3211 23.1783 51.2917 23.1783 57.4C23.1783 61.6541 25.5922 65.3507 29.118 67.2049C27.8036 65.3829 27.0211 63.1551 27.0211 60.7431C27.0211 54.6348 31.9916 49.6643 38.1 49.6643C39.2398 49.6643 40.3335 49.8529 41.3689 50.176V36.7212C40.2973 36.5747 39.2097 36.4844 38.1 36.4844C37.9795 36.4844 37.8607 36.4883 37.7419 36.4923C37.6708 36.4946 37.5994 36.497 37.5281 36.4985V46.8308C36.4927 46.5078 35.399 46.3191 34.2592 46.3191L34.2572 46.3211Z"
        fill="#FE2C55"
      />
      <path
        d="M76.8493 36.5127L76.8498 26.2713C78.0879 26.5362 79.3717 26.678 80.6901 26.678V39.8578C73.8573 39.8578 67.5242 37.6726 62.355 33.9622V60.7433C62.355 74.1178 51.4747 85 38.0981 85C31.0987 85 24.7857 82.0181 20.3549 77.2603C24.296 80.0275 29.088 81.6569 34.2572 81.6569C47.6319 81.6569 58.5142 70.7767 58.5142 57.4002V30.6171C63.6834 34.3274 70.0165 36.5127 76.8493 36.5127Z"
        fill="#FE2C55"
      />
      <path
        d="M58.5142 57.4002V30.6171C63.6834 34.3274 70.0165 36.5127 76.8493 36.5127L76.8498 26.2713C72.9027 25.4265 69.4251 23.3075 66.8645 20.3657C62.7347 17.6727 59.7543 13.3658 58.8252 8.34311H49.177L49.1549 61.1588C48.9342 67.0725 44.066 71.8203 38.0981 71.8203C34.4017 71.8203 31.1308 69.9942 29.1181 67.2029C25.5924 65.3467 23.1783 61.6504 23.1783 57.3983C23.1783 51.29 28.1489 46.3194 34.2573 46.3194C35.3971 46.3194 36.4907 46.5081 37.5262 46.8311V36.4988C24.4144 36.8058 13.8412 47.5575 13.8412 60.7414C13.8412 67.1186 16.3174 72.9239 20.3549 77.2583C24.294 80.0235 29.088 81.655 34.2573 81.655C47.6319 81.655 58.5142 70.7728 58.5142 57.3983L58.5142 57.4002Z"
        fill="#000008"
      />
    </svg>
  ),
  vimeo: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.0001 77.0001C85.0001 81.4181 81.4181 85.0001 77.0001 85.0001H13C8.58134 85.0001 5 81.4181 5 77.0001V13C5 8.582 8.58134 5 13 5H77.0001C81.4181 5 85.0001 8.582 85.0001 13V77.0001Z"
        fill="#17B7EA"
      />
      <path
        d="M72.316 31.5671C72.0586 37.1937 68.1286 44.8984 60.5253 54.6784C52.6653 64.8918 46.0146 69.9998 40.5759 69.9998C37.2053 69.9998 34.3533 66.8911 32.0239 60.6691C30.4686 54.9658 28.9146 49.2631 27.3579 43.5597C25.6279 37.3417 23.7726 34.2284 21.7879 34.2284C21.3553 34.2284 19.8419 35.1384 17.2506 36.9511L14.5312 33.4484C17.3846 30.9417 20.1986 28.4357 22.9673 25.9251C26.7726 22.6384 29.6313 20.9091 31.5353 20.7344C36.0333 20.3017 38.8026 23.3771 39.8419 29.9591C40.9653 37.0611 41.7433 41.4784 42.1793 43.2064C43.4779 49.0998 44.9053 52.0431 46.4626 52.0431C47.6713 52.0431 49.4899 50.1318 51.9146 46.3078C54.334 42.4871 55.6306 39.5791 55.806 37.5804C56.152 34.2817 54.854 32.6291 51.9146 32.6291C50.5299 32.6291 49.1026 32.9471 47.6346 33.5764C50.4766 24.2717 55.9053 19.7531 63.9166 20.0104C69.8573 20.1851 72.6593 24.0371 72.316 31.5671Z"
        fill="white"
      />
    </svg>
  ),
  instagram: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_799_5500"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="81"
        height="81"
      >
        <path
          d="M28.2542 5.09731C23.9981 5.29819 21.0912 5.9799 18.551 6.97524C15.9214 8.00037 13.6923 9.37419 11.4749 11.6007C9.2548 13.8286 7.89141 16.0616 6.87408 18.6938C5.8891 21.2405 5.22165 24.1488 5.0337 28.4075C4.8471 32.674 4.80431 34.0348 4.82511 44.8968C4.84583 55.7574 4.89377 57.1208 5.09722 61.3886C5.30067 65.6435 5.97984 68.5491 6.97517 71.0906C8.0016 73.7202 9.37401 75.9481 11.6018 78.1669C13.8284 80.3857 16.0627 81.7478 18.6961 82.7665C21.2402 83.7502 24.1497 84.4202 28.4071 84.6068C32.6736 84.7947 34.0356 84.8362 44.8949 84.8155C55.7592 84.7947 57.1214 84.7468 61.3878 84.5446C65.6439 84.3411 68.5482 83.6594 71.091 82.6667C73.7205 81.6376 75.9496 80.2677 78.1671 78.0399C80.3846 75.8133 81.7479 73.579 82.7654 70.9455C83.7503 68.4014 84.4203 65.4918 84.6057 61.237C84.7923 56.9679 84.8364 55.6045 84.8156 44.7438C84.7949 33.8819 84.7457 32.5211 84.5435 28.2559C84.3413 23.9972 83.6596 21.0928 82.6655 18.55C81.6378 15.9204 80.2667 13.6938 78.0401 11.4737C75.8136 9.25625 73.5793 7.89023 70.9458 6.87546C68.4005 5.89047 65.4922 5.21912 61.2348 5.03509C56.9684 4.84587 55.6063 4.80443 44.7432 4.82515C33.8827 4.84588 32.5207 4.89255 28.2542 5.09731ZM28.7208 77.4074C24.8211 77.2376 22.7034 76.5896 21.2921 76.0466C19.4232 75.3234 18.0897 74.4564 16.6861 73.0632C15.2851 71.6647 14.4155 70.335 13.6858 68.4701C13.1376 67.0587 12.478 64.9436 12.2952 61.0439C12.0969 56.8279 12.0516 55.563 12.0321 44.8825C12.0114 34.2046 12.0502 32.9397 12.2343 28.7199C12.4015 24.8227 13.0534 22.7024 13.5951 21.2924C14.3182 19.4209 15.1827 18.0899 16.5785 16.6863C17.9769 15.2827 19.3066 14.4157 21.1728 13.686C22.5829 13.1352 24.698 12.4807 28.5963 12.2954C32.8148 12.0958 34.0784 12.053 44.7562 12.0323C55.4365 12.0115 56.7014 12.0492 60.9212 12.2345C64.8183 12.4043 66.9385 13.0497 68.3473 13.5953C70.2174 14.3185 71.551 15.1803 72.9533 16.5787C74.3556 17.9772 75.2252 19.3043 75.9548 21.1744C76.5056 22.5806 77.1601 24.6983 77.3442 28.5954C77.545 32.814 77.5904 34.0789 77.6098 44.7568C77.6305 55.4373 77.5917 56.7022 77.4064 60.9194C77.2366 64.8191 76.5899 66.9382 76.0456 68.3508C75.3224 70.2184 74.4579 71.552 73.0608 72.9556C71.6638 74.354 70.3341 75.2262 68.4665 75.9559C67.0591 76.5053 64.9414 77.1611 61.0456 77.3465C56.8272 77.5448 55.5635 77.5901 44.8819 77.6096C34.2041 77.6303 32.9405 77.5901 28.7208 77.4074ZM61.3295 23.4386C61.3346 26.0877 63.4886 28.2326 66.1376 28.2274C68.7879 28.2222 70.9328 26.0695 70.929 23.4204C70.9237 20.7714 68.7698 18.6252 66.1195 18.6304C63.4692 18.6355 61.3243 20.7895 61.3295 23.4386ZM24.282 44.8592C24.304 56.2032 33.5173 65.379 44.8586 65.357C56.2012 65.335 65.382 56.1242 65.3601 44.7801C65.338 33.44 56.1234 24.259 44.7795 24.281C33.4382 24.303 24.2599 33.5177 24.282 44.8592ZM31.4864 44.8449C31.4734 37.4822 37.4325 31.5011 44.7938 31.4882C52.1564 31.4739 58.1387 37.4304 58.1529 44.7944C58.1673 52.1584 52.2082 58.1382 44.8443 58.1525C37.483 58.1667 31.5007 52.2089 31.4864 44.8449Z"
          fill="#000008"
        />
      </mask>
      <g mask="url(#mask0_799_5500)">
        <rect
          x="1.46875"
          y="1.47168"
          width="87.1"
          height="87.1"
          fill="url(#paint0_radial_799_5500)"
        />
        <g filter="url(#filter0_f_799_5500)">
          <ellipse
            cx="17.769"
            cy="-1.84334"
            rx="50.25"
            ry="35.175"
            transform="rotate(-14.9317 17.769 -1.84334)"
            fill="#7334FF"
          />
        </g>
        <g filter="url(#filter1_f_799_5500)">
          <circle cx="85.7786" cy="2.02962" r="47.4583" fill="#B202F5" />
        </g>
        <g filter="url(#filter2_f_799_5500)">
          <circle cx="18.218" cy="79.6379" r="26.8" fill="#FFB401" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_799_5500"
          x="-68.4828"
          y="-75.0736"
          width="172.501"
          height="146.46"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="18.425"
            result="effect1_foregroundBlur_799_5500"
          />
        </filter>
        <filter
          id="filter1_f_799_5500"
          x="-6.34636"
          y="-90.0954"
          width="184.251"
          height="184.25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="22.3333"
            result="effect1_foregroundBlur_799_5500"
          />
        </filter>
        <filter
          id="filter2_f_799_5500"
          x="-44.3154"
          y="17.1046"
          width="125.068"
          height="125.066"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="17.8667"
            result="effect1_foregroundBlur_799_5500"
          />
        </filter>
        <radialGradient
          id="paint0_radial_799_5500"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.0854 84.6633) rotate(-61.8868) scale(46.2103)"
        >
          <stop stop-color="#FFD502" />
          <stop offset="0.869374" stop-color="#FF1154" />
        </radialGradient>
      </defs>
    </svg>
  ),
  facebook: () => (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85 45C85 22.9086 67.0914 5 45 5C22.9086 5 5 22.9086 5 45C5 64.9649 19.6273 81.5133 38.75 84.5141V56.5625H28.5938V45H38.75V36.1875C38.75 26.1625 44.7219 20.625 53.8586 20.625C58.2352 20.625 62.8125 21.4063 62.8125 21.4063V31.25H57.7687C52.8 31.25 51.25 34.3336 51.25 37.4969V45H62.3438L60.5703 56.5625H51.25V84.5141C70.3727 81.5133 85 64.9656 85 45Z"
        fill="#1877F2"
      />
      <path
        d="M60.5703 56.5625L62.3438 45H51.25V37.4969C51.25 34.3336 52.8 31.25 57.7687 31.25H62.8125V21.4062C62.8125 21.4062 58.2352 20.625 53.8586 20.625C44.7219 20.625 38.75 26.1625 38.75 36.1875V45H28.5938V56.5625H38.75V84.5141C40.7867 84.8336 42.8734 85 45 85C47.1266 85 49.2133 84.8336 51.25 84.5141V56.5625H60.5703Z"
        fill="white"
      />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
