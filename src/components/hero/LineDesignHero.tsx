"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroImg from "../../../public/HeroImg.png";

const LineDesignHero = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute inset-0 w-full h-[80%] ${className ?? ""}`}
    >
      <Image
        src={HeroImg}
        alt="Line"
        fill
        sizes="100vw"
        className="object-contain pointer-events-none"
        priority
      />
    </motion.div>
  );
};

export default LineDesignHero;
