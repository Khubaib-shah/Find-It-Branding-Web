"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center space-x-2 relative overflow-hidden"
    >
      <Image
        src={Logo}
        alt="Find It"
        className="size-4 sm:size-7 object-contain"
        priority
      />

      <span className="relative text-base sm:text-lg md:text-2xl font-semibold md:font-bold  text-black/80">
        Find IT
        <motion.span
          className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12"
          animate={{ left: ["-150%", "150%"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </span>
    </motion.div>
  );
};

export default Brand;
