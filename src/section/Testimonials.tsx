"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import TestimonialCard from "@/components/TestimonialCard";
import Title from "@/components/Title";
import { testimonials } from "@/Constant";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      console.log(clientWidth - 116);
      sliderRef.current.scrollBy({
        left: direction === "left" ? -clientWidth - 70 : clientWidth - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section
      className="lg:mt-40 mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 lg:gap-16 overflow-hidden pb-0"
      id="testimonials"
    >
      {/* Content */}
      <div className="w-full md:w-1/3  flex flex-col items-start ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Title
            title="Customer reviews and feedback from real users."
            className="font-medium leading-8 sm:leading-9 tracking-wider mb-4 sm:mb-6"
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            initial={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.8 }}
            whileInView={{ opacity: 1, width: 40 }}
            onClick={() => scroll("left")}
            className="h-10"
          >
            <img src="/arrowBtn.png" alt="Left Button" className="h-full" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, width: 0 }}
            transition={{ delay: 1 }}
            whileInView={{ opacity: 1, width: 40 }}
            onClick={() => scroll("right")}
            className="rotate-180 h-10"
          >
            <img src="/arrowBtn.png" alt="Right Button" className="h-full" />
          </motion.button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="w-full md:w-1/2 relative overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
          className="flex gap-6 sm:gap-8 md:gap-6 lg:gap-10 ps-2 sm:ps-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 1 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ x: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ x: 0 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0"
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
