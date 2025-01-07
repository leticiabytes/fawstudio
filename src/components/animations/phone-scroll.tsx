import { motion, useScroll, useTransform } from "framer-motion";

import phone01 from "/assets/mockups/iphone01.png";
import phone02 from "/assets/mockups/iphone02.png";

export function PhoneScroll() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 450]);
  const x = useTransform(scrollY, [0, 500], [0, -250]);

  const phoneOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const newPhoneOpacity = useTransform(scrollY, [10, 400], [0, 1]);

  return (
    <>
      <motion.div
        style={{ y, x, opacity: phoneOpacity }}
        className="absolute top-[68px] z-50"
      >
        <img src={phone01} alt="Iphone mockup" className="w-[283px]" />
      </motion.div>

      <motion.div
        style={{ y, x, opacity: newPhoneOpacity }}
        className="absolute top-[68px] z-50 hidden md:block"
      >
        <img src={phone02} alt="Iphone mockup" className="w-[283px]" />
      </motion.div>
    </>
  );
}
