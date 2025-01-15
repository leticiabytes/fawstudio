import { motion } from "framer-motion";

function Marker({
  src,
  top,
  offset,
  delay,
}: {
  src: string;
  top: number;
  offset: number;
  delay: number;
}) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      style={{ "--offset": `${offset}px`, top } as React.CSSProperties}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5 dark:fill-white/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white dark:fill-black"
        />
      </svg>
      <img
        alt=""
        src={src}
        className="absolute bg-center left-[7px] top-[4px] size-6 rounded-full"
      />
    </motion.div>
  );
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="absolute inset-0 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_%28blue_dots%29.svg)] bg-[length:430px_230px] bg-center bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
      <div className="absolute inset-0">
        <Marker
          src="https://yt3.googleusercontent.com/rNvpQ8BfT9Ca1UkQqtXI2iA3VUMXHaSDDsycYu6AHqjxJ8jxwOhUAjnhjrrTnz0QGpt6nolQJ7A=s160-c-k-c0x00ffffff-no-rj"
          top={86}
          offset={-128}
          delay={0.15}
        />
        <Marker
          src="https://media.licdn.com/dms/image/v2/D4D0BAQGahCjeovwxcQ/company-logo_200_200/company-logo_200_200/0/1704835640219/el_professora_da_oratria_logo?e=2147483647&v=beta&t=dtnAFvPTbbgHox29-BXUWd9zT58Oco-Vq9wMuVjrQEU"
          top={190}
          offset={-100}
          delay={0.4}
        />
        <Marker
          src="https://yt3.googleusercontent.com/EVke1yjPl5XYpzwqzy32SAngsOuAUZ8fyQK96VMKvxhJw8unUG0gYotZCZ_ua5gxYT3FpTL8=s900-c-k-c0x00ffffff-no-rj"
          top={130}
          offset={-140}
          delay={0.3}
        />
        <Marker
          src="https://yt3.googleusercontent.com/8ET-iJRTDbwGAoVIDhWSXZijpyWHsr6yFaFBOszVuO0MImXq2u-HbpBk-SNwpkWv4ygMNnENIcY=s900-c-k-c0x00ffffff-no-rj"
          top={102}
          offset={104}
          delay={0.6}
        />
        <Marker
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTspV58zwwT05x3in1_bX57uc2L1znwP6eQ&s"
          top={160}
          offset={-5}
          delay={0.8}
        />
      </div>
    </div>
  );
}
