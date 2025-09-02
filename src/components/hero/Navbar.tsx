"use client";
import { motion } from "framer-motion";
import Brand from "../Brand";

function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 z-10">
      <Brand />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="relative overflow-hidden bg-[#111111] text-white rounded-lg sm:px-3.5 sm:py-2.5 py-1.5 px-2.5 font-medium text-xs cursor-pointer"
      >
        Download App
        <motion.span
          className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-180"
          animate={{ left: ["-150%", "150%"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </motion.button>
    </header>
  );
}

export default Navbar;
