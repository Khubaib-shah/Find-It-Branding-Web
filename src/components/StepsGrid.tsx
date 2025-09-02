"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Section from "./Section";
import { Data } from "@/Constant";

const StepsGrid = () => {
  return (
    <div className="relative grid gap-4 grid-cols-1 grid-rows-none sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-5">
      {/* Center phone */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image src="/phone.png" alt="phone" width={599} height={680} />
      </motion.div>

      {/* Step 1 */}
      <Section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="
          flex flex-col justify-center items-center text-center
          sm:col-span-1
          lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-4
        "
      >
        <Image src={Data[0].icon} alt={Data[0].title} width={40} height={40} />
        <h3 className="mt-3 font-semibold text-lg">{Data[0].title}</h3>
        <p className="text-sm text-gray-600 mt-1">{Data[0].desc}</p>
      </Section>

      {/* Step 2 */}
      <Section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="
          flex flex-col justify-center items-center text-center
          sm:col-span-1
          lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3
        "
      >
        <Image src={Data[1].icon} alt={Data[1].title} width={40} height={40} />
        <h3 className="mt-3 font-semibold text-lg">{Data[1].title}</h3>
        <p className="text-sm text-gray-600 mt-1">{Data[1].desc}</p>
      </Section>

      <Section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="
          flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-start-4 lg:col-end-6 lg:row-start-4 lg:row-end-6
        "
      >
        <Image src={Data[2].icon} alt={Data[2].title} width={40} height={40} />
        <h3 className="mt-3 font-semibold text-lg">{Data[2].title}</h3>
        <p className="text-sm text-gray-600 mt-1">{Data[2].desc}</p>
      </Section>
    </div>
  );
};

export default StepsGrid;
