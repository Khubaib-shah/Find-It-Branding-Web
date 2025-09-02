"use client";

import { motion, MotionProps } from "framer-motion";
export interface SectionProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...motionProps
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, backgroundColor: "rgba(66,133,244,0)" }}
      whileInView={{ opacity: 1, backgroundColor: "rgba(66,133,244,0.06)" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      {...motionProps}
      className={`w-full rounded-xl shadow-lg  p-8 ${className} bg-[#4285F40F]`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
