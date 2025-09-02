"use client";
import LineDesignHero from "@/components/hero/LineDesignHero";
import Navbar from "@/components/hero/Navbar";
import Shades from "@/components/hero/Shades";
import HandImg from "../../public/handImg.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Shades />

      <section className="relative flex flex-col items-center text-center px-4 mt-12 sm:mt-16 md:mt-14 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-6xl leading-snug max-w-3xl"
        >
          Lost Something? Find it Back!
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-[#555555] max-w-2xl"
        >
          Your trusted place to report and recover lost{" "}
          <br className="hidden sm:block" /> items
        </motion.h4>
      </section>

      <LineDesignHero className="hidden md:block md:top-10 lg:top-0" />

      <div className="relative flex justify-center items-center mt-8 sm:mt-3 ms-[50px] sm:ms-[96px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shades
            className="block w-40 h-40 md:size-60 lg:size-96 top-28 md:top-48 left-9/12 lg:left-8/12 -translate-x-1/2 opacity-70 blur-3xl"
            hidden="hidden"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={HandImg}
              alt="Hand holding an item"
              className="w-[300px] sm:w-[280px] md:w-[380px] lg:w-[480px] h-auto ml-14 md:ml-20 lg:ml-28"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
