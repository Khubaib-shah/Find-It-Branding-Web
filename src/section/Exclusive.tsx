"use client";

import ArrowBtn from "@/components/ArrowBtn";
import Section from "@/components/Section";
import Title from "@/components/Title";
import ExclusiveImg from "../../public/Exclusive.png";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Exclusive = () => {
  return (
    <Section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 md:my-10"
      id="features"
    >
      <motion.div
        className="flex justify-center items-center gap-4 md:gap-8 md:w-1/2 sm:flex-3"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ArrowBtn url="how-it's-work" />
        <div className="flex-8 md:flex-9">
          <Title title="Exclusive Search Section" />
          <p className="font-medium text-[#555555]/70 text-base leading-5 sm:text-base sm:w-4/5 lg:w-[70%]">
            Our app helps you report lost items, search seamlessly, get smart
            matches, and ensure secure recovery — all in one place.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex-1 md:w-1/2 md:flex justify-center md:justify-end hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image src={ExclusiveImg} alt="Exclusive Search" />
      </motion.div>
    </Section>
  );
};

export default Exclusive;
