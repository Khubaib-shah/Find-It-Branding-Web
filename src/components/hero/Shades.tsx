"use client";
import { motion } from "framer-motion";

const Shades = ({
  className,
  hidden,
}: {
  className?: string;
  hidden?: string;
}) => {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full ${
          className ??
          "size-[370px] top-[-200px] left-[40%] sm:top-[-220px] md:top-[-240px] lg:top-[-200px] opacity-100 blur-3xl"
        }`}
        style={{
          transform: "translateX(-50%)",
          background: "#4285F466",
          zIndex: -1,
        }}
      />

      <motion.div
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full ${hidden ?? ""}`}
        style={{
          width: "320px",
          height: "380px",
          top: "-200px",
          left: "55%",
          transform: "translateX(-50%)",
          background: "#84D589",
          opacity: 0.8,
          filter: "blur(150px)",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default Shades;
