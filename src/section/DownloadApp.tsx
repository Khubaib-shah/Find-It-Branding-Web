"use client";
import ArrowBtn from "@/components/ArrowBtn";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // only allowed keys here
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DownloadApp = () => {
  return (
    <Section
      className="flex flex-col-reverse md:flex-row mt-14 justify-between py-0 pe-4 mb-20 items-center md:items-start"
      id="download"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 md:mt-10 text-center md:text-left"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-2 justify-center md:justify-start max-w-full md:max-w-[274px] lg:max-w-[360px] relative"
        >
          <Title
            title="Download Mobile App"
            className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          />
          <ArrowBtn url="testimonials" />
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-4"
        >
          <motion.div
            variants={item}
            className="flex gap-2.5 flex-wrap min-w-56 lg:min-w-72 justify-center sm:justify-start mt-1"
          >
            <Image
              src="/app-store.png"
              alt="App Store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-12 md:h-8 lg:h-11 xl:h-12 w-auto"
            />
            <Image
              src="/play-store.png"
              alt="Play Store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-12 md:h-8 lg:h-11 xl:h-12 w-auto"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="text-[#555555] font-medium text-sm sm:text-base md:text-lg lg:text-2xl mt-3 sm:mt-0 max-w-[250px] sm:max-w-none mb-3 md:mb-0 lg:w-1/2"
          >
            Your trusted place to report and recover lost item
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end"
      >
        <Image
          src="/hand-iPhone.png"
          alt="iPhone App Preview"
          width={250}
          height={0}
          className="sm:w-[280px] md:w-[300px] h-auto"
        />
      </motion.div>
    </Section>
  );
};

export default DownloadApp;
