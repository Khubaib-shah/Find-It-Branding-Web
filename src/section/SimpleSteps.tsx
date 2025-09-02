"use client";
import Title from "@/components/Title";
import React from "react";
import { motion } from "framer-motion";
import StepsGrid from "@/components/StepsGrid";

const SimpleSteps = () => {
  return (
    <div className="relative">
      <div
        className="flex flex-col md:flex-row justify-between items-center my-28"
        id="how-it's-work"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-2/3 lg:w-1/2"
        >
          <Title
            title="Simple Steps to Recover Your Lost Items"
            className="leading-8 w-4/5"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base font-medium text-[#555555]/70 md:w-1/3"
        >
          Report lost items, search easily, get smart matches, and recover
          securely — all in one place.
        </motion.p>
      </div>

      <StepsGrid />
    </div>
  );
};

export default SimpleSteps;
